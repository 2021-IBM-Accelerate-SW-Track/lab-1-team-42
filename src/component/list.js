import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { makeStyles } from '@material-ui/core/styles';
// The following imports are optional and more can be found at
// https://material-ui.com/components/lists. They might be good 
// choices for whomever will be working on these facets of the
// list functionality.
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import { getTarget } from './inputField';

const useStyles = makeStyles((theme) => ({
    root: {
      width: '100%',
      maxWidth: 360,
      backgroundColor: theme.palette.background.paper,
      margin: 'auto',
    },
  }));

  let list = [];
  let indicies = [];
  export function GenerateList(){
    let localTarget = getTarget();
    if(localTarget && !list.includes(localTarget)){
      list.push(localTarget);
      indicies.push(indicies.length);
      console.log("generating");
      return indicies.map((value) => {
        return(
          <ListItem key={value} role={undefined} dense button>
            <ListItemIcon>
              <Checkbox 
              edge="start" 
              tabIndex={-1}
              disableRipple
              />
            </ListItemIcon>
            <ListItemText primary={list[value]}/>
            <ListItemSecondaryAction>
              <IconButton edge="end" aria-label="delete">
                <DeleteIcon />
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>
        )
      })
    }
  }
  
  export function CheckboxList() {
    const classes = useStyles();
    return(
      <List className={classes.root}>
        {GenerateList()}
      </List>
    )
  }