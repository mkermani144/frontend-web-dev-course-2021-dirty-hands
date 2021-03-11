import React from 'react'
import {connect} from "react-redux";

//css
import './todo.css'

//components
import TodoNav from "./TodoNav";
import TodoItem from "./TodoItem";

//constants
import {SHOW_ALL, SHOW_UNCOMPLETED, SHOW_COMPLETED} from "../../actions/actionType"

class TodoList extends React.Component {

    getVisibleTodo = (showMode) => {
        let todos = this.props.todos;

        switch (showMode) {
            case SHOW_ALL:
                return todos;

            case SHOW_COMPLETED:
                return todos.filter(item => item.isDone);

            case SHOW_UNCOMPLETED:
                return todos.filter(item => !item.isDone)

            default:
                throw new Error("something goes wrong in show mode!")
        }
    }

    render() {
        let todos = this.getVisibleTodo(this.props.showMode)

        return (
            <div className="container">
                <div className="d-flex flex-column align-items-center ">
                    <TodoNav/>
                    {
                        todos.map(todo => <TodoItem key={todo.id} {...todo}/>)
                    }
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        todos: state.todos,
        showMode: state.showMode
    }
}


export default connect(mapStateToProps)(TodoList);