import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addToDo, deleteToDo } from "../store";

function Home({ toDos }) {
  const [text, setText] = useState("");
  const todo = useSelector((state) => state);
  const dispatch = useDispatch();
  function onChange(e) {
    setText(e.target.value);
  }
  function onSubmit(e) {
    e.preventDefault();
    setText("");
    dispatch(addToDo(text));
  }

  const onClickDelete = (id) => {
    dispatch(deleteToDo(id));
  };
  return (
    <>
      <h1>To Do</h1>
      <form onSubmit={onSubmit}>
        <input type="text" value={text} onChange={onChange} />
        <button>Add</button>
      </form>
      <ul>
        {todo.map((item) => (
          <li key={item.id}>
            {item.text}{" "}
            <button
              onClick={() => {
                onClickDelete(item.id);
              }}
            >
              X
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}

export default Home;
