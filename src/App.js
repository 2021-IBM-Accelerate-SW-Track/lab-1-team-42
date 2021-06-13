import Header from "./component/header"
import React from 'react'
import { UserInput } from "./component/inputForm";
import './App.css';

//test commment
function App() {
  // Hook to store the state of the textField, and
  // a function to handle it.
  
  return (
    <div className="App">
    <Header/>
    <h1>To Do List</h1>
    {/* Body contains text field and button within the same form,
    which then allows for submission upon click.*/}
    <body>
      <UserInput/>
      <br></br>
      <ol id="toDo">
      </ol>
    </body>
    </div>
  );
}
export default App;
