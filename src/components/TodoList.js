import React, { Component } from "react";
import ListTitle from "./ListTitle";
import Footer from "./Footer";
import Todo from "./Todo";

export default class TodoList extends Component {
  render() {
    return (
      <div id="TodoList">
        <ListTitle />
        <Footer />
        <Todo />
      </div>
    );
  }
}
