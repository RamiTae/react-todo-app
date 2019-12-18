import React from "react";

export default function Todo({ todo, handleTodo, isSearching }) {
  const parseTodo = JSON.parse(todo);
  // console.log(parseTodo);
  function handleCheckbox(e) {
    // console.log(handleTodo(parseTodo.index, "completed", !parseTodo.completed));
    handleTodo(parseTodo.index, "completed", !parseTodo.completed);
  }

  const label = parseTodo.completed ? true : false;

  return (
    <div>
      {isSearching ? `[${parseTodo.title}] ` : null}
      <input type="checkbox" onClick={handleCheckbox} defaultChecked={label} />
      <span>{parseTodo.text}</span>
      {/* <button>delete</button> */}
    </div>
  );
}
