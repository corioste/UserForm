import React, { UseState } from 'react';
import { connect } from "react-redux";

import { createUser, updateUser } from "./Users.action";

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

const UserForm = ({createUser}) => {
    const history = useHistory();

    const handleSubmit = (values) => {

       
        var data = {
            id: new Date().getUTCMilliseconds(),
            firstName: values.firstname,
            middleName: values.middlename,
            lastName: values.lastname,
            dateOfBirth: values.birthdate,
            email: values.email
        }
        createUser(data)
        history.push("/")

    }

    return (
        <div>
            <Row gutter={[40, 0]}>
                <Col span={23}>
                    <Title style={{ textAlign: 'center' }} >Please Fill the User Form</Title>
                </Col>
            </Row>
            <Row gutter={[40, 0]}>
                <Col span={18}>
                    <Form {...layout} onFinish={handleSubmit}>
                        <Form.Item name="firstname" label="Firstname"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your firstname',
                                }
                            ]}
                        >
                            <Input defaultValue="123" placeholder="Firstname" />
                        </Form.Item>
                        <Form.Item name="middlename" label="Middlename"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your correct middlename',
                                }
                            ]}
                        >
                            <Input placeholder="Middlename" />
                        </Form.Item>
                        <Form.Item name="lastname" label="Lastname"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your correct lastname',
                                }
                            ]}
                        >
                            <Input placeholder="Lastname" />
                        </Form.Item>
                        <Form.Item name="birthdate" label="Birth Date"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your correct birth date',
                                    type: 'date'
                                }
                            ]}
                        >
                            <Input placeholder="YYYY-MM-DD" />
                        </Form.Item>
                        <Form.Item name="email" label="Email"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your correct email',
                                    type: 'email'
                                }
                            ]}
                        >
                            <Input placeholder="example@domain.com" />
                        </Form.Item>


                        <div style={{ textAlign: "right" }}>
                            <Button type="primary" htmlType="submit">Save</Button>{' '}
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



export default connect(mapStateToProps, { createUser, updateUser })(UserForm);

