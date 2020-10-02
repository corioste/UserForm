import React from "react"
import { Provider } from "react-redux"
import { createStore, combineReducers, applyMiddleware } from "redux"
import thunk from "redux-thunk"

import UserList from "./app/pages/userform/UserList"
import UserReducers from "./app/pages/userform/Users.reducers"

// Setup Redux store with Thunks
const reducers = combineReducers({ Users })
const store = createStore(reducers, applyMiddleware(thunk))

const App = () => (
    <Provider store={store}>
        <UserList />
    </Provider>
)

export default App
