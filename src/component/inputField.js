import TextField from '@material-ui/core/TextField';

let target = "";
function setTarget(item){
    target = item;
}

export function getTarget(){
    return target;
}
export function Field(){
    return(
        <TextField
            id="userInput" 
            label=""
            variant="filled"
            onChange={(e) => setTarget(e.target.value)}
            data-testid="new-item-input"
        />
    )
}