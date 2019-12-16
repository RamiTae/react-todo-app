import React from "react";
import ListTitle from "./ListTitle";
import Todo from "./Todo";

export default function SearchList({ todo, searchState, handleTodo }) {
  return (
    <div id="TodoList">
      <ListTitle />
      <Todo />
    </div>
  );
}
