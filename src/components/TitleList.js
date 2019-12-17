import React, { Component } from "react";
import "./TitleList.css";
import Search from "./Search";
import Title from "./Title";
import AddTitle from "./AddTitle";

export default class TitleList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isAddingTitle: false
    };
    this.handleIsAddingTitle = this.handleIsAddingTitle.bind(this);
    this.handleOnChange = this.handleOnChange.bind(this);
  }

  handleIsAddingTitle(isAddingTitle) {
    this.setState({ isAddingTitle });
  }

  handleOnChange(e) {
    console.log(this.props.handleNowTitle(e.target.value));
  }

  render() {
    const { titles, handleNowTitle, handleSearchState } = this.props;
    return (
      <div id="TitleList">
        <Search />
        {titles.map((title, idx) => (
          <Title key={idx} title={title} handleNowTitle={handleNowTitle} handleSearchState={handleSearchState} />
        ))}
        {this.state.isAddingTitle ? <input type="text" onChange={this.handleOnChange} placeholder="입력"></input> : null}
        <AddTitle />
      </div>
    );
  }
}
