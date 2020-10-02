import { GET_REPORT } from "./Report.types"
import { ReportServiceImp } from "../../../domain/usecases/ReportService"
import { ReportFIrebaseRepository } from "../../../data/repositories/ReportFIrebaseRepository"



export const getReport = async (dispatch) => {
    dispatch({ type: GET_REPORT })
    try {
        const userRepo = new ReportFIrebaseRepository()
        const userService = new ReportServiceImp(userRepo)
        const users = await userService.GetUser()
        console.log(users)
        dispatch({
            type: GET_REPORT,
            payload: users,
        })
    } catch (error) {
        dispatch({
            type: GET_REPORT,
            payload: error,
        })
    }
}
