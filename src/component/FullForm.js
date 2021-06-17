import React from 'react';
import  Grid  from '@material-ui/core/Grid';
import { CheckboxList, addToList } from './list'
import { Field } from './inputField';
import Save from './saveButton';

const handleItem = (e) =>{
    console.log("handling");
    e.preventDefault();
    addToList();
  }

function FullForm(){
    return(
        <form noValidate autoComplete="off" onSubmit={handleItem}>
            <Grid container margin="auto" justify="center">
                <Field/>
                <Save/>
            </Grid>
            <CheckboxList/>
        </form>
    );
}

export default FullForm;