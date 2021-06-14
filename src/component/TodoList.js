import React, { useState } from "react";
import Todo from "./Todo";
import TodoForm from "./TodoForm";

const TodoList = () => {
  const [todos, setTodos] = useState([]);

  //todo is item passed in from TodoForm
  const addTodo = (todo) => {
    //if nothing typed in --> return
    if (!todo.text) {
      return;
    }
    //get every todo out of todos[]
    const newTodos = [todo, ...todos];

    //set state with new todos
    setTodos(newTodos);
    console.log(...todos);
  };

  //complete
  const completeTodo = (id) => {
    let updatedTodos = todos.map((todo) => {
      //toggle between completed & not completed
      if (todo.id === id) {
        todo.isComplete = !todo.isComplete;
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  //delete
  const removeTodo = (id) => {
    const removeArr = [...todos].filter((todo) => todo.id !== id);
    setTodos(removeArr);
  };

  //update
  const updateTodo = (todoId, newValue) => {
    if (!newValue.text) {
      return;
    }
    setTodos((prev) =>
      prev.map((item) => (item.id === todoId ? newValue : item))
    );
  };

  return (
    <>
      <h1>Any Tasks Today?</h1>
      <TodoForm onSubmit={addTodo} />
      <Todo
        todos={todos}
        completeTodo={completeTodo}
        removeTodo={removeTodo}
        updateTodo={updateTodo}
      />
    </>
  );
};

export default TodoList;
