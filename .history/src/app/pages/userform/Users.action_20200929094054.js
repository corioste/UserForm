import { GET_USER, CREATE_USER, UPDATE_USER, DELETE_USER } from "./Users.types"
import { UserServiceImpl } from "../../../domain/usecases/UserService"
import { UserLocalStorageRepositoryImpl } from "../../../data/repositories/UserLocalStorageRepository"


export const getUser = () => {
    const userRepo = new UserLocalStorageRepositoryImpl()
    const userService = new UserServiceImpl(userRepo)
    const users = userService.GetTodo()
    return {
        type: GET_USER,
        payload: users,
    }
}

export const createUser = (data) => {
    const todoRepo = new UserLocalStorageRepositoryImpl()
    const todoService = new UserServiceImpl(todoRepo)
    const todos = todoService.CreateTodo(data)

    return {
        type: CREATE_USER,
        payload: todos,
    }
}

export const updateUser = (data) => {
    const todoRepo = new UserLocalStorageRepositoryImpl()
    const todoService = new UserServiceImpl(todoRepo)
    const todos = todoService.UpdateTodo(data)

    return {
        type: UPDATE_USER,
        payload: todos,
    }
}

export const deleteTodo = (data) => {
    const todoRepo = new UserLocalStorageRepositoryImpl()
    const todoService = new UserServiceImpl(todoRepo)
    const todos = todoService.DeleteTodo(data)

    return {
        type: DELETE_USER,
        payload: todos,
    }
}
