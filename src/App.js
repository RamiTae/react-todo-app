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
      todos: [],
      indexOfTodos: 0,
      nowTitle: null,
      searchState: {
        isSearching: false,
        text: null
      },
      displayState: "All"
    };

    //test case-------------------------
    this.state.titles = ["title1", "title2"];
    this.state.todos = [
      {
        title: "title1",
        text: "text1",
        index: 0,
        completed: false
      },
      {
        title: "title1",
        text: "text2",
        index: 1,
        completed: false
      },
      {
        title: "title2",
        text: "text3",
        index: 2,
        completed: false
      }
    ];
    this.state.indexOfTodos = 3;
    //----------------------------------

    this.handleNowTitle = this.handleNowTitle.bind(this);
    this.handleAddTitle = this.handleAddTitle.bind(this);
    this.handleSearchState = this.handleSearchState.bind(this);
    this.handleDisplayState = this.handleDisplayState.bind(this);
    this.handleTodo = this.handleTodo.bind(this);
    this.handleAddTodo = this.handleAddTodo.bind(this);
  }

  handleNowTitle(nowTitle) {
    const searchState = Object.assign(this.state.searchState);
    searchState.isSearching = false;
    this.setState({ searchState });
    this.setState({ nowTitle });
    return { nowTitle, "state nowTitle": this.state.nowTitle };
  }

  handleAddTitle(newTitle) {
    if (!newTitle) {
      return;
    }
    const titles = this.state.titles.concat();
    titles.push(newTitle);
    this.setState({ titles });
  }

  handleSearchState(isSearching, text = null) {
    const searchState = { isSearching, text };
    this.setState({ searchState });
    return searchState;
  }

  handleDisplayState(displayState) {
    this.setState({ displayState });
  }

  handleTodo(index, key, value) {
    const todos = this.state.todos.concat().map(val => Object.assign(val));
    todos.find(todo => todo.index === index)[key] = value;
    // cpTodos[index]
    this.setState({ todos });
    return todos.find(todo => todo.index === index);
  }

  handleAddTodo(title, text) {
    if (!text) {
      return;
    }
    const todos = this.state.todos.concat().map(val => Object.assign(val));
    let indexOfTodos = this.state.indexOfTodos;
    todos.push({ title, text, index: indexOfTodos, completed: false });
    indexOfTodos++;
    this.setState({ todos, indexOfTodos });
    return { title, text };
  }

  render() {
    const { titles, todos, searchState, nowTitle, displayState } = this.state;

    // console.log(searchState);

    let init = null;

    if (searchState.isSearching) {
      init = <SearchList todos={todos} searchState={searchState} handleTodo={this.handleTodo} />;
    } else if (nowTitle) {
      // console.log(todos);
      init = <TodoList nowTitle={nowTitle} todos={todos} displayState={displayState} handleAddTodo={this.handleAddTodo} handleTodo={this.handleTodo} handleDisplayState={this.handleDisplayState} />;
    }

    return (
      <div className="App">
        <TitleList
          titles={titles}
          isSearching={searchState.isSearching}
          handleAddTitle={this.handleAddTitle}
          handleNowTitle={this.handleNowTitle}
          handleSearchState={this.handleSearchState}
          handleDisplayState={this.handleDisplayState}
        />
        {init}
      </div>
    );
  }
}

export default App;
