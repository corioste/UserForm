import { GET_REPORT } from "./Report.types"

const initialState = {
    reportList: []
}

function reportList(state = initialState, action = null) {
    switch (action.type) {
        case GET_REPORT:
            console.log(action.type)
            return {
                ...state,
                reportList: action.payload,
            }

        default:
            return state
    }
}

export default reportList
