import React, { Component } from 'react';
import { connect } from "react-redux";
import { Layout, Table, Button, Col } from 'antd';



import { createUser, updateUser, deletUser } from "./Users.action";


class UserForm extends Component {


    render() {
        return (
            <div>
               page two
            </div>
        );
    }


}

const mapStateToProps = (state) => {
    return state
}



export default connect(mapStateToProps, {createUser, updateUser, deletUser })(UserForm);

