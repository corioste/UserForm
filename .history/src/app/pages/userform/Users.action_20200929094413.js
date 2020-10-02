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
   
    const userRepo = new UserLocalStorageRepositoryImpl()
    const userService = new UserServiceImpl(userRepo)
    const users = userService.CreateUser(data)

    return {
        type: CREATE_USER,
        payload: todos,
    }
}

export const updateUser = (data) => {
    
    const userRepo = new UserLocalStorageRepositoryImpl()
    const userService = new UserServiceImpl(userRepo)
    const users = userService.UpdateUser(data)

    return {
        type: UPDATE_USER,
        payload: todos,
    }
}

export const deletUser = (data) => {
    
    const userRepo = new UserLocalStorageRepositoryImpl()
    const userService = new UserServiceImpl(userRepo)
    const users = userService.DeleteUser(data)

    return {
        type: DELETE_USER,
        payload: todos,
    }
}
