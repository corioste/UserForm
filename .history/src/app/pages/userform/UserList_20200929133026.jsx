import React, { Component,useEffect,useState } from 'react';
import { connect } from "react-redux";
import { Layout, Table, Button, Col } from 'antd';
import { useHistory } from 'react-router';


import { getUser, deletUser , selectUser } from "./Users.action";




const UserList = ({ userList , getUser , deletUser , selectUser}) => {

    const history = useHistory();

    const handleClick = () => {
        history.push('/form')
    }

    const columns = [
        {
          title: 'ID',
          dataIndex: 'id',
          key: 'id'
        },
        {
          title: 'Firstname',
          dataIndex: 'firstName'
        },
        {
          title: 'Middlename',
          dataIndex: 'middleName'
        },
        {
          title: 'Lastname',
          dataIndex: 'lastName'
        },
        {
          title: 'Date of Birth',
          dataIndex: 'dateOfBirth'
        },
        {
          title: 'Email',
          dataIndex: 'email'
        },
        {
          title: 'Age',
          dataIndex: 'age'
        },
        {
          title: 'Action',
          dataIndex: 'action',
          render: (text,record) => (
            <div>
              <Button onClick={(e)=>{console.log(record.id)}} type="primary">Update</Button>
              <Button onClick={()=>{deleteTodoClick(record.id)}} type="danger">Delete</Button>
            </div>
          ),
        }
      ]; 

    const deleteTodoClick = (id) =>{
        var data = {id:id}
        deletUser(data)
    }

    useEffect(()=>{
        getUser()
        var data = {id:697}
        selectUser(data)
    },[]);

    return (
        <div>
            <Button onClick={handleClick} block >Add User</Button>

            <Table columns={columns} dataSource={userList}></Table>
        </div>
    )

    


}

const mapStateToProps = (state) => {
    
    return {userList: state.UserReducer.userList }
}



export default connect(mapStateToProps, { getUser,deletUser,selectUser })(UserList);

