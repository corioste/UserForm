import React, { userEffect } from "react"
import { Provider } from "react-redux"
import { createStore, combineReducers, applyMiddleware } from "redux"
import thunk from "redux-thunk"
import 'antd/dist/antd.css';
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import { Layout } from 'antd';

import UserList from "./app/pages/userform/UserList"
import Report from "./app/pages/report/Report"
import UserForm from "./app/pages/userform/UserForm"
import SideNav from './app/pages/userform/SideNav'
import Login from './app/pages/userAuth/login'

import UserReducer from "./app/pages/userform/Users.reducers"
import ReportReducer from "./app/pages/report/Report.reducer"
import AuthReducer from "./app/pages/userAuth/Auth.reducer"


// Setup Redux store with Thunks
const reducers = combineReducers({ UserReducer, ReportReducer, AuthReducer })
const store = createStore(reducers, applyMiddleware(thunk))
const { Header, Sider, Content } = Layout;



const PrivateRoutes = () => {
    return (
        <div>
            <SideNav />
            <Route path="/" exact component={UserList} />
            <Route path="/form" exact component={UserForm} />
            <Route path="/Report" exact component={Report} />
            <Redirect to="/" from="/" />
        </div>
    )
}

export default PrivateRoutes




