import React from "react";
import "./TodoList.scss";

import TodoListItem from "../TodoListItem/TodoListItem";

function TodoList({ todoItems, changeCompleted, deleteTodo }) {
  return (
    <div className="TodoList">
      {todoItems.map((item) => (
        <TodoListItem
          key={item.id}
          todo={item}
          changeCompleted={changeCompleted}
          deleteTodo={deleteTodo}
        />
      ))}
    </div>
  );
}

export default TodoList;
