import Header from "./component/header"
import React, {useState} from 'react'
import './App.css';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import SaveIcon from '@material-ui/icons/Save';
import display from './component/displayList';
// import Grid from '@material-ui/core/Grid';

function App() {
  // Hook to store the state of the textField, and
  // a function to handle it (stub for now).
  const [item, setItem] = useState('');
  
  let list = [];
  const handleItem = (e) =>{
    e.preventDefault()

    if(item){
      list.push(item);
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
      {display(list)}
    </body>
    </div>
  );
}
export default App;
