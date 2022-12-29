import { createStore } from "redux";
import { configureStore, createAction, createReducer, createSlice } from "@reduxjs/toolkit";

//export const addToDo = createAction("ADD");
//export const deleteToDo = createAction("DELETE");

//const reducer = createReducer([], {
//  [addToDo]: (state, action) => {
//    state.push({ text: action.payload, id: Date.now() }); // 기존 변수를 mutate 하면 return 필요없음
//  },
//  [deleteToDo]: (state, action) => {
//    return state.filter((toDo) => toDo.id !== action.payload); // 새로운 변수를 넘겨주는 return 필요
//  },
//});

const toDos = createSlice({
  name: "toDosReducer",
  initialState: [],
  reducers: {
    add: (state, action) => {
      state.push({ text: action.payload, id: Date.now() });
    },
    remove: (state, action) => {
      return state.filter((toDo) => toDo.id !== action.payload);
    },
  },
});

//const store = createStore(reducer);
const store = configureStore({ reducer: toDos.reducer });
export const { add, remove } = toDos.actions;

export default store;
