import React, { useState } from "react";
import "./AddTodo.css";
import { addToList } from "../../reducer/todoReducer";
function AddTodo({ dispatch }) {
  const [text, setText] = useState("");

  const saveTask = (e) => {
    e.preventDefault();
    dispatch(addToList(text));
    // dispatch({
    //   type: "ADD",
    //   payload: {
    //     id: new Date().toString(),
    //     description: text,
    //     isCompleted: false,
    //   },
    // });
    setText("");
  };
  return (
    <div class="addTodo-div">
      <form onSubmit={saveTask}>
        <input
          type="text"
          value={text}
          placeholder="Type Something"
          onChange={(e) => setText(e.target.value)}
        />
        <button disabled={text.length === 0}>Add Task</button>
      </form>
    </div>
  );
}

export default AddTodo;
