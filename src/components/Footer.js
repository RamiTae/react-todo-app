import React from "react";

export default function Footer({ displayState, todoLength, handleDisplayState }) {
  console.log({ displayState });
  let text = "총";
  if (displayState !== "All") {
    text = displayState === "Active" ? "할 일" : "완료됨";
  }

  function handleClick(e) {
    handleDisplayState(e.target.innerText);
    // console.log("Footer clicked", e.target);
  }

  return (
    <div>
      <span>
        {text}: {todoLength} 개
      </span>
      <button onClick={handleClick}>All</button>
      <button onClick={handleClick}>Active</button>
      <button onClick={handleClick}>Completed</button>
    </div>
  );
}
