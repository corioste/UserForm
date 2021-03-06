import React,{useState} from 'react';
import { connect } from "react-redux";
import { Menu,Modal,Input} from 'antd';

import { logout } from "../userAuth/Auth.action";
import {  LockOutlined } from '@ant-design/icons';
import { useHistory } from 'react-router';


const SideNav = ({ logout }) => {

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

    handleCancel = e => {
        setVisible(false)
    };

    handleOk = e => {

    }

    return (
        <div style={{ backgrounColor: "#001529" }}>
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
                onCancel=
            >

                <Input
                    onChange=""
                    prefix={<LockOutlined className="site-form-item-icon" />}
                    type="password"
                    placeholder="New Password"
                />
                <div style={{padding:'8px'}}></div>
                <Input
                    onChange=""
                    prefix={<LockOutlined className="site-form-item-icon" />}
                    type="password"
                    placeholder="Current Password"
                />

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

    }
}


export default connect(
    mapStateToProps, { logout })
    (SideNav);
