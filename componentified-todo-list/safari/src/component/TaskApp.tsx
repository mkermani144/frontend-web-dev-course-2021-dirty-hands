import React, {useEffect, useState} from "react";
import NewTask from "./NewTask";
import ActiveTaskList from "./ActiveTaskList";
import DoneTaskList from "./DoneTaskList";
import {fetchAllTodos, postNewTodo, updateTodo, deleteTodo} from '../service/todoService'

const TaskApp: React.FC<any> = () => {
    const [tasks, setTasks] = useState<TodoModel[]>([])

    const addNewItem = (subject: string) => {
        const task: TodoModel = {
            id: "",
            ownerId: 6,
            title: subject,
            checked: false
        };

        postNewTodo(task)
            .then(_ => fetchAllTodos())
            .catch((error) => console.log(error))
    }

    const doneTask = (id: string) => {
        const todos = [...tasks];
        const index = todos.findIndex(task => task.id === id)
        const todoForUpdate = todos[index]

        todoForUpdate.checked = true

        const doneTask: TodoUpdateModel = {
            title: todoForUpdate.title,
            checked: true
        }

        updateTodo(doneTask, id)
            .then(_ => fetchAllTodos())
            .catch((error) => console.log(error))
    }

    const deleteTask = (id: string) => {
        deleteTodo(id).then(_ => fetchAllTodos())
            .catch((error) => console.log(error))
    }


    const fetchTasks = () => {
        fetchAllTodos()
            .then((result: TodoModel[]) => setTasks(result))
            .catch((error) => console.log(error))
    }

    useEffect(() => fetchTasks(), [tasks])

    return (
        <>
            <NewTask addNewTodoHandler={addNewItem}/>
            <ActiveTaskList tasks={tasks} doneFunction={doneTask}/>
            <DoneTaskList tasks={tasks} deleteFunction={deleteTask}/>
        </>
    )
}

export default TaskApp