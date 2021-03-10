import React from 'react';
import {
  makeStyles,
  ListItem,
  IconButton,
  ListItemSecondaryAction,
  TextField
} from '@material-ui/core';
import {Add, ArrowDownward, ArrowUpward} from '@material-ui/icons'
// ----------------------------------------------------------------
const useStyles = makeStyles((theme) => ({
  form: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));
// ----------------------------------------------------------------
const AddNewItem = ({todoItems, setTodoItems}) => {
    const classes = useStyles();
    let newItem = {};

    const addUpClickedHandler = () => {
        newItem.id = Date.now();
        newItem.check = false;
        setTodoItems([newItem,...todoItems]);
    }

    const addDownClickedHandler = () => {
        newItem.id = Date.now();
        newItem.check = false;
        setTodoItems([...todoItems,newItem])
    }
    //-------------------------------------
    return (
        <ListItem dense>
            <form className={classes.form} noValidate autoComplete="off">
                <TextField
                    fullWidth
                    value={newItem.title}
                    onChange={(m) => newItem.title = m.target.value}
                    edge="begin"
                    id="standard-basic"
                    label="Todo Item"
                    required
                />
                <ListItemSecondaryAction>
                <IconButton
                    edge="end"
                    onClick={addUpClickedHandler}
                    aria-label="delete">
                    <Add />
                    <ArrowUpward />
                </IconButton>
                <IconButton
                    edge="end"
                    onClick={addDownClickedHandler}
                    aria-label="delete">
                    <ArrowDownward />
                    <Add />
                </IconButton>
                </ListItemSecondaryAction>
            </form>
        </ListItem>
    )
}

export default AddNewItem;