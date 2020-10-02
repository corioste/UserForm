import { GET_USER, CREATE_USER, UPDATE_USER, DELETE_USER, SELECT_USER } from "./Users.types"

const initialState = {
    userList: [],
    selectedUser: []
}

function userList(state = initialState, action = null) {
    switch (action.type) {
        case GET_USER:
            return {
                ...state,
                userList: action.payload,
            }
        case CREATE_USER:
            return{
                ...state,
                userList: action.payload
            }
        case UPDATE_USER:
            return {
                ...state,
                userList: [...action.payload]
            }
        case DELETE_USER:
            return {
                ...state,
                userList: [...action.payload]
            }
          

        case SELECT_USER:
            return {
                ...state,
                selectedUser: action.payload
            }

        default:
            return state
    }
}

export default userList
