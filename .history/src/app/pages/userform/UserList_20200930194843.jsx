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
          title: 'Gender',
          dataIndex: 'gender',
          key: 'gender'
        },
        {
          title: 'Action',
          dataIndex: 'action',
          render: (text,record) => (
            <div>
              <Button onClick={()=>{handleUpdateBtn(record.id,record.fullName,record.email,record.dateOfBirth,record.gender)}} type="primary">Update</Button>
              <Button onClick={()=>{handleDeleteBtn(record.id)}} type="danger">Delete</Button>
            </div>
          ),
        }
      ]; 

    const handleDeleteBtn = (id) =>{
        var data = {id:id}
        console.log(data)
        deletUser(data)
       
    }
    const handleUpdateBtn = (id,name,email,dateOfBirth,gender) =>{
        console.log(name)
        var fullname = name.toString().split(/[\s,]+/);
        
        var data = {
          id:id,
          lastName: fullname[0],
          firstName: fullname[1],
          middleName: fullname[2],
          dateOfBirth: dateOfBirth,
          gender: gender,
          email:email
        }
        
        selectUser(data)
        
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
    deletUser: id => deletUser(id).then(()=>dispatch(getUser)),
    resetSelectUser: () => dispatch(resetSelectUser),
    selectUser: (data) => dispatch(selectUser(data))
  }
};




export default connect(
  mapStateToProps,
  mapDispatchToProps)
  (UserList);

