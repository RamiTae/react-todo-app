import React from "react";
import "./Search.css";

export default function Search({ todos, handleSearchState }) {
  function handleChange(e) {
    console.log(e.target.value);
  }

  return <input type="text" onChange={handleChange} placeholder="검색할 내용을 입력하세요" />;
}
