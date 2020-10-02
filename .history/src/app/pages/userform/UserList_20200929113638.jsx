import React, { Component } from 'react';
import { connect } from "react-redux";
import { Layout, Table, Button, Col } from 'antd';
import { columns } from './layouts/tableColumns'
import { useHistory } from 'react-router';


import { getUser, createUser, updateUser, deletUser } from "./Users.action";


const { Header, Content } = Layout;


class UserList extends Component {
    
    constructor(props) {
        super(props)

        this.state = {
            collapse: false
        }

        this.props.getUser()
        console.log(window.location.pathname)
    }

    handleClick = (event) => {
        event.preventDefault();
        const history = useHistory()
    }

    render() {
        return (
            <div>
                <Header></Header>
              
                <Button block >Add User</Button>
                
                <Table columns={columns}></Table>
            </div>
        );
    }


}

const mapStateToProps = (state) => {
    return state
}



export default connect(mapStateToProps, { getUser, createUser, updateUser, deletUser })(UserList);

