import React, { useState } from "react";
import AddTodo from "./addTodo";
import Todo from "./todo";
import {getAllTodos,getTodoById,deleteTodo,updateTodo,postTodo} from '../api/todoApi.js'

const TodoList = () => {
    const allTtodoList = [getAllTodos];
    const [todoList, setTodoList] = useState([]);
    allTtodoList.forEach(element => {
        if (element.ownerId ===4){
            const todos=[element,...todoList]
            setTodoList(todos)
        }
        
    });
    
    const addHandler = (todo) => {
           postTodo(todo)
    }
    const doneHandler = (id) => {
    
        const todo = getTodoById(id);
        const updatedTodo = {
            title : todo.title,
            cheked:true,            
        }
        updateTodo(updatedTodo,id)
    }
    const undoHandler = (id) => {

         const todo = getTodoById(id);
        const updatedTodo = {
            title : todo.title,
            cheked:false,            
        }
        updateTodo(updatedTodo,id);
    }
    const deleteHandler = (id) => {
        deleteTodo(id);
    }

    return (
        <>
            <AddTodo addHandler={addHandler} />
            <div className="border border-info m-2 p-4">
                <h2>To DO List</h2>
                {todoList.map(t => <Todo key={t.id} todo={t} doneHandler={doneHandler} undoHandler={undoHandler} deleteHandler={deleteHandler}/>)}
            </div>
            
        </>
    )
}

export default TodoList