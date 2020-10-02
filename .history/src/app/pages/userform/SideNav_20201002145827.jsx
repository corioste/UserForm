import React,{useState,userEffect} from 'react';
import { connect } from "react-redux";
import { Menu,Modal,Input, message} from 'antd';

import { logout, changePassword } from "../userAuth/Auth.action";
import {  LockOutlined } from '@ant-design/icons';
import { useHistory } from 'react-router';


const SideNav = ({ showMessage, message, logout, changePassword }) => {

    const [visible,setVisible] = useState(false)

    const [newPassword,setNewPassword] = useState("")

    const [oldPassword,setOldPassword] = useState("")

    const history = useHistory();



    const handleUserClick = () => {
        history.push('/');
    }

    const handleReportClick = () => {
        history.push('/report');
    }
    const handleSignOut = () => {
        logout()
    }
    const handleChangePassword = () => {
        setVisible(true)
    }

    const handleCancel = e => {
        setVisible(false)
    };

    const handleOldPassChange = (event) => {
        setOldPassword(event.target.value)
    }
    const handleNewPassChange = (event) => {
        setNewPassword(event.target.value)
    }

    const handleOk = e => {
        var cred = {newPassword,oldPassword}
        changePassword(cred)
        setVisible(false)
    }
        

    return (
        <div style={{ backgrounColor: "#001529" }}>
             <div style={{color: 'white', padding:'8px'}}>{showMessage}</div>
            <div style={{ height: "32px", margin: "16px" }}></div>
            <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
                <Menu.Item key="1" onClick={handleUserClick}>
                    <span>User</span>
                </Menu.Item>
                <Menu.Item key="2" onClick={handleReportClick}>
                    <span>Report</span>
                </Menu.Item>
                <Menu.Item key="3" onClick={handleSignOut}>
                    <span>Sign Out</span>
                </Menu.Item>
                <Menu.Item key="4" onClick={handleChangePassword}>
                    <span>Change Password</span>
                </Menu.Item>
            </Menu>


            <Modal
                title="Change Password"
                visible={visible}
                onOk={handleOk}
                onCancel={handleCancel}
            >

                <Input
                    onChange={handleNewPassChange}
                    prefix={<LockOutlined className="site-form-item-icon" />}
                    type="password"
                    placeholder="New Password"
                />
                <div style={{padding:'8px'}}></div>
                <Input
                    onChange={handleOldPassChange}
                    prefix={<LockOutlined className="site-form-item-icon" />}
                    type="password"
                    placeholder="Current Password"
                />

            </Modal>
            <Modal
                title="Message"
                visible={messageShow}
                onOk={handleOk}
                onCancel={handleCancel}
            >
              

            </Modal>
        </div>
    );
}

const mapStateToProps = (state) => {
    
    return {
        loading: state.AuthReducer.loading,
        userDetails: state.AuthReducer.loginDetails,
        isLoggedIn: state.AuthReducer.isLoggedIn,
        isLoading: state.AuthReducer.loading,
        message: state.AuthReducer.message,
        showMessage: state.AuthReducer.showMessage

    }
}

const mapDispatchToProps = dispatch => {

    return {
        changePassword: (data) => dispatch(changePassword(data)),
        logout: () => dispatch(logout)
    }

};



export default connect(
    mapStateToProps,mapDispatchToProps)
    (SideNav);
