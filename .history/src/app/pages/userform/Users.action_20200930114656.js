import { GET_USER, CREATE_USER, UPDATE_USER, DELETE_USER, SELECT_USER } from "./Users.types"
import { UserServiceImpl } from "../../../domain/usecases/UserService"
import { UserLocalStorageRepositoryImpl } from "../../../data/repositories/UserFirebaseRepository"



export const getUser = async (dispatch) => {
    dispatch({ type: GET_USER })
    try {
        const userRepo = new UserLocalStorageRepositoryImpl()
        const userService = new UserServiceImpl(userRepo)
        const users = await userService.GetUser()
        console.log(users)
        dispatch({
            type: GET_USER,
            payload: users,
        })
    } catch (error) {
        dispatch({
            type: GET_USER,
            payload: error,
        })
    }
}

export const createUser = async (data) => {

    const userRepo = new UserLocalStorageRepositoryImpl()
    const userService = new UserServiceImpl(userRepo)
    const users = await userService.CreateUser(data)
    console.log(users)
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

export const deletUser = async (data) => {
    console.log("DELETING")
    const userRepo = new UserLocalStorageRepositoryImpl()
    const userService = new UserServiceImpl(userRepo)
    await userService.DeleteUser(data)

    console.log("DONE")

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

export const resetSelectUser = (dispatch) => {

    var user = []
    console.log()
    dispatch({
        type: SELECT_USER,
        payload: user,
    })
}

