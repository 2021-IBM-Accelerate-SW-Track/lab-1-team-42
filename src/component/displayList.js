import { list } from "./inputForm";

// displayItem
  //
  // // Adds to and displays the given list in order
export default function displayItem(){
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