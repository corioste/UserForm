import React from "react"
import { Provider } from "react-redux"
import { createStore, combineReducers, applyMiddleware } from "redux"
import thunk from "redux-thunk"
import 'antd/dist/antd.css';
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import { Layout } from 'antd';

import UserList from "./app/pages/userform/UserList"
import UserForm from "./app/pages/userform/UserForm"
import SideNav from './SideNav'
import UserReducer from "./app/pages/userform/Users.reducers"

// Setup Redux store with Thunks
const reducers = combineReducers({ UserReducer })
const store = createStore(reducers, applyMiddleware(thunk))
const { Header, Content } = Layout;
const App = () => (

    <Provider store={store}>
        <Router>
            <Layout>
                <Sider trigger={null} collapsible collapsed={collapse}>
                    <SideNav />
                </Sider>
                <Layout>
                    <Header className="siteLayoutBackground" style={{ padding: 0, background: "#001529" }}>
                        {React.createElement(collapse ? MenuUnfoldOutlined : MenuFoldOutlined, {
                            className: 'trigger',
                            onClick: handleToggle,
                            style: { color: "#fff" }
                        })}
                    </Header>
                    <Content style={{ margin: '24px 16px', padding: 24, minHeight: "calc(100vh - 114px)", background: "#fff" }}>
                        <Switch>
                            <Route path="/" exact component={UserList} />
                            <Route path="/form" exact component={UserForm} />
                        </Switch>
                    </Content>
                </Layout>
            </Layout>
        </Router>
    </Provider>


)

export default App




