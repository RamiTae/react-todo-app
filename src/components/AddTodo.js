import React from "react";

export default function AddTodo({ nowTitle, handleAddTodo, handleIsAddingTodo }) {
  function handleKeyDown(e) {
    // console.log(e);
    if (e.shiftKey) {
      return;
    } else if (e.keyCode === 13) {
      handleAddTodo(nowTitle, e.target.value);
      handleIsAddingTodo(false);
    }
  }

  return <textarea id="AddTodo" onKeyDown={handleKeyDown} placeholder="입력을 완료하고 싶다면 Enter를 누르세요" autoFocus />;
}
