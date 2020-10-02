import { GET_REPORT } from "./Report.types"

const initialState = {
    reportList: []
}

function userList(state = initialState, action = null) {
    switch (action.type) {
        case GET_REPORT:
            return {
                ...state,
                reportList: action.payload,
            }

        default:
            return state
    }
}

export default userList
