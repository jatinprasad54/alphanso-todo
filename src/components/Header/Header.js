import React, { useState, useRef } from "react";
import { filterTask } from "../../reducer/todoReducer";
import { searchTask } from "../../reducer/todoReducer";
import "./Header.css";

function Header({ todoList, dispatch }) {
  const intervalId = useRef(null);
  const [search, setSearch] = useState("");
  const [currentFilter, setCurrentFilter] = useState("ALL");

  const applyFiler = (filter) => {
    dispatch(filterTask(filter));
    setCurrentFilter(filter);
  };

  const applySearchFilter = (e) => {
    if (intervalId.current) {
      clearInterval(intervalId.current);
    }
    intervalId.current = setTimeout(() => {
      dispatch(searchTask(e.target.value.trim().toLowerCase(), currentFilter));

      if (e.keyCode === 13) {
        setSearch("");
      }
    }, 2000);

    setSearch(e.target.value);
  };
  return (
    <div className="header-div">
      <h2>Today</h2>
      <input
        type="text"
        placeholder={
          todoList.allList.length === 0 ? "Add task to search" : "Search"
        }
        disabled={todoList.allList.length === 0}
        onChange={(e) => setSearch(e.target.value)}
        value={search}
        onKeyDown={applySearchFilter}
      />
      <div>
        <button
          className={currentFilter === "ALL" ? "selected" : ""}
          onClick={() => applyFiler("ALL")}
        >
          All
        </button>
        <button
          className={currentFilter === "COMPLETED" ? "selected" : ""}
          onClick={() => applyFiler("COMPLETED")}
        >
          Completed
        </button>
        <button
          className={currentFilter === "NOT_COMPLETED" ? "selected" : ""}
          onClick={() => applyFiler("NOT_COMPLETED")}
        >
          Incomplete
        </button>
      </div>
    </div>
  );
}

export default Header;
