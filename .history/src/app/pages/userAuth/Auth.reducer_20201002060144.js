import { REQUEST_LOGIN, REQUEST_LOGIN_SUCCESS, REQUEST_LOGIN_FAILED } from "./Auth.type"

const initialState = {
    loading: false,
    login: []
}

function login(state = initialState, action = null) {
    switch (action.type) {
        case REQUEST_LOGIN:
            return {
                ...state,
                loading: true,
            }
        case REQUEST_LOGIN_SUCCESS:
            return {
                ...state,
                loading: false,
            }
        case REQUEST_LOGIN_FAILED:
            return {
                ...state,
                loading: false,
            }

        default:
            return state
    }
}

export default reportList
