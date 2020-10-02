import React, { Component } from 'react';
import { connect } from "react-redux";
import { Layout } from 'antd';

import { getUser,createUser,updateUser,deletUser } from "./Users.action";


const { Header, Sider, Content} = Layout;


class UserList extends Component {

    render(){
        return <div>HELLO</div>
    }
    
}

const mapStateToProps = (state) => {
    return state
}



export default connect(mapStateToProps, { getUser,createUser,updateUser,deletUser })(UserList);

