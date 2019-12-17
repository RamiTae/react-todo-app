import React from "react";

export default function Todo({ todo, handleTodo }) {
  const parseTodo = JSON.parse(todo);
  console.log(parseTodo);
  function handleRadio(e) {
    // console.log("redio clicked", e.target.checked);
    console.log(handleTodo(parseTodo.index, "completed", !parseTodo.completed));
    // e.target.checked = !parseTodo.completed;
  }

  return (
    <div>
      <input type="radio" onClick={handleRadio} checked={parseTodo.completed} />
      <span>{parseTodo.text}</span>
      <button>delete</button>
    </div>
  );
}
