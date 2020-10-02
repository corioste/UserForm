import React, { Component } from 'react';
import { connect } from "react-redux";
import { Form, Input, Button, Checkbox, Modal, Layout, Spin } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { login, register, loggedUser } from "./Auth.action";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";



class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {
            createVisible: false,
            isVisible: false,
            registerUsername: "",
            registerPassword: "",

        }
        var history;
        this.updateInputEmail = this.updateInputEmail.bind(this);
        this.updateInputPassword = this.updateInputPassword.bind(this);

    }


    componentDidMount() {
        console.log(this.props.loginStatus)
        this.props.loggedUser()
        console.log(this.props.loading)
        console.log(this.props.data)
    }

    componentDidUpdate() {

        if (this.props.isLoggedIn) {

        }
    }

    updateInputEmail(event) {
        this.setState({
            registerUsername: event.target.value
        })
    }
    updateInputPassword(event) {
        this.setState({
            registerPassword: event.target.value
        })
    }


    onFinish = values => {
        console.log(values)
        console.log(this.props)
        this.props.login({ email: values.username, password: values.password })
    };

    register = e => {
        console.log(this.state.registerUsername);
        console.log(this.state.registerPassword);
        this.setState({
            createVisible: false,
        });
        this.props.register({ email: this.state.registerUsername, password: this.state.registerPassword })
    };

    handleCancel = e => {
        console.log(e);
        this.setState({
            visible: false,
        });
    };
    render() {
        return (
                <Spin spinning={this.props.isLoading}>
                    
                </Spin>
            
                // this.props.isLoggedIn ?  <Redirect to={"/"} /> :
                
            
        );
    }
}
const mapStateToProps = (state) => {
    return {
        loading: state.AuthReducer.loading,
        userDetails: state.AuthReducer.loginDetails,
        isLoggedIn: state.AuthReducer.isLoggedIn,
        isLoading: state.AuthReducer.loading,
    }
}
const mapDispatchToProps = dispatch => {

    return {
        login: (data) => dispatch(login(data)),
        register: (data) => dispatch(register(data)),
        loggedUser: (data) => dispatch(loggedUser(data))
    }

};

export default connect(
    mapStateToProps,
    mapDispatchToProps)
    (Login);