import { GET_USER, CREATE_USER, UPDATE_USER, DELETE_USER , SELECT_USER} from "./Users.types"

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
        case UPDATE_USER:
        case DELETE_USER:
            return Object.assign({}, state, {
                userList: state.userList.concat(action.payload),
              
            })
            
        case SELECT_USER:
            console.log(action.type)
            console.log(action)
            console.log(action)
            return {
                ...state,
                selectedUser: action.payload
            }

        default:
            return state
    }
}

export default userList
