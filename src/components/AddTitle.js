import React from "react";

export default function AddTitle({ handleSearchState, handleIsAddingTitle }) {
  function handleOnClick(e) {
    console.log("clicked AddTitle", e);
  }

  return (
    <div>
      <button onClick={handleOnClick}>+ 목록 추가</button>
    </div>
  );
}
