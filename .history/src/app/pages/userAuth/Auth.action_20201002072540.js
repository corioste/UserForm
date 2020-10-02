import { REQUEST_LOGIN, REQUEST_LOGIN_SUCCESS,REQUEST_LOGIN_FAILED, REQUEST_REGISTER,REQUEST_REGISTER_FAILED,REQUEST_REGISTER_SUCCESS } from "./Auth.type"
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
    export const loggedUser = data => async (dispatch) => {
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
