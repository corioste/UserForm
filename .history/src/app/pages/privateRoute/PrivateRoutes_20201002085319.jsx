import React, { userEffect } from "react"
import 'antd/dist/antd.css';
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";

import UserList from '../userform/UserList';
import SideNav from '../userform/SideNav';
import UserForm from '../userform/UserForm';
import Report from '../report/Report';






const PrivateRoutes = () => {
    return (
        <div>
            <SideNav />
            <Route path="/" exact component={UserList} />
            <Route path="/form" exact component={UserForm} />
            <Route path="/Report" exact component={Report} />   
        </div>
    )
}

export default PrivateRoutes




