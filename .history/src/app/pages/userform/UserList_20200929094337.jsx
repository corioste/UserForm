import React, { Component } from 'react';
import { connect } from "react-redux";
import { loadTodo,createTodo,deleteTodo,updateTodo } from "./Todo.action";


class TodoList extends Component {

    
    
}

const mapStateToProps = (state) => {
    return state
}



export default connect(mapStateToProps, { loadTodo,createTodo,deleteTodo,updateTodo })(TodoList);

