import Header from "./component/header"
import React from 'react';
import { Field } from './component/inputField';
import Save from './component/saveButton';
import './App.css';
import  Grid  from '@material-ui/core/Grid';
import { CheckboxList } from './component/list'

//test commment
function App() {
  const handleItem = (e) =>{
    console.log("handling");
    e.preventDefault();
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
            <CheckboxList />
          </Grid>
        </form>
      </body>
    </div>
  );
}
export default App;
