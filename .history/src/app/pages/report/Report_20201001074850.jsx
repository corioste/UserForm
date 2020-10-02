import React, { Component, useEffect, useState } from 'react';
import { connect } from "react-redux";
import { Table, Button, Row, Col } from 'antd';
import { useHistory } from 'react-router';
import { firestoreConnect } from 'react-redux-firebase'



import { getReport } from "./Report.action";


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
class UserReport extends Component {

  componentDidMount() {
    this.interval = setInterval(() => this.setState({ time: Date.now() }), 1000);
  }
  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return (
      <div>
        <Row gutter={[40, 0]}>
          <Col span={24}>
            {/* <Button onClick={() => { console.log(myState) }}>BUTTON</Button> */}
            <Table columns={columns}  pagination={{ position: ["bottomCenter"], pageSize: 5 }} scroll={{ x: 500 }}></Table>
          </Col>
        </Row>
      </div>
    )
  }
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

