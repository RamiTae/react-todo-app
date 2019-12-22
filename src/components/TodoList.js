import React from "react";
import ListTitle from "./ListTitle";
import Filter from "./Filter";
import Todo from "./Todo";
import AddTodo from "./AddTodo";

export default function TodoList({ nowTitle, todos, handleTodo, handleAddTodo, handleDisplayState, displayState, isAddingTodo, handleIsAddingTodo, handleRef }) {
  let todoList = todos.filter(todo => todo.title === nowTitle);
  let activeTodos = [],
    completedTodos = [];
  let displayList, displayCompletedList;

  todoList.forEach(todo => {
    if (todo.completed) {
      completedTodos.push(todo);
    } else {
      activeTodos.push(todo);
    }
  });

  //display상태에 따라 todoList 변경
  if (displayState === "All") {
    if (completedTodos.length) {
      displayList = (
        <div>
          {activeTodos.map((todo, idx) => (
            <Todo key={idx} todo={JSON.stringify(todo)} handleTodo={handleTodo} />
          ))}
        </div>
      );
      displayCompletedList = (
        <div>
          <div>완료됨({completedTodos.length})</div>
          {completedTodos.map((todo, idx) => (
            <Todo key={idx} todo={JSON.stringify(todo)} handleTodo={handleTodo} />
          ))}
        </div>
      );
    } else {
      displayList = (
        <div>
          {activeTodos.map((todo, idx) => (
            <Todo key={idx} todo={JSON.stringify(todo)} handleTodo={handleTodo} />
          ))}
        </div>
      );
    }
  } else {
    todoList = displayState === "Active" ? activeTodos : completedTodos;
    displayList = todoList.map((todo, idx) => <Todo key={idx} todo={JSON.stringify(todo)} handleTodo={handleTodo} />);
  }

  return (
    <div className="TodoList">
      <ListTitle innerText={nowTitle} className="ListTitle-todoTitle" handleIsAddingTodo={handleIsAddingTodo} />
      <Filter displayState={displayState} todoLength={todoList.length} handleDisplayState={handleDisplayState} />
      {displayList}
      {isAddingTodo ? <AddTodo nowTitle={nowTitle} handleAddTodo={handleAddTodo} handleIsAddingTodo={handleIsAddingTodo} handleRef={handleRef} /> : null}
      {displayCompletedList}
    </div>
  );
}
