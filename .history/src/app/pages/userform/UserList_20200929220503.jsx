import React, { Component,useEffect,useState } from 'react';
import { connect } from "react-redux";
import { Layout, Table, Button, Col } from 'antd';
import { useHistory } from 'react-router';


import { getUser, deletUser , selectUser } from "./Users.action";




const UserList = ({ userList , getUser , deletUser , selectUser, selectedUser}) => {

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
              <Button onClick={()=>{updateUserClick(record.id)}} type="primary">Update</Button>
              <Button onClick={()=>{deleteUserClick(record.id)}} type="danger">Delete</Button>
            </div>
          ),
        }
      ]; 

    const deleteUserClick = (id) =>{
        var data = {id:id}
        deletUser(data)
    }
    const updateUserClick = (id) =>{
        var data = {id:id}
        selectUser(data)
        history.push('/form')
       
    }
    

    useEffect(()=>{
        console.log(selectedUser)
        getUser()
    },[]);

    return (
        <div>
            <Button onClick={handleClick} block >Add User</Button>

            <Table columns={columns} dataSource={userList}></Table>
        </div>
    )

    


}

const mapStateToProps = (state) => {
    
    return {userList: state.UserReducer.userList,selectedUser:state.UserReducer.selectedUser }
}



export default connect(mapStateToProps, { getUser,deletUser,selectUser })(UserList);

