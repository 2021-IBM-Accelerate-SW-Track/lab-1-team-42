import React from 'react'
import ToDo from './ToDo'

function TodoList({todos, checkTodo, deleteTodo, editTodo}) {
    return(
        <div>
            {/*Used list.map here to call ToDo on each individual entry in array*/}
            {todos.map(item => (
                <ToDo 
                    title= {item.title}
                    checkTodo={checkTodo}
                    id={item.id}
                    isCompleted={item.isCompleted}
                    deleteTodo={deleteTodo}
                    editTodo = {editTodo}
                />
            ))}
        </div>
    );
};

export default TodoList;