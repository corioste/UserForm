import React from 'react';

export const columns = [
    {
      title: 'ID',
      dataIndex: 'id',
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
      render: (text, record) => (
        <Button type="primary" htmlType="submit">Save</Button>{' '}
        <Button type="danger" htmlType="button" onClick={() => history.push('/')}>Back</Button>
      ),
    }
  ];
