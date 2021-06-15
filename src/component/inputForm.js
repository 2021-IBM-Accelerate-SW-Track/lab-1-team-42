import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Save from './saveButton';
import displayItem from './displayList.js';

export let list = [];

export function UserInput(){
    const [item, setItem] = useState('');

    const handleItem = (e) =>{
        e.preventDefault()
        if(item && !list.includes(item)){
        list.push(item);
        displayItem();
        }
    }
    
    return(
        <form noValidate autoComplete="off" onSubmit={handleItem}>
            <TextField
                onChange={(e) => setItem(e.target.value)} 
                id="userInput" 
                label=""
                variant="filled"
            />
            <Save/>
        </form>
    );
}