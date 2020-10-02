import React, { userEffect } from "react"
import 'antd/dist/antd.css';
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";

import UserList from "./app/pages/userform/UserList"
import Report from "./app/pages/report/Report"
import UserForm from "./app/pages/userform/UserForm"
import SideNav from './app/pages/userform/SideNav'




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




