import { REQUEST_LOGIN, REQUEST_LOGIN_SUCCESS,REQUEST_LOGIN_FAILED } from "./Auth.type"
import { LoginServiceImp } from "../../../domain/usecases/LoginService"
import { LoginRepositoryImpl } from "../../../data/repositories/LoginFirebaseRepository"



export const getReport = data => async (dispatch) => {
    dispatch({ type: GET_REPORT })
    try {
        const loginRepo = new LoginRepositoryImpl()
        const loginService = new LoginServiceImp(loginRepo)
        const report = await reportService.GetReport()
        console.log(report)
        dispatch({
            type: GET_REPORT,
            payload: report,
        })
    } catch (error) {
        dispatch({
            type: GET_REPORT,
            payload: error,
        })
    }
}
