import React, { Component } from 'react';
import { connect } from "react-redux";
import { Layout, Table, Button, Col } from 'antd';
import { columns } from './layouts/tableColumns'

import { getUser, createUser, updateUser, deletUser } from "./Users.action";


const { Header, Content } = Layout;


class UserForm extends Component {


    render() {
        return (
            <div>
               
            </div>
        );
    }


}

const mapStateToProps = (state) => {
    return state
}



export default connect(mapStateToProps, {createUser, updateUser, deletUser })(UserForm);

