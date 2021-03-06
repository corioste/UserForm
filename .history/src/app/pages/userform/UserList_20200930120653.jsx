import React, { Component,useEffect,useState } from 'react';
import { connect } from "react-redux";
import {  Table, Button } from 'antd';
import { useHistory } from 'react-router';


import { getUser, deletUser , selectUser , resetSelectUser } from "./Users.action";




const UserList = ({deletUser, selectUser,selectedUser, getUser, userList,resetSelectUser}) => {

    const history = useHistory();

    const handleClick = () => {
      history.push("/form")
      
    }

    const columns = [
        {
          title: 'ID',
          dataIndex: 'id',
          key: 'id'
        },
        {
          title: 'Name',
          dataIndex: 'fullName',
          key: 'fullName'
        },
        {
          title: 'Date of Birth',
          dataIndex: 'dateOfBirth',
          key: 'dateOfBirth'
        },
        {
          title: 'Email',
          dataIndex: 'email',
          key: 'email'
        },
        {
          title: 'Age',
          dataIndex: 'age',
          key: 'age'
        },
        {
          title: 'Action',
          dataIndex: 'action',
          render: (text,record) => (
            <div>
              <Button onClick={()=>{updateUserClick(record.id,record.name,record.email,record.dateOfBirth)}} type="primary">Update</Button>
              <Button onClick={()=>{deletUser(record.id)}} type="danger">Delete</Button>
            </div>
          ),
        }
      ]; 

    const deleteUserClick = (id) =>{
        var data = {id:id}
        console.log(data)
        deletUser(data)
       
    }
    const updateUserClick = (id,name,email,dateOfBirth) =>{
        var fullname = name.split(/[\s,]+/);
        var data = {
          id:id,
          lastName: fullname[0],
          firstName: fullname[1],
          middleName: fullname[3],
          dateOfBirth: dateOfBirth
        }
        selectUser(data)
        console.log(selectedUser)
        history.push('/form')
       
    }
    

    useEffect(()=>{
      console.log('I RUN ONCE')
      getUser()
      resetSelectUser()
    
    },[]);

    return (
        <div>
            <Button onClick={handleClick} block >Add User</Button>

            <Table columns={columns} dataSource={userList}></Table>
        </div>
    )

    


}

const mapStateToProps = (state) => {
    return {userList: state.UserReducer.userList,selectedUser:state}
}
const mapDispatchToProps = dispatch => {
  return {
    getUser: () => dispatch(getUser),
    deletUser: id => deletUser(id),
    resetSelectUser: () => dispatch(resetSelectUser),
    selectUser: (data) => dispatch(selectUser(data))
  }
};




export default connect(
  mapStateToProps,
  mapDispatchToProps)
  (UserList);

