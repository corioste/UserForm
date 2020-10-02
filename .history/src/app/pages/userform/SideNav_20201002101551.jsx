import React from 'react';
import { Menu } from 'antd';
import {
    UserOutlined,
  } from '@ant-design/icons';
import {useHistory}  from 'react-router';


const SideNav = () => {
    const history = useHistory();

    const handleUserClick = () => {
        history.push('/');
    }

    const handleVideosClick = () => {
        history.push('/report');
    }
    const handleSignOut = () => {
        history.push('/report');
    }
    const handleChangePassword = () => {
        history.push('/report');
    }

  return (
      <div style={{backgrounColor: "#001529"}}>
        <div style={{height: "32px", margin: "16px"}}></div>
            <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
                <Menu.Item key="1" onClick={handleUserClick}>
                    <span>User</span>
                </Menu.Item>
                <Menu.Item key="2" onClick={handleVideosClick}>
                    <span>Report</span>
                </Menu.Item>
                <Menu.Item key="3" onClick={handleSignOut}>
                    <span>Sign Out</span>
                </Menu.Item>
                <Menu.Item key="4" >
                    <span>Change Password</span>
                </Menu.Item>
            </Menu>
        </div>
  );
}

export default SideNav;
