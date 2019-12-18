import React from "react";

export default function Todo({ todo, handleTodo, isSearching }) {
  const parseTodo = JSON.parse(todo);
  // console.log(parseTodo);
  function handleCheckbox(e) {
    // console.log(handleTodo(parseTodo.index, "completed", !parseTodo.completed));
    handleTodo(parseTodo.index, "completed", !parseTodo.completed);
  }

  return (
    <div>
      {isSearching ? `[${parseTodo.title}] ` : null}
      <input type="checkbox" onClick={handleCheckbox} checked={parseTodo.completed} />
      <span>{parseTodo.text}</span>
      {/* <button>delete</button> */}
    </div>
  );
}
