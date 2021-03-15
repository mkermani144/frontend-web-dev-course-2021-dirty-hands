import React, {useState} from 'react';
import {
  makeStyles,
  ListItem,
  IconButton,
  ListItemSecondaryAction,
  TextField
} from '@material-ui/core';
import {Add} from '@material-ui/icons'
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
    const [textFieldValue, setTextFieldValue] = useState('');

    const addClickedHandler = () => {
        fetch(`https://todolist.ehsan-rafee.ir/api/todolist`,{
            method: 'POST',
            headers: {
                'Content-Type':'application/json'
            },
            body: JSON.stringify({
                title: textFieldValue,
                ownerId: "5",
                checked: false
            })
           })
        .then(response => response.json())
        .then(data => setTodoItems([...todoItems, data]))
        .catch(error => console.error(error))
    }
    //-------------------------------------
    return (
        <ListItem dense>
            <form className={classes.form} noValidate autoComplete="off">
                <TextField
                    fullWidth
                    value={textFieldValue}
                    onChange={e => setTextFieldValue(e.target.value)}
                    edge="begin"
                    id="standard-basic"
                    label="Todo Item"
                    required
                />
                <ListItemSecondaryAction>
                <IconButton
                    edge="end"
                    onClick={addClickedHandler}
                    aria-label="delete">
                    <Add />
                </IconButton>
                </ListItemSecondaryAction>
            </form>
        </ListItem>
    )
}

export default AddNewItem;