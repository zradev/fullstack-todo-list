import React from "react";
import { useState } from "react";

const Todo = (props) => {
  const [isCompleted, setIsCompleted] = useState(props.completed);

  const complete = async () => {
    await fetch("http://localhost:3001/todo/complete/" + props.id).then((res) =>
      res.json()
    );
    setIsCompleted(!isCompleted);
  };

  const remove = async () => {
    console.log(props.id);
    await fetch("http://localhost:3001/todo/delete/" + props.id, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    }).catch((err) => console.log(err));
  };

  return (
    <>
      <div
        className={isCompleted ? "status completed" : "status notCompleted"}
        onClick={complete}
      ></div>
      <h1>{props.text}</h1>
      <button className="closeBtn" onClick={remove}>
        X
      </button>
    </>
  );
};

export default Todo;
