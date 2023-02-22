import React from "react";
import "./TodoListItem.scss";
import Check from "../Check/Check";
import Delete from "../Delete/Delete";
// import { AiOutlineDelete } from "react-icons/ai";

function TodoListItem({ todo, changeCompleted, deleteTodo }) {
  return (
    <div className="TodoListItem">
      <button
        className="TodoListItem__btn"
        onClick={() => changeCompleted(todo.id)}
      >
        <Check isCompleted={todo.isCompleted} />
        <p
          className={`TodoListItem__title ${
            todo.isCompleted ? "TodoListItem__title--active" : ""
          }`}
        >
          {todo.title}
        </p>
      </button>
      <Delete todo={todo} deleteTodo={deleteTodo} />
    </div>
  );
}

export default TodoListItem;
