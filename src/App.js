import Header from "./component/header"
import React from 'react';
import { Field, getTarget } from './component/inputField';
import Save from './component/saveButton';
import './App.css';
import { CheckboxList, generateItem } from "./component/list";

//test commment
function App() {
  const handleItem = (e) =>{
    e.preventDefault()
  }
  
  return (
    <div className="App">
    <Header/>
    <h1>To Do List</h1>
    {/* Body contains text field and button within the same form,
    which then allows for submission upon click.*/}
    <body>
      <form noValidate autoComplete="off" onSubmit={handleItem}>
        <Field/>
        <Save/>
      </form>
      <br></br>
      <CheckboxList/>
    </body>
    </div>
  );
}
export default App;
