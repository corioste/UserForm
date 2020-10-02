import React, { userEffect } from "react"
import 'antd/dist/antd.css';
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import { Layout } from 'antd';

import SideNav from '../userform/SideNav';



const { Header, Sider, Content } = Layout;



const NavShow = ({isLoggedIn}) => {
    return (
       
                <Sider>
                    <SideNav />
                </Sider>
           
        
    )
}
const mapStateToProps = (state) => {
    console.log(state)
    return { 
        isLoggedIn: state.AuthReducer.isLoggedIn,
    }
}

export default connect(
    mapStateToProps)
    (NavShow);



