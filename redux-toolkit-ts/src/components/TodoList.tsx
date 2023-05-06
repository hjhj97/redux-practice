import React, { CSSProperties } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Todo } from "../store/todo";
import todos from "../store/todo";

const done = {
  textDecoration: "line-through",
};

function TodoList() {
  const todoList = useSelector((state: any) => state.todos);
  const dispatch = useDispatch();
  const onClickDelete = (id: number) => {
    dispatch(todos.actions.deleteTodo(id));
  };
  const onClickToggle = (id: number) => {
    dispatch(todos.actions.toggleTodo(id));
  };
  return (
    <div>
      <ul>
        {todoList.map((todo: Todo) => (
          <li key={todo.id}>
            <span style={todo.isDone ? done : {}}>{todo.title}</span>
            <button
              onClick={() => {
                onClickToggle(todo.id);
              }}
            >
              Toggle
            </button>
            <button
              onClick={() => {
                onClickDelete(todo.id);
              }}
            >
              X
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
