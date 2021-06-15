import Header from "./component/header";
import React from "react";
import "./App.css";
import "./component/TaskForm";
import TaskList from "./component/TaskList";

function App() {
  return (
    <div className="App">
      <TaskList />
    </div>
  );
}

export default App;
