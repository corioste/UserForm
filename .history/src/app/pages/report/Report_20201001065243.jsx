import React, { Component, useEffect, useState } from 'react';
import { connect } from "react-redux";
import { Table, Button,Row, Col } from 'antd';
import { useHistory } from 'react-router';
import { firestoreConnect } from 'react-redux-firebase'


import { getReport } from "./Users.action";




const UserReport = ({reportList,getReport }) => {

  const columns = [
    {
      title: 'Total Males',
      dataIndex: 'total_male',
      key: 'male'
    },
    {
      title: 'Total Female',
      dataIndex: 'female',
      key: 'total_female'
    },
    {
      title: 'Total Others',
      dataIndex: 'total_others',
      key: 'other'
    }
  ];


  return (
    <div>
      <Row gutter={[40, 0]}>
        <Col span={24}>
            <Button onClick={()=>{console.log(myState)}}>BUTTON</Button>
            <Table columns={columns} dataSource={reportList} pagination={{ position: ["bottomCenter"],pageSize: 5 }} scroll={{ x: 500 }}></Table>
        </Col>
      </Row>
    </div>
  )




}

const mapStateToProps = (state) => {
  return {myState: state}
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

