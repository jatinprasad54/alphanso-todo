import React from "react";
import { RxCrossCircled } from "react-icons/rx";
import { updateTaskStatus } from "../../reducer/todoReducer";
import { deleteTask } from "../../reducer/todoReducer";
import "./Task.css";

function Task({ task, dispatch }) {
  const markTask = () => {
    dispatch(updateTaskStatus(task.id, task.isCompleted));
  };

  const deleteTodo = () => {
    dispatch(deleteTask(task.id));
  };

  return (
    <div className={`single-task ${task.isCompleted && "selected"}`}>
      <div className="checkbox-div">
        <input
          type="checkbox"
          value={task.description}
          checked={task.isCompleted}
          onChange={markTask}
        />
        <span>{task.description}</span>
      </div>
      <div className="delete-div">
        <RxCrossCircled onClick={deleteTodo} />
      </div>
    </div>
  );
}

export default Task;
