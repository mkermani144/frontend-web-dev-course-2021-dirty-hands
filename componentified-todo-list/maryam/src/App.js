import React, {useState} from 'react';
import {
  makeStyles,
  Grid,
  List,
  Typography,
} from '@material-ui/core';
// ----------------------------------------------------------------
import AddNewItem from './AddNewItem';
import TodoItem from './TodoItem';
// ----------------------------------------------------------------
const useStyles = makeStyles((theme) => ({
  root: {
    width:'100%',
    height: '100vh',
    overflowX: 'hidden',
    backgroundPositionX: '100%',
    backgroundPositionY: '100%',
    backgroundColor: '#3f3160',
  },
  container:{
    width:'40%',
    height: '70%',
    overflowX: 'hidden',
    backgroundColor: theme.palette.common.white,
    boxShadow:theme.shadows[15],
  },
  todolist:{
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  }
}));
// ----------------------------------------------------------------
const App = () => {
  const classes = useStyles();
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

          <AddNewItem
            todoItems={todoItems}
            setTodoItems={setTodoItems}
          />

        </Grid>

        <Grid item xs={12} zeroMinWidth>
          <List className={classes.todolist}>
            {todoItems.map(value => <TodoItem
                                      key={value.id}
                                      value={value}
                                      todoItems={todoItems}
                                      setTodoItems={setTodoItems}
                                    />)}
          </List>
        </Grid>

      </Grid>
    </Grid>
  )
}

export default App;