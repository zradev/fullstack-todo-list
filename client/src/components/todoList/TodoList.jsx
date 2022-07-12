import React from "react";
import "./TodoList.css";
import Todo from "./Todo";
import { useState } from "react";

const TodoList = (props) => {
  const [modalState, setModalState] = useState(false);
  const [newTodo, setNewTodo] = useState("");

  const updateModal = () => {
    setModalState(!modalState);
  };

  const addTodo = async () => {
    await fetch("http://localhost:3001/todo/new/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        text: newTodo,
      }),
    }).catch((err) => console.log(err));
    setNewTodo("");
    updateModal();
  };

  return (
    <>
      <section className="todoList">
        {props.todoListData.map((todo) => (
          <div className="todo" key={todo._id}>
            <Todo text={todo.text} completed={todo.complete} id={todo._id} />
          </div>
        ))}

        <button className="addTodoBtn" onClick={updateModal}>
          +
        </button>

        {modalState ? (
          <div className="popup">
            <div className="closePopup" onClick={updateModal}>
              X
            </div>
            <div className="content">
              <h3>Add Task</h3>
              <input
                type="text"
                className="add-todo-input"
                onChange={(e) => setNewTodo(e.target.value)}
                value={newTodo}
              />
              <div className="button" onClick={addTodo}>
                Create Task
              </div>
            </div>
          </div>
        ) : (
          ""
        )}
      </section>
    </>
  );
};

export default TodoList;
