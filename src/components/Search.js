import React from "react";
import "./Search.css";

export default function Search({ handleSearchState }) {
  // console.log(handleSearchState);
  function handleChange(e) {
    console.log(handleSearchState(true, e.target.value));
    // console.log(e.target.value);
  }

  return <input type="text" onChange={handleChange} placeholder="검색할 내용을 입력하세요" />;
}
