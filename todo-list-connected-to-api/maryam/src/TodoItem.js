import React, {useState} from 'react';
import {
  ListItem,
  ListItemText,
  Checkbox,
  IconButton,
  ListItemSecondaryAction
} from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
// ----------------------------------------------------------------
const TodoItem = ({value}) => {
    const [check, setCheck] = useState(false);
    const itemClickedHandler = () => {
        if (value.checked === false) {
            fetch(`https://todolist.ehsan-rafee.ir/api/todolist/${value.id}`,{
                method: 'PUT',
                headers: {
                    'Content-Type':'application/json'
                },
                body: JSON.stringify({
                    title: value.title,
                    checked: true
                })
            })
            .then(response => response.json())
            .then(data => setCheck(true))
            .catch(error => console.error(error))
    }
}

    const deleteClickedHandler = () => {
        fetch(`https://todolist.ehsan-rafee.ir/api/todolist/${value.id}`,{
                method: 'DELETE',
                headers: {
                    'Content-Type':'application/json'
                }
            })
            .then(response => response.json())
            .catch(error => console.error(error))
    }
    //-------------------------------------
    return (
        <ListItem
            dense
            button
            onClick={itemClickedHandler}>

            <Checkbox
                edge="start"
                checked={value.checked||check}
                tabIndex={-1}
                disableRipple
                inputProps={{ 'aria-labelledby': value.id }}
            />

            <ListItemText id={value.id} primary={value.title} />

            <ListItemSecondaryAction>
                <IconButton
                    edge="end"
                    onClick={deleteClickedHandler}
                    aria-label="delete">
                    <DeleteIcon />

                </IconButton>
            </ListItemSecondaryAction>

        </ListItem>
    );
}

export default TodoItem;