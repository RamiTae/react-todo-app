import React, { Component } from "react";
import "./App.css";
import TitleList from "./components/TitleList";
import TodoList from "./components/TodoList";
import SearchList from "./components/SearchList";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      titles: [],
      todos: [
        {
          title: null,
          text: null,
          index: null,
          completed: false
        }
      ],
      indexOfTodos: 0,
      nowTitle: null,
      searchState: {
        isSearching: false,
        text: null
      }
    };

    this.handleNowTitle = this.handleNowTitle.bind(this);
    this.handleSearchState = this.handleSearchState.bind(this);
    this.handleTodo = this.handleTodo.bind(this);
    this.handleAddTodo = this.handleAddTodo.bind(this);
  }

  handleNowTitle(nowTitle) {
    this.setState({ nowTitle });
  }

  handleSearchState(isSearching) {
    const searchState = Object.assign(this.searchState);
    searchState.isSearching = isSearching;
    this.setState({ searchState });
  }

  handleTodo(index, key, value) {
    const cpTodos = this.todos.concat().map(val => Object.assign(val));
    cpTodos[index][key] = value;
    this.setState(cpTodos);
  }

  handleAddTodo(title, text) {
    const cpTodos = this.todos.concat().map(val => Object.assign(val));
    cpTodos.push({ title, text, index: this.indexOfTodos, completed: false });
    this.setState(cpTodos);
  }

  render() {
    const { titles, todos, searchState, nowTitle, indexOfTodos } = this.state;
    return (
      <div className="App">
        <TitleList titles={titles} handleNowTitle={this.handleNowTitle} handleSearchState={this.handleSearchState} />
        {this.state.searchState.isSearching ? (
          <SearchList todos={todos} searchState={searchState} handleTodo={this.handleTodo} />
        ) : (
          <TodoList nowTitle={nowTitle} todos={todos} indexOfTodos={indexOfTodos} handleAddTodo={this.handleAddTodo} handleTodo={this.handleTodo} />
        )}
      </div>
    );
  }
}

export default App;
