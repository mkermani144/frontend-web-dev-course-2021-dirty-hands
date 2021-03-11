import React from "react";
import Panel from "./ui-custom/Panel";
import Task from "./Task";


interface TaskListProps {
    tasks: TaskStruct[]
    deleteFunction: any | null
}

const ActiveTaskList: React.FC<TaskListProps> = ({tasks, deleteFunction}) => {
    return (
        <Panel title="Tasks" subheader="Active Tasks">
            {tasks.filter(task => !task.isDone).map((task: TaskStruct) =>
                <Task key={task.id} task={task} deleteTasks={deleteFunction} />
            )}
        </Panel>
    )
}

export default ActiveTaskList