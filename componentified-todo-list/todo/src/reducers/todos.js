import {ADD_TODO_TO_BOTTOM, ADD_TODO_TO_TOP, DELETE_TODO, EDIT_TODO} from '../actions/actionType'

function getTodoFromLocalStorage() {
    const todo = localStorage.getItem('todo')
    return todo == null ? [] : JSON.parse(todo);
}

function saveTodoToLocalStorage(todo) {
    localStorage.setItem('todo', JSON.stringify(todo))
}

export const todos = (state = getTodoFromLocalStorage(), action) => {
    let todo = null

    switch (action.type) {

        case ADD_TODO_TO_BOTTOM:
            todo = [
                ...state,
                {
                    id: action.id,
                    text: action.text,
                    isDone: false,
                }
            ]
            saveTodoToLocalStorage(todo)
            return todo

        case ADD_TODO_TO_TOP:
            todo = [
                {
                    id: action.id,
                    text: action.text,
                    isDone: false
                },
                ...state
            ]
            console.log(todo)
            saveTodoToLocalStorage(todo)
            return todo


        case DELETE_TODO:
            todo = state.filter(item => item.id !== action.id);
            saveTodoToLocalStorage(todo)
            return todo

        case EDIT_TODO:
            todo = state.map(todo =>
                (todo.id === action.id)
                    ? {
                        id: action.id,
                        text: action.text,
                        isDone: action.isDone
                    }
                    : todo
            )
            saveTodoToLocalStorage(todo)
            return todo


        default:
            return state;
    }
}