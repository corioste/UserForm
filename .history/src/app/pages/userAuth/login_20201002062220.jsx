import React, { Component } from 'react';
import { connect } from "react-redux";
import { Form, Input, Button, Checkbox, Modal } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { login } from "./Auth.action";



class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {
            visible: false,
            isVisible: false
        }
    }
    componentDidMount(){
        console.log(this.props.loginStatus)
    }

    onFinish = values => {
        console.log(values)
        console.log(this.props)
       this.state.login({email: values.username, password: values.password})
    };

    handleOk = e => {
        console.log(e);
        this.setState({
            visible: false,
        });
    };

    handleCancel = e => {
        console.log(e);
        this.setState({
            visible: false,
        });
    };
    render() {
        return (
            <div>
                <div style={{
                    width: '30%',
                    position: 'absolute', left: '50%', top: '50%',
                    transform: 'translate(-50%, -50%)'
                }}>
                    <Form
                        name="normal_login"
                        className="login-form"
                        initialValues={{ remember: true }}
                        onFinish={this.onFinish}
                    >
                        <Form.Item
                            name="username"
                            rules={[{ required: true, message: 'Please input your Username!' }]}
                        >
                            <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Email" />
                        </Form.Item>
                        <Form.Item
                            name="password"
                            rules={[{ required: true, message: 'Please input your Password!' }]}
                        >
                            <Input
                                prefix={<LockOutlined className="site-form-item-icon" />}
                                type="password"
                                placeholder="Password"
                            />
                        </Form.Item>
                        <Form.Item>
                            <Form.Item name="remember" valuePropName="checked" noStyle>
                                <Checkbox>Remember me</Checkbox>
                            </Form.Item>

                            <Button onClick={() => { this.setState({ visible: true }) }}>Forgot Password</Button>
                        </Form.Item>

                        <Form.Item>
                            <Button block type="primary" htmlType="submit" className="login-form-button">
                                Log in
                        </Button>
                          <div style={{padding: '8px'}}></div>
                        <Button block onClick={() => { this.setState({ isVisible: true }) }}>
                                Register
                        </Button>
                        </Form.Item>
                    </Form>
                </div>

                <Modal
                    title="Forgot Password"
                    visible={this.state.visible}
                    onOk={this.handleOk}
                    onCancel={this.handleCancel}
                >
                    <p>Some contents...</p>
                    <p>Some contents...</p>
                    <p>Some contents...</p>
                </Modal>

                <Modal
                    title="Create Account"
                    visible={this.state.isVisible}
                    onOk={this.handleOk}
                    onCancel={this.handleCancel}
                >
                    Email: <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Email" />
                    Password: <Input
                                prefix={<LockOutlined className="site-form-item-icon" />}
                                type="password"
                                placeholder="Password"
                            />
                </Modal>

            </div>
        );
    }
}
const mapStateToProps = (state) => {
    return { loginStatus:  state }
  }
  const mapDispatchToProps = dispatch => {
  
    return {
        login: (data) => dispatch(login(data))
    }
  
  };

export default connect(
    mapStateToProps,
    mapDispatchToProps)
    (Login);