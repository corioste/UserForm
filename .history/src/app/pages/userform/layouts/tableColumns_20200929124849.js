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
        <span
          className={`${this.props.className}-delete`}
          onClick={(e) => { this.onDelete(record.key, e); }}
        >
          Delete
        </span>
      ),
    },
    }
  ];
