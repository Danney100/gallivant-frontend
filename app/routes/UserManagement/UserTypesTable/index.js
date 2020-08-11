import React from 'react'
import {useDispatch} from 'react-redux'
import {setTabActive} from 'duck/actions/user'
import BootstrapTable from 'react-bootstrap-table-next'
import ToolkitProvider from 'react-bootstrap-table2-toolkit'
import {Media, Alert, Row, Col, Button} from 'reactstrap'
import {CustomSearch} from 'routes/Tables/ExtendedTable/components'
import {useHistory} from 'react-router'
import paginationFactory from 'react-bootstrap-table2-paginator'
import iconUser from 'images/commonIcons/user.svg'
import iconEdit from 'images/commonIcons/edit.svg'
import iconCopy from 'images/commonIcons/copy.svg'
import iconDelete from 'images/commonIcons/delete.svg'

const UserTypesTable = () => {
  const history = useHistory()
  const dispatch = useDispatch();

  const changeRoute = () => {
    history.push('/user-management/edit-usertype')
  }

  const sortCaret = (order) => {
    if (!order) return <i className="fa fa-fw fa-sort text-muted"></i>
    if (order) return <i className={`fa fa-fw text-muted fa-sort-${order}`}></i>
  }

  const actionBtns = [
    {
      name: 'User',
      icon: iconUser,
      onClick: () => dispatch(setTabActive('Users')),
    },
    {
      name: 'Edit',
      icon: iconEdit,
      onClick: changeRoute,
    },
    {
      name: 'Copy',
      icon: iconCopy,
      onClick: changeRoute,
    },
    {
      name: 'Delete',
      icon: iconDelete,
      onClick: () => {},
    },
  ]

  const listButtons = actionBtns.map((button) => (
    <Button
      key={button.name}
      className="sc-btn-action sc-btn-action--layout px-1"
      color="link"
      onClick={button.onClick}>
      <span className="sc-btn-action__icon rounded-circle">
        <img className="sc-btn-action__img" src={button.icon} />
      </span>
      {button.name}
    </Button>
  ))

  const actionFormater = () => {
    return (
      <div className="sc-btn-action-wrapper d-flex flex-wrap align-items-center justify-content-between">
        {listButtons}
      </div>
    )
  }

  const columns = [
    {
      dataField: 'name',
      text: 'Name',
      sort: true,
      sortCaret,
    },
    {
      dataField: 'users',
      text: 'Users',
      sort: true,
      sortCaret,
    },
    {
      dataField: 'description',
      text: 'Descriptions',
      sort: true,
      sortCaret,
    },
    {dataField: 'df1', isDummyField: true, text: '', formatter: actionFormater},
  ]

  const data = [
    {
      id: 1,
      name: 'Business Development Management',
      users: 10,
      description: 'For Business Development Management Roles',
    },
    {
      id: 2,
      name: 'ClientAdmin',
      users: 23,
      description: '',
    },
    {
      id: 3,
      name: 'Compliance Management',
      users: 10,
      description: 'For Compliance Roles',
    },
    {
      id: 4,
      name: 'Customer Service Management',
      users: 5,
      description: 'For Manager Roles in Customer Service',
    },
  ]

  return (
    <>
      <Alert color="primary" className="sc-alert">
        <Media>
          <Media left middle className="sc-alert__icon">
            <span className="fa-stack fa-lg">
              <span
                className="sc-alert__circle fa-stack-2x bg-primary-02"
                aria-hidden="true"></span>
              <i
                className="fa fa-fw fa-check fa-stack-1x fa-inverse alert-icon"
                aria-hidden="true"></i>
            </span>
          </Media>
          <Media body>
            <h6 className="sc-alert__heading mb-1">Manage your user types</h6>
            <a className="sc-alert__link" href="#">
              Features Guide Link
              <i className="fa fa-fw fa-long-arrow-right ml-1" aria-hidden="true"></i>
            </a>
          </Media>
        </Media>
      </Alert>
      <ToolkitProvider keyField="id" data={data} columns={columns} search>
        {(props) => (
          <React.Fragment>
            <div className="search-wrapper">
              <div>
                <CustomSearch {...props.searchProps} />
              </div>
            </div>
            <Row className="sc-card__full-row mt-3">
              <Col sm={12} className="p-0">
                <BootstrapTable
                  keyField="id"
                  classes="sc-table table-responsive-md"
                  bordered={false}
                  striped
                  hover
                  {...props.baseProps}
                  pagination={paginationFactory()}
                />
              </Col>
            </Row>
          </React.Fragment>
        )}
      </ToolkitProvider>
    </>
  )
}

export default UserTypesTable
