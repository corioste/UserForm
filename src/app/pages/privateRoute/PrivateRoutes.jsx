import React, { userEffect } from "react"
import 'antd/dist/antd.css';
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { Layout } from 'antd';

import UserList from '../userform/UserList';
import SideNav from '../userform/SideNav';
import UserForm from '../userform/UserForm';
import Report from '../report/Report';



const PrivateRoutes = ({isLoggedIn}) => {
    return (
        isLoggedIn ?
        <div>
            <Route path="/" exact component={UserList} />
            <Route path="/form" exact component={UserForm} />
            <Route path="/Report" exact component={Report} />
        </div> 
        :  <Redirect to={"/login"} />
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
    (PrivateRoutes);



