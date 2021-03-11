import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

interface TaskProps {
    task: TaskStruct
    deleteTasks: any | null
}

const useStyles = makeStyles({
    root: {
        minWidth: 275,
        margin: '0 5px',
    },
});

const Task: React.FC<TaskProps> = ({task, deleteTasks}) => {
    const classes = useStyles();

    const taskStyle = task.isDone ? 'orangered' : 'lightgreen'

    return(
        <Card className={classes.root} variant="outlined">
            <CardContent style={{background: taskStyle, minHeight: '100px'}}>
                <Typography variant="body2" component="p">
                    {task.subject}
                </Typography>
            </CardContent>
            {
                !task.isDone ? <CardActions style={{background: "gray"}}>
                    <Button onClick={e => deleteTasks(task.id)} size="small">Done</Button>
                </CardActions> : null
            }

        </Card>
    )
}

export default Task