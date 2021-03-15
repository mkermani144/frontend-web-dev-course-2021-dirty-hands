import React from "react";
import Panel from "./ui-custom/Panel";
import Task from "./Task";


interface TaskListProps {
    tasks: TodoModel[]
    doneFunction: any | null
}

const ActiveTaskList: React.FC<TaskListProps> = ({tasks, doneFunction}) => {
    return (
        <Panel title="Tasks" subheader="Active Tasks">
            {tasks.filter(task => !task.checked).map((task: TodoModel) =>
                <Task key={task.id} task={task} deleteTask={null}  done={doneFunction}/>
            )}
        </Panel>
    )
}

export default ActiveTaskList