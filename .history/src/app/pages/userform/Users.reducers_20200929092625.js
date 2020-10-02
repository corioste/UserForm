import { GET_USER, CREATE_USER, UPDATE_USER, DELETE_USER } from "./Users.types"

const initialState = {
    todos: [],
}

function todos(state = initialState, action = null) {
    switch (action.type) {
        case READ_TODO:
        case CREATE_TODO:
        case DELETE_TODO:
        case UPDATE_TODO:
            console.log(action.type)
            return {
                ...state,
                todos: action.payload,
            }

        default:
            return state
    }
}

export default todos
