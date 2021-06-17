import React, { useState } from "react";
import TaskForm from "./TaskForm";
import HighlightOffIcon from "@material-ui/icons/HighlightOff";
import EditIcon from "@material-ui/icons/Edit";

const Task = ({ tasks, completeTask, removeTask, updateTask }) => {
  const [edit, setEdit] = useState({
    id: null,
    value: "",
  });

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
      //mark line through Task if complete
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

      <div key={task.id} onClick={() => completeTask(task.id)}>
        {task.dateTime}
      </div>

      <div
        //materialUI icons
        className="icons"
      >
        <HighlightOffIcon
          onClick={() => removeTask(task.id)}
          className="delete-icon"
        />
        <EditIcon
          //if editing -> set edit obj to id & text
          onClick={() => setEdit({ id: task.id, value: task.text })}
          className="edit-icon"
        />
      </div>
    </div>
  ));
};

export default Task;
