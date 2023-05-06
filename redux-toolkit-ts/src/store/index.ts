import { combineReducers, configureStore } from "@reduxjs/toolkit";
import todos from "./todo";

const rootReducer = combineReducers({
  todos: todos.reducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
