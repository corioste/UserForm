import React, { useState } from "react"
import { Provider } from "react-redux"
import { createStore, combineReducers, applyMiddleware } from "redux"
import thunk from "redux-thunk"
import 'antd/dist/antd.css';
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import { Layout } from 'antd';

import UserList from "./app/pages/userform/UserList"
import Report from "./app/pages/report/Report"
import UserForm from "./app/pages/userform/UserForm"
import SideNav from './app/pages/userform/SideNav'
import Login from './app/pages/userAuth/login'

import UserReducer from "./app/pages/userform/Users.reducers"
import ReportReducer from "./app/pages/report/Report.reducer"
import {
    MenuUnfoldOutlined,
    MenuFoldOutlined
} from '@ant-design/icons';

// Setup Redux store with Thunks
const reducers = combineReducers({ UserReducer,ReportReducer })
const store = createStore(reducers, applyMiddleware(thunk))
const { Header, Sider, Content } = Layout;



const App = () => {
    const [collapse, setCollapse] = useState(false);
    const handleToggle = (event) => {
        event.preventDefault();
        collapse ? setCollapse(false) : setCollapse(true);
    }
    return (

        <Provider store={store}>
            <Router>
                <Layout>
                    {/* <Sider trigger={null} collapsible collapsed={collapse}>
                        <SideNav />
                    </Sider> */}
                    <Layout>
                        <Header className="siteLayoutBackground" style={{color: 'white', padding: 0, background: "#001529" }}>
                            {REACT TRAINING
                        </Header>
                        
                        <Content style={{ margin: '24px 16px', padding: 24, minHeight: "calc(100vh - 114px)", background: "#fff" }}>
                            <Switch>
                                <Route path="/" exact component={UserList} />
                                <Route path="/form" exact component={UserForm} />
                                <Route path="/Report" exact component={Report} />
                                <Route path="/Login" exact component={ Login } />
                                <Redirect to="/" from="/" />
                            </Switch>
                        </Content>
                    </Layout>
                </Layout>
            </Router>
        </Provider>


    )
}

export default App




