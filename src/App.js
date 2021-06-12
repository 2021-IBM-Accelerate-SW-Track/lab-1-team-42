import Header from "./component/header"
import React from 'react'
import './App.css';
import TextField from '@material-ui/core/TextField';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import Grid from '@material-ui/core/Grid';


function App() {
  let textSpace = 3;
  let buttonSpace = 1;
  return (
    <div className="App">
    <Header/>
    <h1>To Do List</h1>
    <body>
      <Grid container spacing={0} direction="row" justify="center" >
        <Grid item xs={textSpace}>
          <form noValidate autoComplete="off">
            <TextField id="filled-basic" label="Filled" variant="filled" />
          </form>
        </Grid>
        <Grid item xs={buttonSpace}>
          <Fab color="primary" aria-label="add">
            <AddIcon />
          </Fab>
        </Grid>
      </Grid>
    </body>
    </div>
  );
}
export default App;
