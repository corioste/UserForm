import React, { UseState } from 'react';
import { connect } from "react-redux";

import { createUser, updateUser, deletUser } from "./Users.action";

import {
    Row, Col, Typography, Input, Form, Button,
    Radio, Switch, Slider, Select, message
} from 'antd';

import { useHistory } from 'react-router';

const { Title } = Typography;

const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
};

const UserForm = () => {
    const history = useHistory();

    const handleSubmit = (values) => {

    }

    return (
        <div>
            <Row gutter={[40, 0]}>
                <Col span={23}>
                    <Title style={{ textAlign: 'center' }} level={2}>Please Fill the User Form</Title>
                </Col>
            </Row>
            <Row gutter={[40, 0]}>
                <Col span={18}>
                    <Form {...layout} onFinish={handleSubmit}>
                        <Form.Item name="username" label="Firstname"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your firstname',
                                }
                            ]}
                        >
                            <Input placeholder="Please Enter your username" />
                        </Form.Item>
                        <Form.Item name="email" label="Middlename"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your correct middlename',
                                }
                            ]}
                        >
                            <Input placeholder="Please Enter your middlename" />
                        </Form.Item>


                        <div style={{ textAlign: "right" }}>
                            <Button type="primary" htmlType="submit"></Button>{' '}
                            <Button type="danger" htmlType="button" onClick={() => history.push('/')}>Back</Button>
                        </div>
                    </Form>
                </Col>
            </Row>
        </div>
    );
}


const mapStateToProps = (state) => {
    return state
}



export default connect(mapStateToProps, { createUser, updateUser, deletUser })(UserForm);

