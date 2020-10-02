import React, { userEffect } from "react"
import 'antd/dist/antd.css';
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import { Layout } from 'antd';

import UserList from '../userform/UserList';
import SideNav from '../userform/SideNav';
import UserForm from '../userform/UserForm';
import Report from '../report/Report';


const { Header, Sider, Content } = Layout;



const PrivateRoutes = () => {
    return (
        <div>
            <Sider>
                <SideNav />
            </Sider>
            
            
        </div>
    )
}

export default PrivateRoutes




