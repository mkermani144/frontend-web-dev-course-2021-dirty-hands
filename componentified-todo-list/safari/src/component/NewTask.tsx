import React, {useState} from "react";
import {TextField, Button, Grid} from '@material-ui/core';
import Panel from "./ui-custom/Panel";

interface NewTaskProps {
    addTop: any
    addBottom: any
}

const NewTask: React.FC<NewTaskProps> = ({ addTop, addBottom }) => {
    const [subject, setSubject] = useState<string>("")

    const addNewTop = () => {
        if (subject === '') {
            alert('Subject is empty')
        } else {
            addTop(subject)
            setSubject('')
        }
    }

    const addNewBottom = () => {
        if (subject === '') {
            alert('Subject is empty')
        } else {
            addBottom(subject)
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
                    onClick={addNewTop}
                    variant="contained"
                    size="medium"
                    color="primary"
                >
                    Add At Start
                </Button>
            </Grid>
            <Grid item xs={12} sm={12} md={3}>
                <Button onClick={addNewBottom} variant="contained">
                    Add At End
                </Button>
            </Grid>
        </Panel>
    )
}

export default NewTask;