import React from "react";
import Panel from "./ui-custom/Panel";
import Task from "./Task";


interface TaskListProps {
    tasks: TodoModel[]
    deleteFunction: any
}

const ActiveTaskList: React.FC<TaskListProps> = ({tasks, deleteFunction}) => {
    return (
        <Panel title="Tasks" subheader="Done Tasks">
            {tasks.filter(task => task.checked).map((task: TodoModel) =>
                <Task key={task.id} task={task} deleteTask={deleteFunction} done={null}/>
            )}
        </Panel>
    )
}

export default ActiveTaskList