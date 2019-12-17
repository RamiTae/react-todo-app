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
    this.handleKeyClick = this.handleKeyClick.bind(this);
  }

  handleDisplayState(displayState) {
    this.setState({ displayState });
  }

  handleIsAddingTodo(isAddingTodo) {
    this.setState({ isAddingTodo });
  }

  handleKeyClick(e) {
    if (e.keyCode === 13) {
      this.props.handleAddTodo(this.props.nowTitle, e.target.value);
      this.setState({ isAddingTodo: false });
    }
  }

  render() {
    const { nowTitle, todos, handleTodo } = this.props;
    let todoList = todos.filter(todo => todo.title === nowTitle);
    // console.log(todoList);

    //display상태에 따라 todoList 변경
    if (this.state.displayState !== "All") {
      const check = this.state.displayState === "Active" ? false : true;
      todoList = todoList.filter(todo => todo.completed === check);
    }

    return (
      <div id="TodoList">
        <ListTitle innerText={nowTitle} className="ListTitle-todoTitle" handleIsAddingTodo={this.handleIsAddingTodo} />
        <Footer displayState={this.state.displayState} todoLength={todoList.length} handleDisplayState={this.handleDisplayState} />
        {todoList.map((todo, idx) => (
          <Todo key={idx} todo={JSON.stringify(todo)} handleTodo={handleTodo} />
        ))}
        {this.state.isAddingTodo ? <input type="text" onKeyDown={this.handleKeyClick} placeholder="입력을 완료하고 싶다면 Enter를 누르세요" /> : null}
      </div>
    );
  }
}
