import { GET_REPORT } from "./Report.types"
import { ReportServiceImp } from "../../../domain/usecases/ReportService"
import { ReportFirebaseRepositoryImpl } from "../../../data/repositories/ReportFIrebaseRepository"



export const getReport = async (dispatch) => {
    dispatch({ type: GET_REPORT })
    try {
        const reportRepo = new ReportFirebaseRepositoryImpl()
        const reportService = new ReportServiceImp(reportRepo)
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
