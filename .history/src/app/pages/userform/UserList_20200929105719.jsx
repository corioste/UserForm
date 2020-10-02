import React, { Component } from 'react';
import { connect } from "react-redux";
import { Layout, Table, Button, Col } from 'antd';
import { columns } from './layouts/tableColumns'
import {useHistory} from 'react-router-dom';

import { getUser, createUser, updateUser, deletUser } from "./Users.action";


const { Header, Content } = Layout;
const history = useHistory();

class UserList extends Component {
    
    constructor(props) {
        super(props)

        this.state = {
            collapse: false
        }

        this.props.getUser()
        console.log(window.location.pathname)
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
              
                <Button onClick={()=>{history.push('form')}} block>Add User</Button>
                
                <Table columns={columns}></Table>
            </div>
        );
    }


}

const mapStateToProps = (state) => {
    return state
}



export default connect(mapStateToProps, { getUser, createUser, updateUser, deletUser })(UserList);

