import React from "react";
import "./TitleList.css";
import Search from "./Search";
import Title from "./Title";
import AddTitle from "./AddTitle";

export default function TitleList({ titles, isSearching, handleAddTitle, handleNowTitle, handleSearchState, handleDisplayState }) {
  return (
    <div id="TitleList">
      <Search isSearching={isSearching} handleSearchState={handleSearchState} />
      {titles.map((title, idx) => (
        <Title key={idx} title={title} handleNowTitle={handleNowTitle} handleDisplayState={handleDisplayState} />
      ))}

      <AddTitle handleNowTitle={handleNowTitle} handleAddTitle={handleAddTitle} />
    </div>
  );
}
