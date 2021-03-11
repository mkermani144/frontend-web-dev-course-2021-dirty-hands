import {
    ADD_TODO_TO_BOTTOM,
    ADD_TODO_TO_TOP,
    DELETE_TODO,
    EDIT_TODO,
    SHOW_ALL,
    SHOW_COMPLETED,
    SHOW_UNCOMPLETED,
} from "./actionType";

export const addTodoToBottom = text => ({
    type: ADD_TODO_TO_BOTTOM,
    id: Date.now(),
    text
});

export const addTodoToTop = text => ({
    type: ADD_TODO_TO_TOP,
    id: Date.now(),
    text
})

export const deleteTodo = id => ({
    type: DELETE_TODO,
    id
})

export const editTodo = (id, text, isDone) => ({
    type: EDIT_TODO,
    id,
    text,
    isDone
})


export const showAll = () => ({
    type: SHOW_ALL
});

export const showCompleted = () => ({
    type: SHOW_COMPLETED
});

export const showUnCompleted = () => ({
    type: SHOW_UNCOMPLETED
});