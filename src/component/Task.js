import React, { useState } from "react";
import TaskForm from "./TaskForm";
import HighlightOffIcon from "@material-ui/icons/HighlightOff";
import EditIcon from "@material-ui/icons/Edit";

// Task
//
// // // Task provides the skeleton for all tasks inputted into TaskList from TaskForm.
// // // By using passed in props, the coupling between Task and TaskForm becomes efficient and reasonable. 
const Task = ({ tasks, completeTask, removeTask, updateTask }) => {
  // This state element functions almost like a constructor for every Task.
  const [edit, setEdit] = useState({
    id: null,
    value: "",
  });

  // submitUpdate relies upon the state and the task ID to complete its purpose.
  const submitUpdate = (value) => {
    updateTask(edit.id, value);
    setEdit({
      id: null,
      value: "",
    });
  };

  //if editing --> pass edit to TaskForm to show edit box
  if (edit.id) {
    return <TaskForm edit={edit} onSubmit={submitUpdate} />;
  }

  return tasks.map((task, index) => (
    <div
      //mark line through task if complete
      className={task.isComplete ? "task-row complete" : "task-row"}
      key={index}
    >
      <div
        //toggle between every click
        key={task.id}
        onClick={() => completeTask(task.id)}
      >
        {task.text}
      </div>

      <div>{task.dateTime}</div>

      <div
        //materialUI icons in this div container
        className="icons"
      >
        <HighlightOffIcon
          onClick={() => removeTask(task.id)}
          className="delete-icon"
        />
        <EditIcon
          //if editing -> set edit obj to editing task's id & text
          onClick={() => setEdit({ id: task.id, value: task.text })}
          className="edit-icon"
        />
      </div>
    </div>
  ));
};

export default Task;
