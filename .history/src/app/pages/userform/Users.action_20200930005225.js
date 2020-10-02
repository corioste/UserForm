import { GET_USER, CREATE_USER, UPDATE_USER, DELETE_USER , SELECT_USER } from "./Users.types"
import { UserServiceImpl } from "../../../domain/usecases/UserService"
import { UserLocalStorageRepositoryImpl } from "../../../data/repositories/UserLocalStorageRepository"


export const getUser = () => {

    const userRepo = new UserLocalStorageRepositoryImpl()
    const userService = new UserServiceImpl(userRepo)
    const users = userService.GetUser()
    console.log(userService)
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
        payload: users,
    }
}

export const updateUser = (data) => {
    
    const userRepo = new UserLocalStorageRepositoryImpl()
    const userService = new UserServiceImpl(userRepo)
    const users = userService.UpdateUser(data)

    return {
        type: UPDATE_USER,
        payload: users,
    }
}

export const deletUser = (data) => {
    
    const userRepo = new UserLocalStorageRepositoryImpl()
    const userService = new UserServiceImpl(userRepo)
    const users = userService.DeleteUser(data)

    return {
        type: DELETE_USER,
        payload: users,
    }
}

export const selectUser = (data) => {
    
    const userRepo = new UserLocalStorageRepositoryImpl()
    const userService = new UserServiceImpl(userRepo)
    const user = userService.SelectUser(data)

    return {
        type: SELECT_USER,
        payload: user,
    }
}

export const resetSelectUser = () => {
  
    var user = []

    return {
        type: SELECT_USER,
        payload: user,
    }
}

