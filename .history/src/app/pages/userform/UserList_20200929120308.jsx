import React, { Component,useEffect,useState } from 'react';
import { connect } from "react-redux";
import { Layout, Table, Button, Col } from 'antd';
import { columns } from './layouts/tableColumns'
import { useHistory } from 'react-router';


import { getUser, createUser, updateUser, deletUser } from "./Users.action";



const UserList = ({ userList , getUser}) => {

    const history = useHistory();

    const handleClick = () => {
        history.push('/form')
    }

    useEffect(()=>{
        getUser()
    },[]);

    return (
        <div>
            <Button onClick={handleClick} block >Add User</Button>

            <Table columns={columns}></Table>
        </div>
    )

    


}

const mapStateToProps = (state) => {
    console.log(state.userReducer)
    return {userList: state }
}



export default connect(mapStateToProps, { getUser, createUser, updateUser, deletUser })(UserList);

