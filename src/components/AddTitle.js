import React from "react";

export default function AddTitle({ isAddingTitle, handleIsAddingTitle, handleNowTitle, handleAddTitle }) {
  function handleOnClick() {
    handleIsAddingTitle(true);
  }

  function handleOnChange(e) {
    // console.log(thandleNowTitle(e.target.value));
    handleNowTitle(e.target.value);
  }

  function handleKeyClick(e) {
    if (e.keyCode === 13) {
      handleIsAddingTitle(false);
      handleAddTitle(e.target.value);
    }
  }

  return (
    <div>
      {isAddingTitle ? <input type="text" id="AddTitle_text_input" onChange={handleOnChange} onKeyDown={handleKeyClick} onClick={handleOnChange} placeholder="입력" autoFocus></input> : null}
      <button onClick={handleOnClick}>+ 목록 추가</button>
    </div>
  );
}
