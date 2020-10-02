import { GET_USER, CREATE_USER, UPDATE_USER, DELETE_USER, SELECT_USER } from "./Users.types"

const initialState = {
    reportList: []
}

function userList(state = initialState, action = null) {
    switch (action.type) {
        case GET_USER:
            return {
                ...state,
                userList: action.payload,
            }

        default:
            return state
    }
}

export default userList
