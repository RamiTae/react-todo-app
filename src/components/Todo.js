import React from "react";

export default function Todo({ todo, handleTodo }) {
  let isChecked = false;
  function handleRadio(e) {
    // console.log(isChecked);
    if (e.target.checked && isChecked) {
      e.target.checked = !e.target.checked;
      isChecked = false;
    } else {
      isChecked = true;
    }
    console.log("redio clicked", e.target.checked);
  }

  return (
    <div>
      <input type="radio" onClick={handleRadio} />
      <span>{todo}test Todo</span>
    </div>
  );
}
