import React, { Component } from "react";

export default class AddTitle extends Component {
  constructor(props) {
    super(props);
    this.titleInput = React.createRef();

    this.handleOnClick = this.handleOnClick.bind(this);
    this.handleOnChange = this.handleOnChange.bind(this);
    this.handleKeyClick = this.handleKeyClick.bind(this);
  }

  handleOnClick() {
    this.props.handleIsAddingTitle(true);
  }

  handleOnChange(e) {
    // console.log(thandleNowTitle(e.target.value));
    this.props.handleNowTitle(e.target.value);
    this.props.handleRef("titleInput", this.titleInput.current);
  }

  handleKeyClick(e) {
    if (e.keyCode === 13) {
      this.props.handleIsAddingTitle(false);
      this.props.handleAddTitle(e.target.value);
    }
  }

  render() {
    const { isAddingTitle } = this.props;

    return (
      <div>
        {isAddingTitle ? <input type="text" ref={this.titleInput} onChange={this.handleOnChange} onKeyDown={this.handleKeyClick} placeholder="입력" autoFocus></input> : null}
        <button onClick={this.handleOnClick}>+ 목록 추가</button>
      </div>
    );
  }
}
