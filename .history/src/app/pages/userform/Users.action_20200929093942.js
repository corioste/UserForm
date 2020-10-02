import { GET_USER, CREATE_USER, UPDATE_USER, DELETE_USER } from "./Users.types"
import { UserServiceImpl } from "../../../domain/usecases/UserService"
import { UserLocalStorageRepositoryImpl } from "../../../data/repositories/UserLocalStorageRepository"


export const getUser = () => {
    const todoRepo = new TodoLocalStorageRepositoryImpl()
    const todoService = new TodoServiceImpl(todoRepo)
    const todos = todoService.GetTodo()
    return {
        type: GET_USER,
        payload: todos,
    }
}

export const createUser = (data) => {
    const todoRepo = new TodoLocalStorageRepositoryImpl()
    const todoService = new TodoServiceImpl(todoRepo)
    const todos = todoService.CreateTodo(data)

    return {
        type: CREATE_USER,
        payload: todos,
    }
}

export const updateUser = (data) => {
    const todoRepo = new TodoLocalStorageRepositoryImpl()
    const todoService = new TodoServiceImpl(todoRepo)
    const todos = todoService.UpdateTodo(data)

    return {
        type: UPDATE_USER,
        payload: todos,
    }
}

export const deleteTodo = (data) => {
    const todoRepo = new TodoLocalStorageRepositoryImpl()
    const todoService = new TodoServiceImpl(todoRepo)
    const todos = todoService.DeleteTodo(data)

    return {
        type: DELETE_USER,
        payload: todos,
    }
}
