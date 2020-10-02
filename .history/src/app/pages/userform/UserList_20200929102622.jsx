import React, { Component } from 'react';
import { connect } from "react-redux";
import { Layout,Table } from 'antd';
import { columns } from './layouts/tableColumns'

import { getUser,createUser,updateUser,deletUser } from "./Users.action";


const { Header, Content} = Layout;


class UserList extends Component {

    constructor(props){
        super(props)
        console.log(this.props.state)
        this.state = {
            collapse: false
        }
    }

    handleToggle = (event) => {
        event.preventDefault();
        this.setState({
            collapse: !this.state.collapse
        });
    }

    render(){
        return (
            <div>
                <Header></Header>
                <Table columns={columns}></Table>
            </div>
        );
    }

    
}

const mapStateToProps = (state) => {
    console.log(state)
    return state
}



export default connect(mapStateToProps, { getUser,createUser,updateUser,deletUser })(UserList);

