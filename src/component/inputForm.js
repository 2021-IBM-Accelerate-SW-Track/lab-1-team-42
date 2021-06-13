import React, { useState } from 'react';
import Field from './inputField';
import Save from './saveButton';

let list = [];

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
            <Field
            onChange={(e) => setItem(e.target.value)} 
            />
            <Save/>
        </form>
    );
}