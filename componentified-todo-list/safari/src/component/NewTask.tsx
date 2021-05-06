import React, {useState} from "react";
import {TextField, Button, Grid} from '@material-ui/core';
import Panel from "./ui-custom/Panel";

interface NewTaskProps {
    addNewTodoHandler: any
}

const NewTask: React.FC<NewTaskProps> = ({ addNewTodoHandler }) => {
    const [subject, setSubject] = useState<string>("")

    const addNewTodo = () => {
        if (subject === '') {
            alert('Subject is empty')
        } else {
            addNewTodoHandler(subject)
            setSubject('')
        }
    }

    return (
        <Panel title="Add New Task">
            <Grid item xs={12} sm={12} md={6}>
                <TextField
                    onChange={e => setSubject(e.target.value)}
                    value={subject}
                    id="new-task-info"
                    fullWidth
                    label="Task Subject"
                    name="task-subject"
                    variant="outlined"/>
            </Grid>
            <Grid item xs={12} sm={12} md={2}>
                <Button
                    onClick={addNewTodo}
                    variant="contained"
                    size="medium"
                    color="primary"
                >
                    Add New Task
                </Button>
            </Grid>
        </Panel>
    )
}

export default NewTask;