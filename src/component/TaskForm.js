import React, { useState, useEffect, useRef } from "react";

//get props onSubmit from TaskList
const TaskForm = (props) => {
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
    
    let current = new Date();
    let currentDate = (current.getMonth() + 1) + '-' + current.getDate() + '-' + current.getFullYear();
    let currentTime = current.getHours() + ":" + current.getMinutes() + ":" + current.getSeconds();
    let dateAndTime = currentTime + ' ' + currentDate;

    e.preventDefault();

    //pass this into onSubmit prop in task
    props.onSubmit({
      id: Math.floor(Math.random() * 10000),
      text: input,
      dateTime: dateAndTime,
    });
    setInput("");
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="task-form">
        {props.edit ? (
          <>
            <input
              type="text"
              placeholder="Update your item"
              value={input}
              name="text"
              className="task-input edit"
              onChange={handleChange}
              ref={inputRef}
            />
            <button onClick={handleSubmit} className="task-button edit">
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
              className="task-input"
              onChange={handleChange}
              ref={inputRef}
            />
            <button onClick={handleSubmit} className="task-button">
              Add
            </button>
          </>
        )}
      </form>
    </div>
  );
};

export default TaskForm;
