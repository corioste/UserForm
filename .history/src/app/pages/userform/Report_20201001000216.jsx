import React, { Component, useEffect, useState } from 'react';
import { connect } from "react-redux";
import { Table, Button,Row, Col } from 'antd';
import { useHistory } from 'react-router';


import { getUser, deletUser, selectUser, resetSelectUser } from "./Users.action";




const UserReport = ({ deletUser, selectUser, selectedUser, getUser, userList, resetSelectUser }) => {

  const history = useHistory();

  const handleClick = () => {
    history.push("/form")

  }

  const columns = [
    {
      title: 'Total Males',
      dataIndex: 'total_male',
      key: 'total_male'
    },
    {
      title: 'total_female',
      dataIndex: 'total_female',
      key: 'total_female'
    },
    {
      title: 'Other',
      dataIndex: 'dateOfBirth',
      key: 'dateOfBirth'
    }
  ];

  const handleDeleteBtn = (id, userList) => {
    var data = { id: id, userList }
    console.log(data)
    deletUser(data)

  }
  const handleUpdateBtn = (id, name, email, dateOfBirth, gender) => {
    console.log(name)
    var fullname = name.toString().split(/[\s,]+/);

    var data = {
      id: id,
      lastName: fullname[0],
      firstName: fullname[1],
      middleName: fullname[2],
      dateOfBirth: dateOfBirth,
      gender: gender,
      email: email
    }

    selectUser(data)

    history.push('/form')

  }


  useEffect(() => {
    console.log(userList)
    if (userList.length == 0) {
      getUser()
    }
    resetSelectUser()

  }, []);

  return (
    <div>

      <Row gutter={[40, 0]}>
        <Col span={24}>
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
  (UserReport);

