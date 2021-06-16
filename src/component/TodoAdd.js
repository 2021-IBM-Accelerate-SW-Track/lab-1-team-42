import React, {useState} from 'react'
import FormControl from '@material-ui/core/FormControl';
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

function TodoAdd({ addTodo }) {
    const [text, setText] = useState("");
    //adds new item to array and clears text field
    function handleItem(e){
        e.preventDefault();
        addTodo(text);
        setText("");
    }
    return(
        <Container maxWidth="sm">
            <form onSubmit = {handleItem}>
                <FormControl fullWidth={true}>
                    <TextField label = "To Do" value={text} onChange={e => setText(e.target.value)}/>
                    {/*Add Button*/}
                    <Button 
                        variant="contained" 
                        color="primary" 
                        type="submit" 
                        style={{marginTop: 5}}>
                        Add
                    </Button>
                </FormControl>
            </form>
        </Container>
    )
}

export default TodoAdd;