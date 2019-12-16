import React from "react";

export default function Footer({ todoLength, handleDisplayState }) {
  function handleClick(e) {
    console.log("Footer clicked", e.target);
  }

  return (
    <div>
      <span>{todoLength}test(7)</span>
      <button onClick={handleClick}>All</button>
      <button onClick={handleClick}>Active</button>
      <button onClick={handleClick}>Completed</button>
    </div>
  );
}
