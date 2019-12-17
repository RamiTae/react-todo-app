import React from "react";
import ListTitle from "./ListTitle";
import Todo from "./Todo";

export default function SearchList({ todo, searchState, handleTodo }) {
  return (
    <div id="SearchList">
      <ListTitle innerText={`"${searchState.text}"에 대한 검색 결과`} className="ListTitle-searchTitle" />
      {/* <Todo /> */}
    </div>
  );
}
