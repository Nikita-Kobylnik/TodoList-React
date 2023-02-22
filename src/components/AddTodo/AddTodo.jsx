import React, { useState } from "react";
import "./AddTodo.scss";
import { IoMdAdd } from "react-icons/io";

function AddTodo({ setTodoItems }) {
  const [title, setTitle] = useState("");

  const addTodo = (title) => {
    setTodoItems((prev) => [
      {
        id: new Date(),
        title,
        isCompleted: false,
      },
      ...prev,
    ]);
    setTitle("");
  };

  return (
    <div className="AddTodo">
      <input
        className="AddTodo__input"
        type="text"
        placeholder="Введите текст задачи..."
        onChange={(e) => setTitle(e.target.value)}
        value={title}
      />
      <button className="AddTodo__btn" onClick={() => addTodo(title)}>
        <IoMdAdd className="AddTodo__icon" />
      </button>
    </div>
  );
}

export default AddTodo;
