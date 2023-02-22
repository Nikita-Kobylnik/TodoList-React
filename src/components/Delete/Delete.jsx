import React from "react";
import "./Delete.scss";
import { AiOutlineDelete } from "react-icons/ai";

function Delete({ todo, deleteTodo }) {
  return (
    <button
      className="Delete"
      onClick={() => {
        deleteTodo(todo.id);
      }}
    >
      <AiOutlineDelete />
    </button>
  );
}

export default Delete;
