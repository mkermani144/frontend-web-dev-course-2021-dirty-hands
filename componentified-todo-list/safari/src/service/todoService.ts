import axiosConfig from './axiosConfig';
import {TODO_PATH} from './constant'

export const fetchAllTodos = () => new Promise<TodoModel[]>((resolve, reject) => {
    axiosConfig.get(`${TODO_PATH}`).then(res => resolve(res.data)).catch(err => reject(err))
})

export const fetchTodosById = (_: any, id: number) => new Promise<TodoModel[]>(((resolve, reject) => {
    axiosConfig.get(`${TODO_PATH}/${id}`).then(res => resolve(res.data)).catch(err => reject(err))
}))

export const postNewTodo = (data: TodoModel) => new Promise<TodoModel>(((resolve, reject) => {
    axiosConfig.post(`${TODO_PATH}`, data).then(res => resolve(res.data)).catch(err => reject(err))
}))

export const deleteTodo = (id: string) => new Promise<string>(((resolve, reject) => {
    axiosConfig.delete(`${TODO_PATH}/${id}`).then(_ => resolve(id)).catch(err => reject(err))
}))

export const updateTodo = (data: TodoUpdateModel, id: string) => new Promise<string>(((resolve, reject) => {
    axiosConfig.put(`${TODO_PATH}/${id}`).then(_ => resolve(id)).catch(err => reject(err))
}))
