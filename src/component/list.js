import React from 'react';
import List from '@material-ui/core/List';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
      width: '100%',
      maxWidth: 360,
      backgroundColor: theme.palette.background.paper,
      margin: 'auto',
    },
  }));
  
  export function CheckboxList() {
    const classes = useStyles();
    return(
      <List className={classes.root}>
        
      </List>
    )
  }