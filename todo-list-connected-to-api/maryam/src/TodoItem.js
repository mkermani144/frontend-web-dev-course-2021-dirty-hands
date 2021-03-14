import React from 'react';
import {
  ListItem,
  ListItemText,
  Checkbox,
  IconButton,
  ListItemSecondaryAction
} from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
// ----------------------------------------------------------------
const TodoItem = ({value, todoItems, setTodoItems}) => {

    const itemClickedHandler = () => {
        const temp = [...todoItems];
        if (value.check === false) {
            const itemIndex = temp.findIndex(x => x.id === value.id);
            temp[itemIndex].check = true;
            temp.push(temp.splice(itemIndex,1)[0]);
            setTodoItems([...temp]);
        }
    }

    const deleteClickedHandler = () => {
        const currentIndex = todoItems.findIndex(x => x.id === value.id);
        const temp = [...todoItems];
        temp.splice(currentIndex, 1);
        setTodoItems([...temp]);
    }
    //-------------------------------------
    return (
        <ListItem
            dense
            button
            onClick={itemClickedHandler}>

            <Checkbox
                edge="start"
                checked={value.check}
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