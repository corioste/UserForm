import React, { Component } from 'react';
import { connect } from "react-redux";
import { getUser,createUser,updateUser,deletUser } from "./Todo.action";


class TodoList extends Component {

    
    
}

const mapStateToProps = (state) => {
    return state
}



export default connect(mapStateToProps, { getUser,createUser,updateUser,deletUser })(TodoList);

