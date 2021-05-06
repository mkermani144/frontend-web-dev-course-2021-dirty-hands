import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

interface TaskProps {
    task: TodoModel
    done: any | null
    deleteTask: any | null
}

const useStyles = makeStyles({
    root: {
        minWidth: 275,
        margin: '0 5px',
    },
    cardContent: {
        backgroundColor: (task: TodoModel) => task.checked ? 'orangered' : 'lightgreen',
        minHeight: '100px'
    },
    cardAction: {
        background: "gray"
    }
});

const Task: React.FC<TaskProps> = ({task, done, deleteTask}) => {
    const classes = useStyles(task);

    return(
        <Card className={classes.root} variant="outlined">
            <CardContent className={classes.cardContent}>
                <Typography variant="body2" component="p">
                    {task.title}
                </Typography>
            </CardContent>
            {
                !task.checked ? <CardActions className={classes.cardAction}>
                    <Button onClick={() => done(task.id)} size="small">Done</Button>
                </CardActions> : <CardActions className={classes.cardAction}>
                    <Button onClick={() => deleteTask(task.id)} size="small">Done</Button>
                </CardActions>
            }

        </Card>
    )
}

export default Task