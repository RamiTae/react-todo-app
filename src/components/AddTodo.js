import React, { Component } from "react";

export default class AddTodo extends Component {
  //{ nowTitle, handleAddTodo, handleIsAddingTodo, handleRef }
  constructor(props) {
    super(props);
    this.todoInput = React.createRef();

    this.handleChange = this.handleChange.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
  }

  handleChange() {
    this.props.handleRef("todoInput", this.todoInput.current);
  }

  handleKeyDown(e) {
    // console.log(e);
    if (e.shiftKey) {
      return;
    } else if (e.keyCode === 13) {
      this.props.handleAddTodo(this.props.nowTitle, e.target.value);
      this.props.handleIsAddingTodo(false);
    }
  }

  render() {
    return <textarea ref={this.todoInput} onChange={this.handleChange} onKeyDown={this.handleKeyDown} placeholder="입력을 완료하고 싶다면 Enter를 누르세요" autoFocus />;
  }
}
