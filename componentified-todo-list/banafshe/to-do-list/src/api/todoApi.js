import axios from 'axios';

const todo_path = 'todolist'

export const getAllTodos = () => new Promise((resolve, reject) => {
    axios.get(`${todo_path}`).then(res => resolve(res.data)).catch(err => reject(err))
})

export const getTodoById = (id) => new Promise(((resolve, reject) => {
    axios.get(`${todo_path}/${id}`).then(res => resolve(res.data)).catch(err => reject(err))
}))

export const postTodo = (data) => new Promise(((resolve, reject) => {
    axios.post(`${todo_path}`, data).then(res => resolve(res.data)).catch(err => reject(err))
}))

export const deleteTodo = (id) => new Promise(((resolve, reject) => {
    axios.delete(`${todo_path}/${id}`).then(_ => resolve(id)).catch(err => reject(err))
}))

export const updateTodo = (data, id) => new Promise(((resolve, reject) => {
    axios.put(`${todo_path}/${id}`, data).then(_ => resolve(id)).catch(err => reject(err))
}))