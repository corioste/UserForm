import { REQUEST_LOGIN, REQUEST_LOGIN_SUCCESS, REQUEST_CHANGE_PASSWORD_SUCCESS } from "./Auth.type"

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
