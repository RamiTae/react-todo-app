import React, { Component } from "react";
import "./TitleList.css";
import Search from "./Search";
import Title from "./Title";
import AddTitle from "./AddTitle";

export default class TitleList extends Component {
  render() {
    const { titles, handleAddTitle, handleNowTitle, handleSearchState } = this.props;
    return (
      <div id="TitleList">
        <Search handleSearchState={handleSearchState} />
        {titles.map((title, idx) => (
          <Title key={idx} title={title} handleNowTitle={handleNowTitle} handleSearchState={handleSearchState} />
        ))}

        <AddTitle handleSearchState={handleSearchState} handleNowTitle={handleNowTitle} handleAddTitle={handleAddTitle} />
      </div>
    );
  }
}
