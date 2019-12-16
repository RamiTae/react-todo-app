import React from "react";
import "./Title.css";

export default function Title({ title, handleNowTitle, handleSearchState }) {
  function handleOnClick(e) {
    console.log("title clicked", e);
  }

  return <div onClick={handleOnClick}>{title}test1</div>;
}
