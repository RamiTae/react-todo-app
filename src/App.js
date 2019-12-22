import React, { Component } from "react";
import "./App.css";
import TitleList from "./components/TitleList";
import TodoList from "./components/TodoList";
import SearchList from "./components/SearchList";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      titles: props.titles,
      todos: props.todos,
      indexOfTodos: props.indexOfTodos,
      nowTitle: null,
      searchState: {
        isSearching: false,
        text: null
      },
      displayState: "All",
      isAddingTitle: false,
      isAddingTodo: false,
      titleInput: null, //* title Input Ref 저장
      todoInput: null //* todo Input Ref 저장
    };

    //더러운.... this바인딩...... 이게 최선입니까??? 아닌것같아요.. 추후에 정리할게요
    this.watchAppClick = this.watchAppClick.bind(this);

    this.handleNowTitle = this.handleNowTitle.bind(this); //* 현재 목록 변경
    this.handleAddTitle = this.handleAddTitle.bind(this); //* 목록 추가
    this.handleTodo = this.handleTodo.bind(this); //* todo하나 변경(index, key, value를 받아 index가 일치하는 todo의 key값을 value로 바꿈)
    this.handleAddTodo = this.handleAddTodo.bind(this); //* todo 추가
    this.handleSearchState = this.handleSearchState.bind(this); //* search중인지 아닌지 확인하는 state 변경
    this.handleDisplayState = this.handleDisplayState.bind(this); //* 어떤 type의 todo를 display할지 결정
    this.handleIsAddingTitle = this.handleIsAddingTitle.bind(this); //* 목록추가 버튼을 눌렀는지 안눌렀는지 확인하는 state를 변경함
    this.handleIsAddingTodo = this.handleIsAddingTodo.bind(this); //* 할 일 추가 버튼을 눌렀는지 안눌렀는지 확인하는 state 변경
    this.handleRef = this.handleRef.bind(this); //*ref 관리
  }

  //? App컴포넌트의 마우스 클릭을 지켜봄: 목록이나 todo추가 시 text input 외의 다른 곳 클릭 시 저장 및 상태변경
  //* isAddingTitle === true : text박스 이외의 공간 클릭 > isSearching이 false로 & titles에 데이터 추가
  watchAppClick(e) {
    const { isAddingTitle, titleInput, isAddingTodo, todoInput } = this.state;
    if (isAddingTitle) {
      if (e.target !== titleInput) {
        this.handleIsAddingTitle(false);
        if (titleInput) {
          this.handleAddTitle(titleInput.value);
          this.handleRef("titleInput", null);
        }
      }
    }

    if (isAddingTodo) {
      console.log(isAddingTodo, todoInput);
      if (e.target !== todoInput) {
        this.handleIsAddingTodo(false);
        if (todoInput) {
          this.handleAddTodo(this.state.nowTitle, todoInput.value);
          this.handleRef("todoInput", null);
        }
      }
    }
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
    } else if (this.state.titles.includes(newTitle)) {
      return;
    }
    const titles = this.state.titles.concat();
    titles.push(newTitle);
    this.setState({ titles });
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

  handleSearchState(isSearching, text = null) {
    const searchState = { isSearching, text };
    this.setState({ searchState });
    return searchState;
  }

  handleDisplayState(displayState) {
    this.setState({ displayState });
  }

  handleIsAddingTitle(isAddingTitle) {
    this.setState({ isAddingTitle });
  }

  handleIsAddingTodo(isAddingTodo) {
    // console.log(isAddingTodo);
    this.setState({ isAddingTodo });
  }

  handleRef(type, ref) {
    this.setState({ [type]: ref });
  }

  render() {
    const { titles, todos, searchState, nowTitle, isAddingTitle, isAddingTodo, displayState } = this.state;

    // console.log(searchState);

    let init = null;

    if (searchState.isSearching) {
      init = <SearchList todos={todos} searchState={searchState} handleTodo={this.handleTodo} />;
    } else if (nowTitle) {
      // console.log(todos);
      init = (
        <TodoList
          nowTitle={nowTitle}
          todos={todos}
          displayState={displayState}
          isAddingTodo={isAddingTodo}
          handleTodo={this.handleTodo}
          handleAddTodo={this.handleAddTodo}
          handleDisplayState={this.handleDisplayState}
          handleIsAddingTodo={this.handleIsAddingTodo}
          handleRef={this.handleRef}
        />
      );
    }

    return (
      <div className="App" onClick={this.watchAppClick}>
        <TitleList
          titles={titles}
          isSearching={searchState.isSearching}
          isAddingTitle={isAddingTitle}
          handleIsAddingTitle={this.handleIsAddingTitle}
          handleAddTitle={this.handleAddTitle}
          handleNowTitle={this.handleNowTitle}
          handleSearchState={this.handleSearchState}
          handleDisplayState={this.handleDisplayState}
          handleRef={this.handleRef}
        />
        {init}
      </div>
    );
  }
}

export default App;
