import React, { useState, useEffect } from 'react';
import { connect } from "react-redux";
import { useHistory } from 'react-router';

import { createUser, selectUser, updateUser } from "./Users.action";
import { Row, Col, Typography, Input, Form, Button, Radio, DatePicker, Image } from 'antd';

import moment from "moment";

const { Title } = Typography;

const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
};

const UserForm = ({ selectedUser, createUser, updateUser, userList }) => {

    const history = useHistory();
    const [form] = Form.useForm()
    const [title, setTitle] = useState('ADD USER')
    const [image, setImage] = useState(null)
    const [imageUrl, setImageUrl] = useState("https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRqEWgS0uxxEYJ0PsOb2OgwyWvC0Gjp8NUdPw&usqp=CAU")
    const [gender, setGender] = useState(null)
  
    const handleSubmit = (values) => {

        let formatted_date = values.birthdate._d
            .getFullYear() + "-" + ("0" + (values.birthdate._d
            .getMonth() + 1))
            .slice(-2) + "-" + 
            ("0" + values.birthdate._d
            .getDate())
            .slice(-2)
        
        console.log(values.image)

        var selectedUserLen = selectedUser.length

        var id = selectedUserLen == 0 ? 
            new Date().getUTCMilliseconds().toString():selectedUser.id;

        var data = {
                data: {
                    id: id,
                    firstName: values.firstname,
                    middleName: values.middlename,
                    lastName: values.lastname,
                    dateOfBirth: formatted_date,
                    gender: values.gender,
                    email: values.email,
                    image: image,
                    userList: userList,
                },
                userList: userList,
            }

        selectedUser == 0 ? createUser(data) :  updateUser(data.data);
      
        history.push("/")

    }

    const handleChamge = (e) => {
        if (e.target.files[0]) {
            var image = e.target.files[0]
            setImage(image)
            setImageUrl(URL.createObjectURL(image))
        }
    }

    useEffect(() => {
       
        if (selectedUser !== 0) {
            
            setTitle('UPDATE USER')
            setImageUrl(selectedUser.imageURL)
            setGender(selectedUser.gender)
            console.log(selectedUser)
            form.setFieldsValue(
                {
                    firstname: selectedUser.firstName,
                    middlename: selectedUser.middleName,
                    lastname: selectedUser.lastName,
                    birthdate: moment(selectedUser.dateOfBirth),
                    email: selectedUser.email
                }
            );
            
        }
    }, []);

    return (
        <div>

            <Row gutter={[40, 0]}>
                <Col span={23}>
                    <Title style={{ textAlign: 'center' }} >{imageUrl}</Title>
                </Col>
            </Row>
            <Row gutter={[40, 0]}>
                <Col span={23}>
                    <Image width={200} style={{
                        display: "block",
                        marginLeft: "auto",
                        marginRight: "auto",
                    }} fallback={imageUrl} src='error' />
                </Col>
            </Row>
            <br></br>
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
                            <DatePicker placeholder="YYYY-MM-DD" />
                        </Form.Item>
                        <Form.Item name="gender" label="Gender"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please select your gender',
                                }
                            ]}
                        >
                            <Radio.Group defaultValue="Male" value={gender}>
                                <Radio value="Male">Male</Radio>
                                <Radio value="Female">Female</Radio>
                                <Radio value="Other">Others</Radio>
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
                        <Form.Item name="image" label="Image">
                            <Input onChange={handleChamge} type='file' />
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
    return { 
        selectedUser: state.UserReducer.selectedUser, 
        userList: state.UserReducer.userList 
    }
}

const mapStateDispatchToProps = dispatch => {
    return {
        createUser: (data) => dispatch(createUser(data)), 
        updateUser: (data) => dispatch(updateUser(data)), 
        selectUser
    }
}

export default connect(mapStateToProps, mapStateDispatchToProps)(UserForm);

