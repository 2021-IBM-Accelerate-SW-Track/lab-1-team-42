import Header from "./component/header";
import React from "react";
import "./App.css";
import "./component/TaskForm";
import TaskList from "./component/TaskList";
import Footer from "./component/Footer";

function App() {
  return (
    <div className="App">
      <TaskList />
      <div className="Footer">
        <Footer />
      </div>
    </div>
  );
}

export default App;
