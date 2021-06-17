import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { getTarget } from './inputField';
import Item from './item';
import { List } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
      width: '100%',
      maxWidth: 360,
      backgroundColor: theme.palette.background.paper,
      margin: 'auto',
    },
  }));
  
let textList = [];
let actualList = [];
export function addToList(){
  let localTarget = getTarget();
  if(localTarget && !textList.includes(localTarget)){
    let actual = <Item />;
    textList.push(localTarget);
    actualList.push(actual);
    console.log(actualList);
  }
}

export function CheckboxList() {
  const classes = useStyles();

  return(
    <div>
      <List className={classes.root}>
        {actualList.map(current => React.cloneElement(current))}
      </List>
    </div>
  )
}