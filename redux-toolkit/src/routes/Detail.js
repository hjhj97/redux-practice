import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const Detail = () => {
  const id = useParams();
  const toDos = useSelector((state) => state);
  const found = toDos.find((toDo) => toDo.id === Number(id));
  return (
    <>
      <h1>{found?.text}</h1>
      <h5>Created at : {found?.id}</h5>
    </>
  );
};

export default Detail;
