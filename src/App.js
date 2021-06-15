import Header from "./component/header"
import React, {useState} from 'react'
import './App.css';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import SaveIcon from '@material-ui/icons/Save';
//test commment
function App() {
  // Hook to store the state of the textField, and
  // a function to handle it.
  const [item, setItem] = useState('');
  
  let list = [];
  const handleItem = (e) =>{
    e.preventDefault()

    if(item && !list.includes(item)){
      list.push(item);
      displayItem();
    }
  }

  // displayItem
  //
  // // Adds to and displays the given list in order
  function displayItem(){
    // HTML list is identified by ID from the document
    let displayList = document.getElementById('toDo');
    // For each entry in the array, a new HTML child is
    // created and appended to the HTML list, meaning every
    // time this is called the display list is overwritten
    for(let i = 0; i < list.length; i++){
      let item = document.createElement('li');
      item.appendChild(document.createTextNode(list[i]));
      displayList.append(item);
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
        <TextField
        onChange={(e) => setItem(e.target.value)} 
        id="userInput" 
        label=""
        variant="filled"
        />
        <Button          // FIXME add space b/w button and field
          type="submit"
          variant="contained" 
          color="primary"
          size="large" 
          startIcon={<SaveIcon />}>
            Save 
        </Button>
      </form>
      <br></br>
      <ol id="toDo">
      </ol>
    </body>
    </div>
  );
}
export default App;
