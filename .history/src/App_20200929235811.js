import React from "react"
import { Provider } from "react-redux"
import { createStore, combineReducers, applyMiddleware } from "redux"
import thunk from "redux-thunk"
import 'antd/dist/antd.css';
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import { Layout } from 'antd';

import UserList from "./app/pages/userform/UserList"
import UserForm from "./app/pages/userform/UserForm"
import UserReducer from "./app/pages/userform/Users.reducers"

// Setup Redux store with Thunks
const reducers = combineReducers({ UserReducer })
const store = createStore(reducers, applyMiddleware(thunk))
const { Header, Content } = Layout;
const App = () => (

    <Provider store={store}>
        <Router>
            <Header >REACT PRACTICE</Header>
            <Content>
                    <Route path="/" exact component={UserList} />
                    <Route path="/form" exact component={UserForm} />   
            </Content>
        </Router>
    </Provider>


)

export default App

