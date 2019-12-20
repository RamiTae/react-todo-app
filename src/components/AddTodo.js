import React from "react";

export default function AddTodo({ nowTitle, handleAddTodo, handleIsAddingTodo }) {
  function handleKeyClick(e) {
    // console.log(e);
    if (e.shiftKey) {
      return;
    } else if (e.keyCode === 13) {
      handleAddTodo(nowTitle, e.target.value);
      // handleAddTodo(nowTitle, "aaa ggg <br>vvvv");
      handleIsAddingTodo(false);
    }
  }

  return <textarea onKeyDown={handleKeyClick} placeholder="입력을 완료하고 싶다면 Enter를 누르세요" autoFocus />;
}
