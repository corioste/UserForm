import React from 'react';
import {Button} from 'antd';
export const columns = [
    {
      title: 'ID',
      dataIndex: 'id',
      key: 'id'
    },
    {
      title: 'Firstname',
      dataIndex: 'firstName'
    },
    {
      title: 'Middlename',
      dataIndex: 'middleName'
    },
    {
      title: 'Lastname',
      dataIndex: 'lastName'
    },
    {
      title: 'Date of Birth',
      dataIndex: 'dateOfBirth'
    },
    {
      title: 'Email',
      dataIndex: 'email'
    },
    {
      title: 'Age',
      dataIndex: 'age'
    },
    {
      title: 'Action',
      dataIndex: 'action',
      render: (text,record) => (
        <div>
          <Button onClick={(e)=>{console.log()}} type="primary">Update</Button>
          <Button type="danger">Delete</Button>
        </div>
      ),
    }
  ];
