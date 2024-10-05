import React, { useReducer } from "react";
import Header from "./Header/Header";
import TodoList from "./TodoList/TodoList";
import AddTodo from "./AddTodo/AddTodo";
import todoReducer from "../reducer/todoReducer";

function Todo() {
  const [value, dispatch] = useReducer(todoReducer, {
    allList: [],
    filteredList: [],
  });

  return (
    <div className="hero-section">
      <Header todoList={value} dispatch={dispatch} />
      <TodoList todoList={value.filteredList} dispatch={dispatch} />
      <AddTodo dispatch={dispatch} />
    </div>
  );
}

export default Todo;
