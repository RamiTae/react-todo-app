import React from "react";
import "./Title.css";

export default function Title({ title, handleNowTitle, handleDisplayState }) {
  function handleOnClick(e) {
    // console.log(handleNowTitle(e.target.innerText));
    handleNowTitle(e.target.innerText);
    handleDisplayState("All");
  }

  return <div onClick={handleOnClick}>{title}</div>;
}
