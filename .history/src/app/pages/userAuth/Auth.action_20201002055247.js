import { REQUEST_LOGIN, REQUEST_LOGIN_SUCCESS,REQUEST_LOGIN_FAILED } from "./Auth.type"
import { LoginServiceImpl } from "../../../domain/usecases/LoginService"
import { LoginRepositoryImpl } from "../../../data/repositories/LoginFirebaseRepository"



export const getReport = data => async (dispatch) => {
    dispatch({ type: REQUEST_LOGIN })
    try {
        const loginRepo = new LoginRepositoryImpl()
        const loginService = new LoginServiceImpl(loginRepo)
        const login = await loginService.

       
        dispatch({type: REQUEST_LOGIN_SUCCESS,payload: login})
    } catch (error) {
        dispatch({
            type: GET_REPORT,
            payload: error,
        })
    }
}
