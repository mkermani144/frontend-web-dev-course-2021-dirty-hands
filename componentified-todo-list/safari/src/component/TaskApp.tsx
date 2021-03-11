import React, {useEffect, useState} from "react";
import NewTask from "./NewTask";
import ActiveTaskList from "./ActiveTaskList";
import DoneTaskList from "./DoneTaskList";

const TaskApp: React.FC<any> = () => {
    const [tasks, setTasks] = useState<TaskStruct[]>([])

    const addNewItemTop = (subject: string) => {
        const task: TaskStruct = {
            id: Math.floor(Math.random() * 101),
            subject: subject,
            isDone: false
        };

        setTasks([task, ...tasks])
    }

    const doneTask = (id: number) => {
        const todos = [...tasks];
        const index = todos.findIndex(task => task.id === id)
        todos[index].isDone = true

        setTasks(todos)
    }

    const addNewItemBottom = (subject: string) => {
        const task: TaskStruct = {
            id: Math.floor(Math.random() * 101),
            subject: subject,
            isDone: false
        };

        setTasks([...tasks, task])
    }

    useEffect(() =>
        setTasks([
                {
                    id: Math.floor(Math.random() * 101),
                    subject: "Doing homeworks",
                    isDone: true
                },
                {
                    id: Math.floor(Math.random() * 101),
                    subject: "Drinking cups of coffee",
                    isDone: false
                },
                {
                    id: Math.floor(Math.random() * 101),
                    subject: "Listening to ChannelB",
                    isDone: false
                }
            ]
        ), []
    )

    return (
        <>
            <NewTask addTop={addNewItemTop} addBottom={addNewItemBottom}/>
            <ActiveTaskList tasks={tasks} deleteFunction={doneTask}/>
            <DoneTaskList tasks={tasks}/>
        </>
    )
}

export default TaskApp