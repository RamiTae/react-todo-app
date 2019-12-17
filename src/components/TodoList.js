import React, { Component } from "react";
import ListTitle from "./ListTitle";
import Footer from "./Footer";
import Todo from "./Todo";

export default class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      displayState: "All",
      isAddingTodo: false
    };

    this.handleDisplayState = this.handleDisplayState.bind(this);
    this.handleIsAddingTodo = this.handleIsAddingTodo.bind(this);
  }

  handleDisplayState(displayState) {
    this.setState({ displayState });
  }

  handleIsAddingTodo(isAddingTodo) {
    this.setState({ isAddingTodo });
  }

  render() {
    const { nowTitle, todos, indexOfTodos, handleAddTodo, handleTodo } = this.props;
    let todoList = todos.filter(todo => todo.title === nowTitle);
    console.log(todoList);

    //display상태에 따라 todoList 변경
    if (this.state.displayState !== "All") {
      const check = this.state.displayState === "Active" ? true : false;
      todoList = todoList.filter(todo => todo.completed === check);
    }

    return (
      <div id="TodoList">
        <ListTitle indexOfTodos={indexOfTodos} handleAddTodo={handleAddTodo} innerText={nowTitle} className="ListTitle-todoTitle" handleIsAddingTodo={this.handleIsAddingTodo} />
        <Footer todoLength={todos.length} handleDisplayState={this.handleDisplayState} />
        {todoList.map((todo, idx) => (
          <Todo key={idx} todo={JSON.stringify(todo)} handleTodo={handleTodo} />
        ))}
      </div>
    );
  }
}
