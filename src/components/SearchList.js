import React from "react";
import ListTitle from "./ListTitle";
import Todo from "./Todo";

export default function SearchList({ todos, searchState, handleTodo }) {
  let todoList = todos.filter(todo => todo.text.indexOf(searchState.text) !== -1);
  return (
    <div id="SearchList">
      <ListTitle innerText={`"${searchState.text}"에 대한 검색 결과`} className="ListTitle-searchTitle" />
      {todoList.map(todo => (
        <Todo todo={JSON.stringify(todo)} handleTodo={handleTodo} isSearching={true} />
      ))}
    </div>
  );
}
