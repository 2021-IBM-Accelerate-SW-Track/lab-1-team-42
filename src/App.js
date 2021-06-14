import Header from "./component/header";
import React from "react";
import "./App.css";
import "./component/TodoForm";
import TodoList from "./component/TodoList";

function App() {
  return (
    <div className="App">
      <TodoList />
    </div>
  );
}

export default App;
