import React, { userEffect } from "react"
import 'antd/dist/antd.css';
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import { Layout } from 'antd';

import SideNav from '../userform/SideNav';



const { Header, Sider, Content } = Layout;



const NavShow = () => {
    return (
       
                <Sider>
                    <SideNav />
                </Sider>
           
        
    )
}

export default connect(
    mapStateToProps)
    (NavShow);



