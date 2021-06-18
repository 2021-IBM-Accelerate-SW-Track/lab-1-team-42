import React, { useState } from "react";
import Task from "./Task";
import TaskForm from "./TaskForm";

const TaskList = () => {
  const [tasks, setTasks] = useState([]);

  //Task is item passed in from TaskForm
  const addTask = (task) => {
    //if nothing typed in or already in tasks --> return
    if (!task.text || tasks.includes(task)) {
      return;
    }
    //checks if it is a duplicate
    // for(var i = 0; i < tasks.length; i++){
    //   if(tasks[i].text === task.text){
    //       return;
    //   }
    // }
    //get every Task out of Tasks[]
    const newTasks = [task, ...tasks];

    //set state with new Tasks
    setTasks(newTasks);
    console.log(...tasks);
  };

  //complete
  const completeTask = (id) => {
    let updatedTasks = tasks.map((task) => {
      //toggle between completed & not completed
      if (task.id === id) {
        task.isComplete = !task.isComplete;
      }
      return task;
    });
    setTasks(updatedTasks);
  };

  //delete
  const removeTask = (id) => {
    const removeArr = [...tasks].filter((task) => task.id !== id);
    setTasks(removeArr);
  };

  //update
  const updateTask = (taskId, newValue) => {
    if (!newValue.text) {
      return;
    }
    setTasks((prev) =>
      prev.map((item) => (item.id === taskId ? newValue : item))
    );
  };

  return (
    <>
      <h1>Add Your Tasks</h1>
      <TaskForm onSubmit={addTask} />
      <Task
        tasks={tasks}
        completeTask={completeTask}
        removeTask={removeTask}
        updateTask={updateTask}
      />
    </>
  );
};

export default TaskList;
