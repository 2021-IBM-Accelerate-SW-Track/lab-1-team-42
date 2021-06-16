import React from 'react'
import { Card, CardContent, Typography, Container, IconButton } from '@material-ui/core'
import { Check, Delete, Edit } from '@material-ui/icons'

function ToDo({title, checkTodo, id, isCompleted, deleteTodo, editTodo, addTodo}) {
    const markComplete = () => checkTodo(id);
    const delTodo = () => deleteTodo(id);
    const todoStyle = isCompleted 
        ? {textDecoration: "line-through"} 
        : {textDecoration: "none"};
    function edit(id){
        //Edit the item.title to a edited version
    } 
    
    return(
        <div>
            <Container>
                <Card variant = "outlined" style={{marginTop: 35, background: "PowderBlue" }}>
                    <CardContent>
                        <Typography variant="h5" component="h2" style={todoStyle}>
                            {/* Check Icon */}
                            <IconButton style = {{float: 'left'}} onClick = {markComplete}>
                                <Check style={{color: 'green'}} />
                            </IconButton>
                            {/* Prints List Title */}
                            {title}
                            {/* Delete Icon */}
                            <IconButton style = {{float: 'right'}} onClick={delTodo}>
                                <Delete style={{color: 'red'}} />
                            </IconButton>
                            {/* Edit Icon */}
                            <IconButton style = {{float: 'right'}} onClick={edit(id)}>
                                <Edit style={{color: 'LightSlateGrey'}} />
                            </IconButton>
                        </Typography>
                    </CardContent>
                </Card>
            </Container>
        </div>
    );
};

export default ToDo;