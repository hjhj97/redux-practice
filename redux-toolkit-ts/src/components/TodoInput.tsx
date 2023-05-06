import React, { useState } from "react";
import { useDispatch } from "react-redux";
import todos from "../store/todo";

function TodoInput() {
  const dispatch = useDispatch();
  const [todoInput, setTodoInput] = useState<string>("");
  const onSubmit = (e: any) => {
    e.preventDefault();
    dispatch(todos.actions.addTodo(todoInput));
    setTodoInput("");
  };
  const onChange = (e: any) => {
    setTodoInput(e.target.value);
  };
  return (
    <div>
      <form onSubmit={onSubmit}>
        <input type="text" onChange={onChange} value={todoInput} />
        <button type="submit">Add Todo</button>
      </form>
    </div>
  );
}

export default TodoInput;
