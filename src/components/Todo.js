import React from "react";
import "./Todo.css";

export default function Todo({ todo, handleTodo, isSearching }) {
  const parseTodo = JSON.parse(todo);
  // console.log(parseTodo);
  function handleCheckbox(e) {
    // console.log(handleTodo(parseTodo.index, "completed", !parseTodo.completed));
    handleTodo(parseTodo.index, "completed", !parseTodo.completed);
  }
  const spletedByEnter = parseTodo.text.split("\n");

  return (
    <div className="Todo">
      {isSearching ? `[${parseTodo.title}] ` : null}
      <input type="checkbox" onClick={handleCheckbox} checked={parseTodo.completed} />
      <span>
        {spletedByEnter.map((text, key) => (
          <p key={key}>{text}</p>
        ))}
      </span>
      {/* <button>delete</button> */}
    </div>
  );
}
