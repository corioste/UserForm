import { 
        USER_LOGOUT ,
        REQUEST_LOGIN, 
        REQUEST_LOGIN_SUCCESS,
        REQUEST_LOGIN_FAILED, 
        REQUEST_REGISTER,
        REQUEST_REGISTER_FAILED,
        REQUEST_REGISTER_SUCCESS, 
        REQUEST_LOGGED_USER,
        REQUEST_LOGGED_USER_SUCCESS,
        REQUEST_LOGGED_USER_FAILED 
} from "./Auth.type"

import { LoginServiceImpl } from "../../../domain/usecases/LoginService"
import { LoginRepositoryImpl } from "../../../data/repositories/LoginFirebaseRepository"



export const login = data => async (dispatch) => {
    dispatch({ type: REQUEST_LOGIN })
    try {
        const loginRepo = new LoginRepositoryImpl()
        const loginService = new LoginServiceImpl(loginRepo)
        const login = await loginService.Login(data)

        dispatch({type: REQUEST_LOGIN_SUCCESS,payload: login})

    } catch (error) {
        dispatch({ type: REQUEST_LOGIN_FAILED,payload: error, })
    }
}


export const register = data => async (dispatch) => {
    dispatch({ type: REQUEST_REGISTER })
    try {
        const loginRepo = new LoginRepositoryImpl()
        const loginService = new LoginServiceImpl(loginRepo)
        const login = await loginService.Register(data)

        dispatch({type: REQUEST_REGISTER_SUCCESS,payload: login})

    } catch (error) {
        dispatch({ type: REQUEST_REGISTER_FAILED,payload: error, })
    }
}

export const loggedUser = data => async (dispatch) => {
    dispatch({ type: REQUEST_LOGGED_USER })
    try {
        const loginRepo = new LoginRepositoryImpl()
        const loginService = new LoginServiceImpl(loginRepo)
        const login = await loginService.GetLoggedUser()
        console.log(login)
        dispatch({type: REQUEST_LOGGED_USER_SUCCESS, payload: login})

    } catch (error) {
        dispatch({ type: REQUEST_LOGGED_USER_FAILED,payload: error, })
    }
    
}
export const logout = () => {
    console.log("ACTION")
    const loginRepo = new LoginRepositoryImpl()
    const loginService = new LoginServiceImpl(loginRepo)
    loginService.Logout()
    return {
        type: USER_LOGOUT
    }
}

export const forgotPassword = () => {
    
}
