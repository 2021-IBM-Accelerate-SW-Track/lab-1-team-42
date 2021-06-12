import Header from "./component/header"
import React from 'react'
import './App.css';
// Test comment
function App() {
  return (
    <div className="App">
    <Header/>
    <h1>To Do List</h1>
    <p>
      TEST INPUT AREA <br></br>
      <input type="text" id="userInput" placeholder="To Do..."></input>
    </p>
    </div>
  );
}

export default App;
