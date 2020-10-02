import { GET_USER, CREATE_USER, UPDATE_USER, DELETE_USER } from "./Users.types"

const initialState = {
    userList: [],
}

function userList(state = initialState, action = null) {
    switch (action.type) {
        case GET_USER:
        case CREATE_USER:
        case UPDATE_USER:
        case DELETE_USER:
            console.log(action.type)
            return {
                ...state,
                userList: action.payload,
            }
        case UPDATE_USER:

        default:
            return state
    }
}

export default userList
