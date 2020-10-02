import { GET_REPORT } from "./Users.types"
import { UserServiceImpl } from "../../../domain/usecases/UserService"
import { UserLocalStorageRepositoryImpl } from "../../../data/repositories/UserFirebaseRepository"



export const getUser = async (dispatch) => {
    dispatch({ type: GET_USER })
    try {
        const userRepo = new UserLocalStorageRepositoryImpl()
        const userService = new UserServiceImpl(userRepo)
        const users = await userService.GetUser()
        console.log(users)
        dispatch({
            type: GET_USER,
            payload: users,
        })
    } catch (error) {
        dispatch({
            type: GET_USER,
            payload: error,
        })
    }
}
