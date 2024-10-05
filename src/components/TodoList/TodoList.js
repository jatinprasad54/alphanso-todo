import React from "react";
import Task from "../Task/Task";
import "./TodoList.css";
function TodoList({ todoList, dispatch }) {
  return (
    <div className="todoList-div">
      {todoList.length > 0 ? (
        todoList.map((task) => (
          <Task key={task.id} task={task} dispatch={dispatch} />
        ))
      ) : (
        <div className="noTask-div">
          <h2>No tasks to display</h2>
        </div>
      )}
    </div>
  );
}

export default TodoList;
