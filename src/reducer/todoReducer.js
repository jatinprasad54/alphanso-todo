export function addToList(description) {
  return {
    type: "ADD",
    payload: {
      id: new Date().toString(),
      description: description,
      isCompleted: false,
    },
  };
}

export function updateTaskStatus(id, isCompleted) {
  return {
    type: "UPDATE_TASK_STATUS",
    payload: { id: id, markIsCompleted: !isCompleted },
  };
}

export function deleteTask(id) {
  return {
    type: "DELETE",
    payload: { id: id },
  };
}

export function filterTask(filter) {
  return { type: "FILTER", payload: { filter: filter } };
}

export function searchTask(searchWord, filter) {
  return {
    type: "SEARCH",
    payload: {
      searchWord,
      filter,
    },
  };
}
export default function todoReducer(state, action) {
  switch (action.type) {
    case "ADD":
      return {
        allList: [...state.allList, action.payload],
        filteredList: [...state.filteredList, action.payload],
      };
    case "UPDATE_TASK_STATUS":
      return {
        allList: state.allList.map((task) => {
          if (task.id === action.payload.id) {
            task.isCompleted = action.payload.markIsCompleted;
          }
          return task;
        }),
        filteredList: state.filteredList.map((task) => {
          if (task.id === action.payload.id) {
            task.isCompleted = action.payload.markIsCompleted;
          }
          return task;
        }),
      };
    case "DELETE":
      return {
        allList: state.allList.filter((task) => task.id !== action.payload.id),
        filteredList: state.filteredList.filter(
          (task) => task.id !== action.payload.id
        ),
      };
    case "FILTER":
      return {
        ...state,
        filteredList: state.allList.filter((task) => {
          if (action.payload.filter === "COMPLETED" && task.isCompleted) {
            return true;
          } else if (
            action.payload.filter === "NOT_COMPLETED" &&
            !task.isCompleted
          ) {
            return true;
          } else if (action.payload.filter === "ALL") return true;
          else {
            return false;
          }
        }),
      };
    case "SEARCH":
      return {
        ...state,
        filteredList: state.allList.filter((task) => {
          let taskDescription = task.description.toLowerCase();
          if (taskDescription.includes(action.payload.searchWord)) {
            if (action.payload.filter === "COMPLETED" && task.isCompleted) {
              return true;
            } else if (
              action.payload.filter === "NOT_COMPLETED" &&
              !task.isCompleted
            ) {
              return true;
            } else if (action.payload.filter === "ALL") return true;
          }
          return false;
        }),
      };
    default:
      return state;
  }
}
