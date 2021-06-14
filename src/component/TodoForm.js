import React, { useState, useEffect, useRef } from "react";

//get props onSubmit from TodoList
const TodoForm = (props) => {
  //if editing --> show previous text to edit on
  const [input, setInput] = useState(props.edit ? props.edit.value : "");

  //highlight around input text
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  });

  //set textbox to typed in text
  const handleChange = (e) => {
    setInput(e.target.value);
  };

  //when add/edit button is clicked
  const handleSubmit = (e) => {
    e.preventDefault();

    //pass this into onSubmit prop in Todo
    props.onSubmit({
      id: Math.floor(Math.random() * 10000),
      text: input,
    });
    setInput("");
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="todo-form">
        {props.edit ? (
          <>
            <input
              type="text"
              placeholder="Update your item"
              value={input}
              name="text"
              className="todo-input edit"
              onChange={handleChange}
              ref={inputRef}
            />
            <button onClick={handleSubmit} className="todo-button edit">
              Update
            </button>
          </>
        ) : (
          <>
            <input
              type="text"
              placeholder="Add a task"
              value={input}
              name="text"
              className="todo-input"
              onChange={handleChange}
              ref={inputRef}
            />
            <button onClick={handleSubmit} className="todo-button">
              Add
            </button>
          </>
        )}
      </form>
    </div>
  );
};

export default TodoForm;
