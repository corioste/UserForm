import React, { useState ,useEffect } from 'react';
import { connect } from "react-redux";

import { createUser, updateUser } from "./Users.action";

import {
    Row, Col, Typography, Input, Form, Button,
} from 'antd';

import { useHistory } from 'react-router';

const { Title } = Typography;

const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
};

const UserForm = ({createUser,formState}) => {

    const [firstName, setFirstName] = useState('')

    const [count, setCount] = useState(0)
    
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
    increementCount = () => {
        setCount(1);
    }
    useEffect(()=>{
       console.log("CHANGE");
       setFirstName('123');
    },[]);
    
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
                            <Input defaultValue={count} placeholder="Firstname" />
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
                            <Button type="danger" htmlType="button" onClick={increementCount}>Back</Button>
                        </div>
                    </Form>
                </Col>
            </Row>
        </div>
    );
}


const mapStateToProps = (state) => {
  
    return {formState: state}
}



export default connect(mapStateToProps, { createUser, updateUser })(UserForm);

