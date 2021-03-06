import React, { Component, useEffect, useState } from 'react';
import { connect } from "react-redux";
import { Table, Button,Row, Col } from 'antd';
import { useHistory } from 'react-router';
import { firestoreConnect } from 'react-redux-firebase'


import { state getUser, deletUser, selectUser, resetSelectUser } from "./Users.action";




const UserReport = ({reportList }) => {

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
            <Button onClick={()=>{console.log(state)}}/>
          <Table columns={columns} dataSource={reportList} pagination={{ position: ["bottomCenter"],pageSize: 5 }} scroll={{ x: 500 }}></Table>
        </Col>
      </Row>
    </div>
  )




}

const mapStateToProps = (state) => {
  return state
}
const mapDispatchToProps = dispatch => {
  return {
    
  }
};




export default connect(
  mapStateToProps,
  firestoreConnect([
    { collection: 'reports'}
  ]))
  (UserReport);

