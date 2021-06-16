import React from 'react';
import List from '@material-ui/core/List';
import { makeStyles } from '@material-ui/core/styles';
import { getTarget } from './inputField';
import Item from './item';

const useStyles = makeStyles((theme) => ({
    root: {
      width: '100%',
      maxWidth: 360,
      backgroundColor: theme.palette.background.paper,
      margin: 'auto',
    },
  }));
  
  let textList = [];
  function addToList(){
    let localTarget = getTarget();
    if(localTarget && !textList.includes(localTarget)){
      textList.push(localTarget);
      return <Item />
    }
  }

  export function CheckboxList() {
    const classes = useStyles();
    return(
      <List className={classes.root} onSubmit={addToList()}/>
    )
  }