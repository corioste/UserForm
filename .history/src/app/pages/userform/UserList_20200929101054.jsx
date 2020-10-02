import React, { Component } from 'react';
import { connect } from "react-redux";
import { Layout,Table } from 'antd';
import { MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons';

import { getUser,createUser,updateUser,deletUser } from "./Users.action";


const { Header, Content} = Layout;


class UserList extends Component {

    constructor(props){
        super(props)
        this.state = {
            collapse: false
        }
    }

    handleToggle = (event) => {
        event.preventDefault();
        this.setState({
            collapse: !this.state.collapse
        });
    }

    render(){
        return (
            <Header style={{marginBottom: '100px'}}>
                <Content>
                    <Table />
                </Content>
            </Header>
        );
    }
    
}

const mapStateToProps = (state) => {
    return state
}



export default connect(mapStateToProps, { getUser,createUser,updateUser,deletUser })(UserList);

