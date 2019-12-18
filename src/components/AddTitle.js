import React, { Component } from "react";

export default class AddTitle extends Component {
  constructor(props) {
    //{ handleSearchState, handleNowTitle, handleAddTitle }
    super(props);
    this.state = {
      isAddingTitle: false
    };
    this.handleOnClick = this.handleOnClick.bind(this);
    this.handleOnChange = this.handleOnChange.bind(this);
    this.handleKeyClick = this.handleKeyClick.bind(this);
  }

  componentDidMount() {
    //마우스 클릭을 지켜봄.
    //* isAddingTitle === true : text박스 이외의 공간 클릭 > isSearching이 false로 & titles에 데이터 추가
  }

  handleOnClick() {
    this.setState({ isAddingTitle: true });
  }

  handleOnChange(e) {
    // console.log(this.props.handleNowTitle(e.target.value));
    this.props.handleNowTitle(e.target.value);
  }

  handleKeyClick(e) {
    if (e.keyCode === 13) {
      this.setState({ isAddingTitle: false });
      this.props.handleAddTitle(e.target.value);
    }
  }

  render() {
    return (
      <div>
        {this.state.isAddingTitle ? <input type="text" onChange={this.handleOnChange} onKeyDown={this.handleKeyClick} onClick={this.handleOnChange} placeholder="입력" autoFocus></input> : null}
        <button onClick={this.handleOnClick}>+ 목록 추가</button>
      </div>
    );
  }
}
