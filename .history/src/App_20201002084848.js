import React, { userEffect } from "react"
import { Provider } from "react-redux"
import { createStore, combineReducers, applyMiddleware } from "redux"
import thunk from "redux-thunk"
import 'antd/dist/antd.css';
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import { Layout } from 'antd';

import PrivateRoutes from './app/pages/privateRoute/PrivateRoutes'
import Login from './app/pages/userAuth/login'

import UserReducer from "./app/pages/userform/Users.reducers"
import ReportReducer from "./app/pages/report/Report.reducer"
import AuthReducer  from "./app/pages/userAuth/Auth.reducer"


// Setup Redux store with Thunks
const reducers = combineReducers({ UserReducer,ReportReducer, AuthReducer })
const store = createStore(reducers, applyMiddleware(thunk))
const { Header, Sider, Content } = Layout;



const App = () => {
    return (

        <Provider store={store}>
            <Router>
                <Layout>
                    
                    <Layout>
                        <Header className="siteLayoutBackground" style={{color: 'white', padding: 0, background: "#001529" }}>
                            <span style={{marginLeft: '20px'}}>REACT TRAINING</span>
                        </Header>
                        
                        <Content style={{ margin: '24px 16px', padding: 24, minHeight: "calc(100vh - 114px)", background: "#fff" }}>
                            <Switch>
                                <PrivateRoutes />
                                <Route path="/Login" exact component={ Login } />
                            </Switch>
                        </Content>
                    </Layout>
                </Layout>
            </Router>
        </Provider>


    )
}

export default App




