import Header from "./component/header"
import React, {useState} from 'react'
import './App.css';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import SaveIcon from '@material-ui/icons/Save';
// import Grid from '@material-ui/core/Grid';
// import { addItem } from "./component/header/addItem";

function App() {
  const [item, setItem] = useState('');
  const handleItem = (e) =>{
    e.preventDefault()

    if(item){
      console.log(item);
    }
  }

  return (
    <div className="App">
    <Header/>
    <h1>To Do List</h1>
    <body>
      <form noValidate autoComplete="off" onSubmit={handleItem}>
        <TextField
        onChange={(e) => setItem(e.target.value)} 
        id="userInput" 
        label="" 
        variant="filled" 
        />
        <Button 
          type="submit"
          variant="contained" 
          color="primary"
          size="large" 
          startIcon={<SaveIcon />}>
          Save
        </Button>
      </form>
    </body>
    </div>
  );
}
export default App;
