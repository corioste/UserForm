import React, { Component, useEffect, useState } from 'react';
import { connect } from "react-redux";
import { Table, Button, Row, Col } from 'antd';
import { useHistory } from 'react-router';
import { firestoreConnect } from 'react-redux-firebase'



import { getReport } from "./Report.action";


class UserReport {

  render(){
    return (
      <div>
        <Row gutter={[40, 0]}>
          <Col span={24}>
            {/* <Button onClick={() => { console.log(myState) }}>BUTTON</Button> */}
            <Table columns={columns} dataSource={reportList}  pagination={{ position: ["bottomCenter"], pageSize: 5 }} scroll={{ x: 500 }}></Table>
          </Col>
        </Row>
      </div>
    )
  }
}


const UserReport = ({ reportList, getReport }) => {


  const columns = [
    {
      title: 'Total Males',
      dataIndex: 'male',
      key: 'male'
    },
    {
      title: 'Total Female',
      dataIndex: 'female',
      key: 'female'
    },
    {
      title: 'Total Others',
      dataIndex: 'other',
      key: 'other'
    }
  ];

  useEffect(() => {
    getReport()
    
  }, []);


  




}

const mapStateToProps = (state) => {
  console.log(state)
  return { reportList: state.ReportReducer.reportList }
}
const mapDispatchToProps = dispatch => {
  return {
    getReport: () => dispatch(getReport)
  }
};




export default connect(
  mapStateToProps,
  mapDispatchToProps)
  (UserReport);

