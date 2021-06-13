import Header from "./component/header"
import React from 'react';
import { Field, getTarget } from './component/inputField';
import Save from './component/saveButton';
import './App.css';

//test commment
function App() {
  let list = [];

function displayItem(){
    // HTML list is identified by ID from the document
    let displayList = document.getElementById('toDo');
    // Creates a new HTML list item, access the latest addition
    // of the JS array, matches the HTML text to the newest
    // addition, and appends the HTML list element to the HTML
    let item = document.createElement('li');
    item.appendChild(document.createTextNode(list[list.length-1]));
    displayList.append(item);
  }

  const handleItem = (e) =>{
    let localTarget = getTarget();
    e.preventDefault()
    
    if(localTarget && !list.includes(localTarget)){
      list.push(localTarget);
      displayItem();
    }
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
      <ol id="toDo">
      </ol>
    </body>
    </div>
  );
}
export default App;
