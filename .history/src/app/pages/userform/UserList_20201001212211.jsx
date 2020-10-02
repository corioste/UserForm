import React, { Component, useEffect, useState } from 'react';
import { connect } from "react-redux";
import { Table, Button,Row, Col, Image } from 'antd';
import { useHistory } from 'react-router';


import { getUser, deletUser, selectUser, resetSelectUser } from "./Users.action";




const UserList = ({ deletUser, selectUser, selectedUser, getUser, userList, resetSelectUser }) => {

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
      title: 'Profile Image',
      dataIndex: 'imageURL',
      key: 'imageURL',
      render: (text, record) => (
        <div>
          <Image width={80} fallback={record.imageURL} src="error"/>
        </div>
      ),
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
      render: (text, record) => (
        <div>
          <Button onClick={() => { handleUpdateBtn(record.id, record.fullName, record.email, record.dateOfBirth, record.gender, record.imageURL) }} type="primary">Update</Button>{" "}
          <Button onClick={() => { handleDeleteBtn(record.id, userList) }} type="danger">Delete</Button>
        </div>
      ),
    }
  ];

  const handleDeleteBtn = (id, userList) => {
    var data = { id: id, userList }
    deletUser(data)

  }
  const handleUpdateBtn = (id, fullname, email, dateOfBirth, gender, imageURL) => {
    
    var data = {
      id: id,
      fullName: fullname,
      dateOfBirth: dateOfBirth,
      gender: gender,
      email: email,
      imageURL: imageURL
    }

    selectUser(data)

    history.push('/form')

  }


  useEffect(() => {
    console.log(userList)
    try{
      getUser()
    }
    catch(e){}
    resetSelectUser()

  }, []);

  return (
    <div>

      <Row gutter={[40, 0]}>
        <Col span={24}>
          <Button onClick={handleClick} block >Add User</Button>
          <Table columns={columns} dataSource={userList} pagination={{ position: ["bottomCenter"],pageSize: 5 }} scroll={{ x: 500 }}></Table>
        </Col>
      </Row>
    </div>
  )




}

const mapStateToProps = (state) => {
  return { userList: state.UserReducer.userList, selectedUser: state }
}
const mapDispatchToProps = dispatch => {
  return {
    getUser: () => dispatch(getUser),
    deletUser: id => dispatch(deletUser(id)),
    resetSelectUser: () => dispatch(resetSelectUser),
    selectUser: (data) => dispatch(selectUser(data))
  }
};




export default connect(
  mapStateToProps,
  mapDispatchToProps)
  (UserList);

