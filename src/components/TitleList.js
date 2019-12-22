import React from "react";
import "./TitleList.css";
import Search from "./Search";
import Title from "./Title";
import AddTitle from "./AddTitle";

export default function TitleList({ titles, isSearching, isAddingTitle, handleIsAddingTitle, handleAddTitle, handleNowTitle, handleSearchState, handleDisplayState, handleRef }) {
  return (
    <div className="TitleList">
      <Search isSearching={isSearching} handleSearchState={handleSearchState} />
      {titles.map((title, idx) => (
        <Title key={idx} title={title} handleNowTitle={handleNowTitle} handleDisplayState={handleDisplayState} />
      ))}

      <AddTitle isAddingTitle={isAddingTitle} handleIsAddingTitle={handleIsAddingTitle} handleNowTitle={handleNowTitle} handleAddTitle={handleAddTitle} handleRef={handleRef} />
    </div>
  );
}
