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
const AddNewItem = () => {
    const classes = useStyles();
    const [textFieldValue, setTextFieldValue] = useState('');

    const addClickedHandler = () => {
        fetch(`https://todolist.ehsan-rafee.ir/api/todolist/`,{
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                ownerId: 5,
                title: textFieldValue,
                checked: false
            })
        })
        .then((response) => response.json())
        .then((responseJson) => console.log(responseJson))
    }

    // useEffect(()=>{
    //     fetch(`http://127.0.0.1:8000/showform/${token}/${id}/`)
    //     .then(response => {
    //       return response.json();
    //     }).then(response=>{
    //       if(response.status === 200){
    //         const fieldArray = Object.keys(response.fields).map((key) => response.fields[key]);
    //         setFields(fieldArray);
    //       }
    //     });
    //   },[])

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