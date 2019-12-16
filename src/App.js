import React from "react";
import "./App.css";
import TitleList from "./components/TitleList";
import TodoList from "./components/TodoList";
import SearchList from "./components/SearchList";

function App() {
  return (
    <div className="App">
      <TitleList />
      <TodoList />
      <SearchList />
    </div>
  );
}

export default App;
