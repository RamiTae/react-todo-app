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
        // {
        //   title: null,
        //   text: null,
        //   index: null,
        //   completed: false
        // }
      ],
      indexOfTodos: 0,
      nowTitle: null,
      searchState: {
        isSearching: false,
        text: null
      }
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
    this.handleTodo = this.handleTodo.bind(this);
    this.handleAddTodo = this.handleAddTodo.bind(this);
  }

  handleNowTitle(nowTitle) {
    this.setState({ nowTitle });
    return { nowTitle, "state nowTitle": this.state.nowTitle };
  }

  handleAddTitle(newTitle) {
    const titles = this.state.titles.concat();
    titles.push(newTitle);
    this.setState({ titles });
  }

  handleSearchState(isSearching, text = null) {
    const searchState = { isSearching, text };
    this.setState({ searchState });
    return searchState;
  }

  handleTodo(index, key, value) {
    const cpTodos = this.state.todos.concat().map(val => Object.assign(val));
    cpTodos.find(todo => todo.index === index)[key] = value;
    // cpTodos[index]
    this.setState(cpTodos);
    return cpTodos.find(todo => todo.index === index);
  }

  handleAddTodo(title, text) {
    const cpTodos = this.state.todos.concat().map(val => Object.assign(val));
    cpTodos.push({ title, text, index: this.indexOfTodos, completed: false });
    this.setState(cpTodos);
    return { title, text };
  }

  render() {
    const { titles, todos, searchState, nowTitle, indexOfTodos } = this.state;
    return (
      <div className="App">
        <TitleList
          titles={titles}
          isSearching={this.state.searchState.isSearching}
          handleAddTitle={this.handleAddTitle}
          handleNowTitle={this.handleNowTitle}
          handleSearchState={this.handleSearchState}
        />
        {nowTitle ? (
          this.state.searchState.isSearching ? (
            <SearchList todos={todos} searchState={searchState} handleTodo={this.handleTodo} />
          ) : (
            <TodoList nowTitle={nowTitle} todos={todos} indexOfTodos={indexOfTodos} handleAddTodo={this.handleAddTodo} handleTodo={this.handleTodo} />
          )
        ) : null}
      </div>
    );
  }
}

export default App;
