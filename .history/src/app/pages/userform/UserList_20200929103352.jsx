import React, { Component } from 'react';
import { connect } from "react-redux";
import { Layout, Table, Button } from 'antd';
import { columns } from './layouts/tableColumns'

import { getUser, createUser, updateUser, deletUser } from "./Users.action";


const { Header, Content } = Layout;


class UserList extends Component {

    constructor(props) {
        super(props)

        this.state = {
            collapse: false
        }

        this.props.getUser()
        console.log(this.state)
    }

    handleToggle = (event) => {
        event.preventDefault();
        this.setState({
            collapse: !this.state.collapse
        });
    }

    render() {
        return (
            <div>
                <Header></Header>
                <Col span={6}>
                    <Button onClick={handleClick} block>Add User</Button>
                </Col>
                <Table columns={columns}></Table>
            </div>
        );
    }


}

const mapStateToProps = (state) => {
    console.log(state)
    return state
}



export default connect(mapStateToProps, { getUser, createUser, updateUser, deletUser })(UserList);

