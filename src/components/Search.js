import React from "react";
import "./Search.css";

export default function Search({ isSearching, handleSearchState }) {
  function handleChange(e) {
    console.log(handleSearchState(true, e.target.value));
    // console.log(e.target.value);
  }

  return (
    <div>
      {isSearching ? (
        <input type="text" onChange={handleChange} placeholder="검색할 내용을 입력하세요" />
      ) : (
        <input type="text" onChange={handleChange} value="" placeholder="검색할 내용을 입력하세요" />
      )}
    </div>
  );
}
