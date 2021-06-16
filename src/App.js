import Header from "./component/header"
import TodoAdd from "./component/TodoAdd"
import TodoList from "./component/TodoList"
import React, {useState} from 'react'
import {v4} from 'uuid'
import './App.css';

function App() {
  const [todos, setTodos] = useState([]);

  //Mark an item as completed, or uncompleted when the check is clicked
  function checkTodo(id){
    setTodos(todos.map((item) => {
      if(item?.id === id)
        item.isCompleted = !item.isCompleted;
        return item;
    }));
  };

  //Delete an item when the delete is clicked
  function deleteTodo(id){
    setTodos(todos.filter(item => item.id !== id))
  };

  //Edits an item when edit is clicked
  function editTodo(id, newText){
    setTodos(todos.map((item) => {
      if(item?.id === id)
        item.title = newText;
        return item;
    }));
  }

  //Need to add Date and Time for each item

  //Add a new item to the array, avoiding duplicates and empty entries
  function addTodo(text){
    var bool = false;
    //checks for duplicates or empty item, not including capitalization
    if("" === text){
      bool = true;
    }else{
      for(var i = 0; i < todos.length; i++){
        if(todos[i].title === text){
          bool = true;
          break;
        }
      }
    }
    //if duplicates or empty, don't add to list
    if(bool){
      return;
    }
    //else should add as a new item
    else{
      const newTodo = {
        id: v4(),
        title: text,
        isCompleted: false,
      };
  
      setTodos([...todos, newTodo]);
    }
  }


  return (
    <div className="App">
    <Header/>
    <h1>To Do List:</h1>
    <TodoAdd addTodo={addTodo}/>
    <TodoList todos={todos} checkTodo={checkTodo} deleteTodo={deleteTodo} editTodo={editTodo}/>
    </div>
  );
}

export default App;
