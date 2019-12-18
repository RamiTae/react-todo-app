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
      <div id="TodoList">
        <ListTitle innerText={nowTitle} className="ListTitle-todoTitle" handleIsAddingTodo={this.handleIsAddingTodo} />
        <Footer displayState={displayState} todoLength={todoList.length} handleDisplayState={handleDisplayState} />
        {displayList}
        {this.state.isAddingTodo ? <AddTodo nowTitle={nowTitle} handleAddTodo={handleAddTodo} handleIsAddingTodo={this.handleIsAddingTodo} /> : null}
        {displayCompletedList}
      </div>
    );
  }
}
