import React, { useState } from "react";
import TodoForm from "./TodoForm";
import HighlightOffIcon from "@material-ui/icons/HighlightOff";
import EditIcon from "@material-ui/icons/Edit";

const Todo = ({ todos, completeTodo, removeTodo, updateTodo }) => {
  const [edit, setEdit] = useState({
    id: null,
    value: "",
  });

  const submitUpdate = (value) => {
    updateTodo(edit.id, value);
    setEdit({
      id: null,
      value: "",
    });
  };

  //if editing --> pass edit to TodoForm to show edit box
  if (edit.id) {
    return <TodoForm edit={edit} onSubmit={submitUpdate} />;
  }

  return todos.map((todo, index) => (
    <div
      //mark line through todo if complete
      className={todo.isComplete ? "todo-row complete" : "todo-row"}
      key={index}
    >
      <div
        //toggle between every click
        key={todo.id}
        onClick={() => completeTodo(todo.id)}
      >
        {todo.text}
      </div>

      <div
        //materialUI icons
        className="icons"
      >
        <HighlightOffIcon
          onClick={() => removeTodo(todo.id)}
          className="delete-icon"
        />
        <EditIcon
          //if editing -> set edit obj to id & text
          onClick={() => setEdit({ id: todo.id, value: todo.text })}
          className="edit-icon"
        />
      </div>
    </div>
  ));
};

export default Todo;
