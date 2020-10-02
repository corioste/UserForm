import React, { Component, useEffect, useState } from 'react';
import { connect } from "react-redux";
import { Table, Button,Row, Col } from 'antd';
import { useHistory } from 'react-router';


import { getUser, deletUser, selectUser, resetSelectUser } from "./Users.action";




const UserReport = ({ deletUser, selectUser, selectedUser, getUser, userList, resetSelectUser }) => {

  const columns = [
    {
      title: 'Total Males',
      dataIndex: 'total_male',
      key: 'total_male'
    },
    {
      title: 'Total Female',
      dataIndex: 'total_female',
      key: 'total_female'
    },
    {
      title: 'Total Others',
      dataIndex: 'total_others',
      key: 'total_others'
    }
  ];



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

