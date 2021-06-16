import Header from "./component/header"
import React from 'react';
import { Field, getTarget } from './component/inputField';
import Save from './component/saveButton';
import './App.css';
import  Grid  from '@material-ui/core/Grid';
import { GenerateList } from './component/list'
import List from '@material-ui/core/List'

//test commment
function App() {
  const handleItem = (e) =>{
    console.log("handling");
    e.preventDefault();
    GenerateList();
  }
  
  return (
    <div className="App">
    <Header/>
    <h1>To Do List</h1>
    {/* Body contains text field and button within the same form,
    which then allows for submission upon click.*/}
      <body>
        <form noValidate autoComplete="off" onSubmit={handleItem}>
          <Grid container margin="auto" justify="center" row>
              <Field/>
              <Save/>
          </Grid>
        </form>
        <br></br>
        <div id="myList">

        </div>
      </body>
    </div>
  );
}
export default App;
