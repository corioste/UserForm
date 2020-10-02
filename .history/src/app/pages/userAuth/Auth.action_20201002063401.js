import { REQUEST_LOGIN, REQUEST_LOGIN_SUCCESS,REQUEST_LOGIN_FAILED } from "./Auth.type"
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
