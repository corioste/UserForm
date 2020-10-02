import React from "react"
import { Provider } from "react-redux"
import { createStore, combineReducers, applyMiddleware } from "redux"
import thunk from "redux-thunk"

import UserList from "./app/pages/userform/UserList"
import items from "./app/pages/item/Item.reducers"

// Setup Redux store with Thunks
const reducers = combineReducers({ items })
const store = createStore(reducers, applyMiddleware(thunk))

const App = () => (
    <Provider store={store}>
        <ItemList />
    </Provider>
)

export default App
