import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface Todo {
  id: number;
  title: string;
  isDone: boolean;
}

const todos = createSlice({
  name: "todos",
  initialState: [] as Todo[],
  reducers: {
    addTodo: (state, action) => {
      state.push({ id: Math.ceil(Math.random() * 99999), title: action.payload, isDone: false });
      return state;
    },
    deleteTodo: (state, action) => {
      state = state.filter((item) => item.id !== action.payload);
      return state;
    },
    toggleTodo: (state, action) => {
      const found = state.find((item) => item.id === action.payload);
      if (found) {
        found.isDone = !found?.isDone;
      }
      return state;
    },
  },
});

export default todos;
