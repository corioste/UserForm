import { REQUEST_LOGIN, REQUEST_LOGIN_SUCCESS, REQUEST_LOGIN_FAILED, REQUEST_REGISTER, REQUEST_REGISTER_SUCCESS,REQUEST_REGISTER_FAILED } from "./Auth.type"

const initialState = {
    loading: false,
    login: []
}

function login(state = initialState, action = null) {
    switch (action.type) {
        case REQUEST_LOGIN:
            console.log(REQUEST_LOGIN)
            return {
                ...state,
                loading: true,
            }
        case REQUEST_LOGIN_SUCCESS:
            console.log(REQUEST_LOGIN_SUCCESS)
            return {
                ...state,
                login: action.payload,
            }
        case REQUEST_LOGIN_FAILED:
            console.log(REQUEST_LOGIN_FAILED)
            return {
                ...state,
                loading: false,
            }

            case REQUEST_REGISTER:
                console.log(REQUEST_LOGIN)
                return {
                    ...state,
                    loading: true,
                }
            case REQUEST_REGISTER_SUCCESS:
                console.log(REQUEST_LOGIN_SUCCESS)
                return {
                    ...state,
                    login: action.payload,
                }
            case REQUEST_LOGIN_FAILED:
                console.log(REQUEST_REGISTER_FAILED)
                return {
                    ...state,
                    loading: false,
                }

        default:
            return state
    }
}

export default login
