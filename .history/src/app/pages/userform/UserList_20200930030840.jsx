import React, { Component,useEffect,useState } from 'react';
import { connect } from "react-redux";
import {  Table, Button } from 'antd';
import { useHistory } from 'react-router';


import { getUser, deletUser , selectUser , resetSelectUser } from "./Users.action";




const UserList = ({selectedUser, getUser , deletUser , selectUser, resetSelectUser}) => {

    const history = useHistory();

    const handleClick = () => {
      console.log(getUser)
    }

    const columns = [
        {
          title: 'ID',
          dataIndex: 'id',
          key: 'id'
        },
        {
          title: 'Name',
          dataIndex: 'fullName'
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
        getUser()
    }
    const updateUserClick = (id) =>{
        var data = {id:id}
        selectUser(data)
        history.push('/form')
       
    }
    

    useEffect(()=>{
    
    
    },[]);

    return (
        <div>
            <Button onClick={handleClick} block >Add User</Button>

            {/* <Table columns={columns} dataSource={userList}></Table> */}
        </div>
    )

    


}

const mapStateToProps = (state) => {
    console.log(state.UserReducer.userList)
    return {selectedUser:state }
}
const mapDispatchToProps = dispatch => ({
  getUser: () => dispatch(getUser)
});




export default connect(mapStateToProps,mapDispatchToProps)(UserList);

