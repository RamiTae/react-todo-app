import React from "react";

export default function AddTodo({ nowTitle, handleAddTodo, handleIsAddingTodo }) {
  function handleKeyClick(e) {
    if (e.keyCode === 13) {
      handleAddTodo(nowTitle, e.target.value);
      handleIsAddingTodo(false);
    }
  }

  return <input type="text" onKeyDown={handleKeyClick} placeholder="입력을 완료하고 싶다면 Enter를 누르세요" autoFocus />;
}
