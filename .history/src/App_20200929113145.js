import React from "react"
import { Provider } from "react-redux"
import { createStore, combineReducers, applyMiddleware } from "redux"
import thunk from "redux-thunk"
import 'antd/dist/antd.css';
import {BrowserRouter, Route} from 'react-router-dom';

import UserList from "./app/pages/userform/UserList"
import UserReducer from "./app/pages/userform/Users.reducers"

// Setup Redux store with Thunks
const reducers = combineReducers({ UserReducer })
const store = createStore(reducers, applyMiddleware(thunk))

const App = () => (
    <BrowserRouter>
    <Provider store={store}>
        
            <Route path = "/" exact component={UserList} />
            <Route path = "/form" exact component={UserForm} />
      
    </Provider>
)

export default App
