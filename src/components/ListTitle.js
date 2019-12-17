import React from "react";

export default function ListTitle({ innerText, className, handleIsAddingTodo }) {
  function handleClick() {
    handleIsAddingTodo(true);
  }

  console.log({ innerText, className });
  return (
    <div className={className}>
      {innerText}
      {handleIsAddingTodo ? <button onClick={handleClick}>할 일 추가</button> : null}
    </div>
  );
}
