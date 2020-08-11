import React from 'react'
import BootstrapTable from 'react-bootstrap-table-next'
import ToolkitProvider from 'react-bootstrap-table2-toolkit'
import {Row, Col, Button} from 'components'
import {CustomSearch} from 'routes/Tables/ExtendedTable/components'
import {useHistory} from 'react-router'
import paginationFactory from 'react-bootstrap-table2-paginator'
import iconEdit from 'images/commonIcons/edit.svg'

const UsersTable = () => {
  const history = useHistory()

  const changeRoute = () => {
    history.push('/user-management/edit-user')
  }

  const sortCaret = (order) => {
    if (!order) return <i className="fa fa-fw fa-sort text-muted"></i>
    if (order) return <i className={`fa fa-fw text-muted fa-sort-${order}`}></i>
  }

  const actionFormater = () => {
    return (
      <Button
        className="sc-btn-action px-1"
        color="link"
        onClick={ changeRoute }
      >
        <span className="sc-btn-action__icon rounded-circle">
          <img className="sc-btn-action__img" src={ iconEdit }/>
        </span>
        Edit
      </Button>
    )
  }

  const columns = [
    {
      dataField: 'id',
      hidden: true,
    },
    {
      dataField: 'name',
      text: 'Name',
      sort: true,
      sortCaret,
    },
    {
      dataField: 'email',
      text: 'Email',
      sort: true,
      sortCaret,
    },
    {
      dataField: 'firstName',
      text: 'First Name',
      sort: true,
      sortCaret,
    },
    {
      dataField: 'lastName',
      text: 'Last Name',
      sort: true,
      sortCaret,
    },
    {
      dataField: 'userType',
      text: 'User Type',
      sort: true,
      sortCaret,
    },
    {
      dataField: 'lockedOut',
      text: 'Locked Out',
      sort: true,
      sortCaret,
    },
    {dataField: 'df1', isDummyField: true, text: '', formatter: actionFormater},
  ]

  const data = [
    {
      id: 1,
      name: 'sshadonix',
      email: 'arah@scoutandcellar.com',
      firstName: 'Sarah',
      lastName: 'Shadonix',
      userType: 'ClientAdmin',
      lockedOut: 'No',
    },
    {
      id: 2,
      name: 'EnglishAnonymous',
      email: 'EnglishAnonymous@example.com',
      firstName: 'English',
      lastName: 'Anonymous',
      userType: 'Anonymous',
      lockedOut: 'No',
    },
    {
      id: 3,
      name: 'customerservice',
      email: 'customerservice@scoutandcellar.com',
      firstName: 'Customer',
      lastName: 'Service',
      userType: 'Customer Service	',
      lockedOut: 'Yes',
    },
  ]

  return (
    <ToolkitProvider keyField="id" data={data} columns={columns} search>
      {(props) => (
        <>
          <div className="search-wrapper">
            <div>
              <CustomSearch {...props.searchProps}/>
            </div>
          </div>
          <Row className="sc-card__full-row mt-3">
            <Col sm={12} className="p-0">
              <BootstrapTable
                keyField="id"
                classes="sc-table table-responsive"
                bordered={ false }
                striped
                hover
                {...props.baseProps}
                pagination={paginationFactory()}
              />
            </Col>
          </Row>
        </>
      )}
    </ToolkitProvider>
  )
}

export default UsersTable
