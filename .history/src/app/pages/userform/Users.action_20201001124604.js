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

export const createUser = (data) => async (dispatch) => {

    dispatch({ type: CREATE_USER })
    try {
        const userRepo = new UserLocalStorageRepositoryImpl()
        const userService = new UserServiceImpl(userRepo)
        const users = userService.CreateUser(data)
        dispatch({
            type: CREATE_USER,
            payload: users,
        })
    } catch (error) {
        dispatch({
            type: CREATE_USER,
            payload: error,
        })
    }


    dispatch({
        type: CREATE_USER,
        payload: users,
    })
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

export const deletUser = (data) => async (dispatch) => {
    dispatch({ type: DELETE_USER, payload: [] })
    const userRepo = new UserLocalStorageRepositoryImpl()
    const userService = new UserServiceImpl(userRepo)
    const users = userService.DeleteUser(data)

    dispatch({ type: DELETE_USER, payload: users }
    )
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

    dispatch({
        type: SELECT_USER,
        payload: user,
    })
}

