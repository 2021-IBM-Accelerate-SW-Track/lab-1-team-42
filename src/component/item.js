import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import { getTarget } from './inputField';


export default function Item(){
    let localTarget = getTarget;
    return(
        <ListItem role={undefined} dense button>
            <ListItemIcon>
                <Checkbox 
                edge="start" 
                tabIndex={-1}
                disableRipple
                />
            </ListItemIcon>
            <ListItemText primary={localTarget}/>
            <ListItemSecondaryAction>
                <IconButton edge="end" aria-label="delete">
                <DeleteIcon />
                </IconButton>
            </ListItemSecondaryAction>
        </ListItem>
    )
}