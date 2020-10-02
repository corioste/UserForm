import React, { Component } from 'react';
import { connect } from "react-redux";

import { createUser, updateUser, deletUser } from "./Users.action";

const mapStateToProps = (state) => {
    return state
}



export default connect(mapStateToProps, { createUser, updateUser, deletUser })(UserForm);

