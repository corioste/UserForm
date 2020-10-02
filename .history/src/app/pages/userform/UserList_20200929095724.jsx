import React, { Component } from 'react';
import { connect } from "react-redux";
import { Layout } from 'antd';
import { MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons';

import { getUser,createUser,updateUser,deletUser } from "./Users.action";


const { Header, Sider, Content} = Layout;


class UserList extends Component {

    constructor(props){
        this.state = {
            collapse: false
        }
    }

    render(){
        return (
            <Header className="siteLayoutBackground" style={{padding: 0, background: "#001529"}}>
                      {React.createElement(this.state.collapse ? MenuUnfoldOutlined : MenuFoldOutlined, {
                          className: 'trigger',
                          onClick: handleToggle,
                          style: {color: "#fff"}
                      })}
            </Header>
        );
    }
    
}

const mapStateToProps = (state) => {
    return state
}



export default connect(mapStateToProps, { getUser,createUser,updateUser,deletUser })(UserList);

