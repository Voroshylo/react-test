import { createReducer } from "@reduxjs/toolkit";
import {
  addTask,
  deleteTask,
  toggleCompleted,
  setStatusFilter,
} from "./actions";
import statusFilters from "./constants";

const tasksInitialState = [
  // { id: 0, text: "Learn HTML and CSS", completed: true },
  // { id: 1, text: "Get good at JavaScript", completed: true },
  // { id: 2, text: "Master React", completed: false },
  // { id: 3, text: "Discover Redux", completed: false },
  // { id: 4, text: "Build amazing apps", completed: false },
];
export const tasksReducer = createReducer(tasksInitialState, (builder) => {
  builder
    .addCase(addTask, (state, action) => {
      return [...state, action.payload];
    })
    .addCase(deleteTask, (state, action) => {
      return state.filter((task) => task.id !== action.payload);
    })
    .addCase(toggleCompleted, (state, action) => {
      return state.map((task) => {
        if (task.id !== action.payload) {
          return task;
        }
        return {
          ...task,
          completed: !task.completed,
        };
      });
    });
});

const filtersInitialState = {
  status: statusFilters.all,
};

export const filtersReducer = (state = filtersInitialState, action) => {
  switch (action.type) {
    case setStatusFilter.type:
      return {
        ...state,
        status: action.payload,
      };

    default:
      return state;
  }
};
