import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import TextField from '@material-ui/core/TextField';
import { Add, ArrowDownward, ArrowUpward } from '@material-ui/icons';
import './App.css';

const useStyles = makeStyles((theme) => ({
  root: {
    width:'100%',
    height: '100vh',
    overflowX: 'hidden',
    backgroundPositionX: '100%',
    backgroundPositionY: '100%',
  },
  container:{
    width:'40%',
    height: '80%',
    overflowX: 'hidden',
    backgroundColor: theme.palette.common.white,
    boxShadow:theme.shadows[15],
  },
  todolist:{
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
  icon: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  extendedIcon: {
    marginRight: theme.spacing(1),
  },
  form: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

const App = () => {
  const classes = useStyles();
  const [newItem, setNewItem] = useState("");
  const [checked, setChecked] = useState([0]);
  const [todoItems, setTodoItems] = useState([]);

  return(
    <Grid container alignItems="center" justify="center" direction="column" className={classes.root}>
      <Grid container alignItems="stretch" className={classes.container}>
        <Grid item container direction="column" alignItems="center" justify="center">
          <Grid item>
            <Typography variant="h4" color="textPrimary" align="center">
              Todo List
            </Typography>
          </Grid>
          <ListItem dense>
            <form className={classes.form} noValidate autoComplete="off">
              <TextField
                fullWidth
                value={newItem}
                onChange={(m) => setNewItem(m.target.value)}
                edge="begin"
                id="standard-basic"
                label="Todo Item"
                required
              />
              <ListItemSecondaryAction>
                <IconButton
                  edge="end"
                  onClick={() => setTodoItems([newItem,...todoItems])}
                  aria-label="delete"
                >
                  <Add />
                  <ArrowUpward />
                </IconButton>
                <IconButton
                  edge="end"
                  onClick={() => setTodoItems([...todoItems,newItem])}
                  aria-label="delete"
                >
                  <ArrowDownward />
                  <Add />
                </IconButton>
              </ListItemSecondaryAction>
            </form>
          </ListItem>
        </Grid>
        <Grid item xs={12} zeroMinWidth>
          <List className={classes.todolist}>
            {todoItems.map((value) => {
              const labelId = `${value}`;
              return (
                <ListItem
                  key={value}
                  dense
                  button
                  onClick={() => {
                    const currentIndex = checked.indexOf(value);
                    const newChecked = [...checked];

                    if (currentIndex === -1) {
                      newChecked.push(value);
                      todoItems.push(todoItems.splice(todoItems.indexOf(labelId), 1)[0]);
                    }
                    setChecked(newChecked);
                  }}>
                  <Checkbox
                    edge="start"
                    checked={checked.indexOf(value) !== -1}
                    tabIndex={-1}
                    disableRipple
                    inputProps={{ 'aria-labelledby': labelId }}
                  />
                  <ListItemText id={labelId} primary={`${value}`} />
                  <ListItemSecondaryAction>
                    <IconButton
                      edge="end"
                      onClick={() => {
                        const currentIndex = todoItems.indexOf(labelId);
                        todoItems.splice(currentIndex, 1);
                        setTodoItems([...todoItems]);// to forceUpdate the page
                      }}
                      aria-label="delete">
                      <DeleteIcon />
                    </IconButton>
                  </ListItemSecondaryAction>
                </ListItem>
              );
            })}
          </List>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default App;