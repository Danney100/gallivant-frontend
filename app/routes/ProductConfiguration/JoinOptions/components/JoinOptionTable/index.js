import React from 'react'
import BootstrapTable from 'react-bootstrap-table-next'
import {data} from './demoData'
import iconEdit from 'images/commonIcons/pencil.svg'
import iconDelete from 'images/commonIcons/trash.svg'
import iconSort from 'images/commonIcons/sort.svg'
import IconMenu from 'images/commonIcons/menu1.svg'
import {Checkbox} from '@material-ui/core'

const JoinOptionTable = () => {
  const sortCaret = (order) => {
    if (!order) return <span>&nbsp;&nbsp;</span>
    else if (order === 'asc') return <i className="fa fa-long-arrow-up ml-2" />
    else if (order === 'desc') return <i className="fa fa-long-arrow-down ml-2" />
    return null
  }

  const IconButton = ({icon, label, className}) => (
    <div className={`${className} d-flex flex-row`}>
      <div>
        <img src={icon} />
      </div>
      <div className="w-100 ml-2">{label}</div>
    </div>
  )
  const actionFormater = () => (
    <>
      <IconButton icon={iconDelete} label="Delete" />
      <IconButton icon={iconEdit} label="Edit" className="my-2" />
      <IconButton icon={iconSort} label="Sort" />
    </>
  )
  const DragFormatter = () => (
    <div>
      <img src={IconMenu} height="25" width="30" />
    </div>
  )
  const EnabledFormatter = () => (
    <div>
      <Checkbox />
    </div>
  )

  const columns = [
    {
      dataField: 'Dummy',
      isDummyField: true,
      text: '',
      formatter: DragFormatter,
      style: {
        padding: '0px',
        textAlign: 'right',
      },
    },
    {
      dataField: 'Enabled',
      isDummyField: true,
      text: 'Enabled',
      formatter: EnabledFormatter,
      style: {
        padding: '0px',
      },
    },
    {
      dataField: 'Name',
      text: 'Name',
      sort: true,
      sortCaret: sortCaret,
    },
    {
      dataField: 'Description',
      text: 'Description',
      sortCaret: sortCaret,
      sort: true,
    },
    {
      dataField: 'ConsultantType',
      text: 'Consultant Type',
      sortCaret: sortCaret,
      sort: true,
    },
    {
      dataField: 'ConsultantRankType',
      text: 'Consultant Rank Type',
      sortCaret: sortCaret,
      sort: true,
    },
    {
      dataField: 'ConsultantStatus',
      text: 'Consultant Status',
      sortCaret: sortCaret,
      sort: true,
    },
    {
      dataField: 'PersonalWebsite',
      text: 'Personal Website',
      sortCaret: sortCaret,
      sort: true,
    },
    {
      dataField: 'PortalAcess',
      text: 'Portal Acess',
      sortCaret: sortCaret,
      sort: true,
    },
    {
      dataField: 'HasSubscriptions',
      text: 'Has Subscriptions',
      sortCaret: sortCaret,
      sort: true,
    },
    {dataField: 'df1', isDummyField: true, text: '', formatter: actionFormater},
  ]

  return (
    <BootstrapTable
      keyField="id"
      data={data}
      bordered={false}
      striped
      wrapperClasses="table-responsive"
      columns={columns}
    />
  )
}

export default JoinOptionTable
