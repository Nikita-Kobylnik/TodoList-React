import React, { useState } from "react";
import AddTodo from "../AddTodo/AddTodo";
import Header from "../Header/Header";
import TodoList from "../TodoList/TodoList";
import "./App.scss";
import { todos } from "../TodoList/TodoItems";

function App() {
  const [todoItems, setTodoItems] = useState(todos);

  function changeCompleted(id) {
    let copyArr = [...todoItems];
    let tmp = copyArr.find((item) => item.id === id);
    tmp.isCompleted = !tmp.isCompleted;
    setTodoItems(copyArr);
  }

  const deleteTodo = (id) => {
    const newArr = [...todoItems].filter((item) => item.id !== id);
    setTodoItems(newArr);
  };

  return (
    <div className="App">
      <div className="todo-app">
        <Header />
        <div className="todo-app__wrapper">
          <AddTodo setTodoItems={setTodoItems} />
          <TodoList
            todoItems={todoItems}
            changeCompleted={changeCompleted}
            deleteTodo={deleteTodo}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
