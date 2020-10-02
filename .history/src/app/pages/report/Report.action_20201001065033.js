import { GET_REPORT } from "./Report.types"
import { ReportServiceImp } from "../../../domain/usecases/ReportService"
import { ReportFIrebaseRepository } from "../../../data/repositories/ReportFIrebaseRepository"



export const getReport = async (dispatch) => {
    dispatch({ type: GET_REPORT })
    try {
        const reportRepo = new ReportFIrebaseRepository()
        const reportService = new ReportServiceImp(userRepo)
        const report = await userService.GetReport()
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
