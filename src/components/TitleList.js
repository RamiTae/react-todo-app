import React, { Component } from "react";
import "./TitleList.css";
import Search from "./Search";
import Title from "./Title";
import AddTitle from "./AddTitle";

export default class TitleList extends Component {
  render() {
    return (
      <div id="TitleList">
        <Search />
        <Title />
        <AddTitle />
      </div>
    );
  }
}
