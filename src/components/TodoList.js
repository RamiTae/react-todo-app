import React, { Component } from "react";
import ListTitle from "./ListTitle";
import Footer from "./Footer";
import Todo from "./Todo";
import AddTodo from "./AddTodo";

export default class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isAddingTodo: false
    };

    this.handleIsAddingTodo = this.handleIsAddingTodo.bind(this);
  }

  componentDidMount() {
    //마우스 클릭을 지켜봄.
    //* isAddingTodo === true : text박스 이외의 공간 클릭 > isAddingTodo 이 false로 & todo에 데이터 추가
  }

  handleIsAddingTodo(isAddingTodo) {
    this.setState({ isAddingTodo });
  }

  render() {
    const { nowTitle, todos, handleTodo, handleAddTodo, handleDisplayState, displayState } = this.props;
    let todoList = todos.filter(todo => todo.title === nowTitle);
    // console.log(todoList);

    //display상태에 따라 todoList 변경
    if (displayState === "All") {
      todoList.sort((todoA, todoB) => {
        if (todoA.completed && !todoB.completed) {
          return 1;
        } else if (!todoA.completed && todoB.completed) {
          return -1;
        }
        return 0;
      });
    } else {
      const check = displayState === "Active" ? false : true;
      todoList = todoList.filter(todo => todo.completed === check);
    }

    return (
      <div id="TodoList">
        <ListTitle innerText={nowTitle} className="ListTitle-todoTitle" handleIsAddingTodo={this.handleIsAddingTodo} />
        <Footer displayState={displayState} todoLength={todoList.length} handleDisplayState={handleDisplayState} />
        {todoList.map((todo, idx) => (
          <Todo key={idx} todo={JSON.stringify(todo)} handleTodo={handleTodo} />
        ))}
        {this.state.isAddingTodo ? <AddTodo nowTitle={nowTitle} handleAddTodo={handleAddTodo} handleIsAddingTodo={this.handleIsAddingTodo} /> : null}
      </div>
    );
  }
}
