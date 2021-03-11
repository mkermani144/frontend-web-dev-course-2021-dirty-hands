import React from "react";
import Panel from "./ui-custom/Panel";
import Task from "./Task";


interface TaskListProps {
    tasks: TaskStruct[]
}

const ActiveTaskList: React.FC<TaskListProps> = ({tasks}) => {
    return (
        <Panel title="Tasks" subheader="Done Tasks">
            {tasks.filter(task => task.isDone).map((task: TaskStruct) =>
                <Task key={task.id} task={task} deleteTasks={null}/>
            )}
        </Panel>
    )
}

export default ActiveTaskList