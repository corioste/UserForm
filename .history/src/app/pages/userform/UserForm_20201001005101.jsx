import React, { useState, useEffect } from 'react';
import { connect } from "react-redux";

import { createUser, selectUser, updateUser } from "./Users.action";

import {
    Row, Col, Typography, Input, Form, Button, Radio, DatePicker
} from 'antd';
import moment from "moment";
import { useHistory } from 'react-router';

const { Title } = Typography;

const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
};

const UserForm = ({ formState }) => {

    const history = useHistory();
    const [form] = Form.useForm()
    const [title, setTitle] = useState('ADD USER')

    const handleSubmit = (values) => {
        let formatted_date = values.birthdate._d.getFullYear() + "-" + ("0"+(values.birthdate._d.getMonth() + 1)).slice(-2) + "-" + ("0"+values.birthdate._d.getDate()).slice(-2)
        
        if (formState.UserReducer.selectedUser.length == 0) {
            var data = {
                data: {
                    id: new Date().getUTCMilliseconds().toString(),
                    firstName: values.firstname,
                    middleName: values.middlename,
                    lastName: values.lastname,
                    dateOfBirth: formatted_date,
                    gender: values.gender,
                    email: values.email
                },
                userList: formState.UserReducer.userList
            }
            createUser(data)
        } else {
            var data = {
                id: formState.UserReducer.selectedUser.id,
                firstName: values.firstname,
                middleName: values.middlename,
                lastName: values.lastname,
                dateOfBirth: formatted_date,
                gender: values.gender,
                email: values.email,
                userList: formState.UserReducer.userList
            }
            updateUser(data)
        }

        history.push("/")

    }

    useEffect(() => {
        console.log(formState)
        console.log(formState)
        if (formState.UserReducer.selectedUser.length !== 0) {
            setTitle('UPDATE USER')
            form.setFieldsValue({
                firstname: formState.UserReducer.selectedUser.firstName,
                middlename: formState.UserReducer.selectedUser.middleName,
                lastname: formState.UserReducer.selectedUser.lastName,
                birthdate: moment(formState.UserReducer.selectedUser.dateOfBirth),
                gender: formState.UserReducer.selectedUser.gender,
                email: formState.UserReducer.selectedUser.email
            });

        }
    }, []);

    return (
        <div>
            <Row gutter={[40, 0]}>
                <Col span={23}>
                    <Title style={{ textAlign: 'center' }} >{title}</Title>
                </Col>
            </Row>
            <Row gutter={[40, 0]}>
                <Col span={18}>
                    <Form {...layout} form={form} onFinish={handleSubmit}>
                        <Form.Item name="firstname" label="Firstname"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your firstname',
                                }
                            ]}
                        >
                            <Input placeholder="Firstname" />
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
                                    type: 'object',
                                }
                            ]}
                        >
                            <DatePicker placeholder="YYYY-MM-DD"/>
                        </Form.Item>
                        <Form.Item name="gender" label="Gender"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please select your gender',
                                }
                            ]}
                        >
                            <Radio.Group>
                                <Radio value="Male">Male</Radio>
                                <Radio value="Female">Female</Radio>
                                <Radio value="Others">Others</Radio>
                            </Radio.Group>
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
    return { formState: state }
}

const mapStateDispatchToProps = dispatch => {
    return {
        createUser, updateUser, selectUser
    }
}



export default connect(mapStateToProps, mapStateDispatchToProps)(UserForm);

