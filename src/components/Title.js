import React from "react";
import "./Title.css";

export default function Title({ title, handleNowTitle, handleSearchState }) {
  function handleOnClick(e) {
    // console.log(handleSearchState(false));
    // console.log(handleNowTitle(e.target.innerText));
    handleNowTitle(e.target.innerText);
  }

  return <div onClick={handleOnClick}>{title}</div>;
}
