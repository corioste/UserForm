import { 
    USER_LOGOUT, 
    REQUEST_LOGIN, 
    REQUEST_LOGIN_SUCCESS, 
    REQUEST_LOGIN_FAILED, 
    REQUEST_REGISTER, 
    REQUEST_REGISTER_FAILED, 
    REQUEST_REGISTER_SUCCESS, 
    REQUEST_LOGGED_USER, 
    REQUEST_LOGGED_USER_SUCCESS, 
    REQUEST_LOGGED_USER_FAILED 
} from "./Auth.type"

const initialState = {
    loading: false,
    loginDetails: [],
    isLoggedIn: false,
    errorMessage: ""
}

function login(state = initialState, action = null) {
    switch (action.type) {
        case REQUEST_LOGIN:
            console.log(REQUEST_LOGIN)
            return {
                ...state,
                loading: true,
                errorMessage: ""
            }
        case REQUEST_LOGIN_SUCCESS:
            console.log(REQUEST_LOGIN_SUCCESS)
            return {
                ...state,
                loginDetails: action.payload,
                isLoggedIn: true,
                loading: false,
                errorMessage: ""
            }
        case REQUEST_LOGIN_FAILED:
            console.log(REQUEST_LOGIN_FAILED)
            return {
                ...state,
                loading: false,
                errorMessage: "Failed To Login"
            }

        case REQUEST_REGISTER:
            console.log(REQUEST_REGISTER)
            return {
                ...state,
                loading: true,
            }
        case REQUEST_REGISTER_SUCCESS:
            console.log(REQUEST_REGISTER_SUCCESS)
            return {
                ...state,
                loginDetails: action.payload,
                isLoggedIn: true,
                loading: false,
            }
        case REQUEST_REGISTER_FAILED:
            console.log(REQUEST_REGISTER_FAILED)
            return {
                ...state,
                loading: false,
            }

        case REQUEST_LOGGED_USER:
            console.log(REQUEST_LOGGED_USER)
            return {
                ...state,
                loading: true,
            }
        case REQUEST_LOGGED_USER_SUCCESS:
            console.log(REQUEST_LOGGED_USER_SUCCESS)
            return {
                ...state,
                loginDetails: [action.payload.payload],
                isLoggedIn: action.payload.isLoggedIn,
                loading: false,
            }
        case REQUEST_LOGGED_USER_FAILED:
            console.log(REQUEST_LOGGED_USER_FAILED)
            return {
                ...state,
                loading: false,
            }
        case USER_LOGOUT:
            console.log(USER_LOGOUT)
            return {
                ...state,
                isLoggedIn: false,
                loginDetails: [],
            }

        default:
            return state
    }
}

export default login
