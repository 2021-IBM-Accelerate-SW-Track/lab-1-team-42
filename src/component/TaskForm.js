import React, { useState, useEffect, useRef } from "react";

// TaskForm
//
// // // Used as part of TaskList, and is the main UI. Props and helper functions are utilized throughout to
// // // help facilitate the correct submission of a task to the TaskList, as well as the editing display for a single task.

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

    let hour = 0;
    let amOrPm = '';

    // change to 12 hour time and indicate AM or PM
    if (current.getHours() > 12) {
      hour = current.getHours() - 12;
      amOrPm = 'PM';
    } else {
      hour = current.getHours();
      amOrPm = 'AM';
    }

    let currentTime = hour + ":" + current.getMinutes() + " " + amOrPm;
    
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
              placeholder="Add task..."
              value={input}
              name="text"
              className="task-input"
              onChange={handleChange}
              ref={inputRef}
              data-testid="new-item-input"
            />
            <button onClick={handleSubmit} className="task-button" data-testid="new-item-button">
              Add
            </button>
          </>
        )}
      </form>
    </div>
  );
};

export default TaskForm;
