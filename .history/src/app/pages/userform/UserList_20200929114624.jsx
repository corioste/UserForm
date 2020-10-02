import React, { Component } from 'react';
import { connect } from "react-redux";
import { Layout, Table, Button, Col } from 'antd';
import { columns } from './layouts/tableColumns'
import { useHistory } from 'react-router';


import { getUser, createUser, updateUser, deletUser } from "./Users.action";


const UserList = () => {

    const handleClick = () => {
        history.push('/form')
    }

    return (
        <div>
            <Button onClick={this.handleClick} block >Add User</Button>

            <Table columns={columns}></Table>
        </div>
    )

    


}

const mapStateToProps = (state) => {
    return state
}



export default connect(mapStateToProps, { getUser, createUser, updateUser, deletUser })(UserList);

