import { GET_REPORT } from "./Auth.type"

const initialState = {
    loading: false,
    login: ""
}

function login(state = initialState, action = null) {
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
