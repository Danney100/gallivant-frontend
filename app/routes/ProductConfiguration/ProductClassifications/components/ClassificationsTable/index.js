import React from 'react'
import BootstrapTable from 'react-bootstrap-table-next'
import iconTrash from 'images/commonIcons/trash.svg'
import iconEdit from 'images/commonIcons/pencil.svg'

const ClassificationsTable = () => {
  const actionFormater = () => (
    <>
      <div className={` d-flex flex-row`}>
        <div>
          <img src={iconEdit} />
        </div>
        <div className="w-100 ml-2">Edit</div>
        <div className="ml-2">
          <img src={iconTrash} />
        </div>
        <div className="w-100 ml-2">Delete</div>
      </div>
    </>
  )

  const data = [
    {
      Id: '1',
      Name: '$25 4 Bottle Set Reward',
      Description: '$25 4 Bottle Set Reward',
      'Max Per Order': '2',
    },
    {
      Id: '2',
      Name: '10 % Scout & Cellar Birthday Discount',
      Description: '10 % Scout & Cellar Birthday Discount',
      'Max Per Order': '2',
    },
    {Id: '3', Name: '1 bottle gift set', Description: '1 bottle gift set', 'Max Per Order': '2'},
    {Id: '4', Name: '12 Club', Description: '12 Club', 'Max Per Order': '2'},
    {
      Id: '5',
      Name: '12 days of Xmas Dec.10',
      Description: '12 days of Xmas Dec.10',
      'Max Per Order': '2',
    },
    {
      Id: '6',
      Name: '12 days of Xmas Dec.11',
      Description: '12 days of Xmas Dec.11',
      'Max Per Order': '2',
    },
    {
      Id: '7',
      Name: '12 days of Xmas Dec.12',
      Description: '12 days of Xmas Dec.12',
      'Max Per Order': '2',
    },
    {
      Id: '8',
      Name: '12 days of Xmas Dec.13',
      Description: '12 days of Xmas Dec.13',
      'Max Per Order': '2',
    },
    {
      Id: '9',
      Name: '12 days of Xmas Dec.14',
      Description: '12 days of Xmas Dec.14',
      'Max Per Order': '2',
    },
    {
      Id: '10',
      Name: '12 days of Xmas Dec.15',
      Description: '12 days of Xmas Dec.15',
      'Max Per Order': '2',
    },
    {
      Id: '11',
      Name: '12 days of Xmas Dec.16',
      Description: '12 days of Xmas Dec.16',
      'Max Per Order': '2',
    },
    {
      Id: '12',
      Name: '12 days of Xmas Dec.17',
      Description: '12 days of Xmas Dec.17',
      'Max Per Order': '2',
    },
  ]

  const columns = [
    {
      dataField: 'Name',
      text: 'Name',
      sort: true,
    },
    {
      dataField: 'Description',
      text: 'Description',
      sort: true,
    },
    {
      dataField: 'Max Per Order',
      text: 'Max Per Order',
      sort: true,
      classes: 'text-center',
    },
    {dataField: 'df1', isDummyField: true, text: '', formatter: actionFormater},
  ]

  return (
    <BootstrapTable
      keyField="Id"
      columns={columns}
      data={data}
      bordered={false}
      striped
      wrapperClasses="table-responsive"
      noDataIndication={'no results found'}
    />
  )
}

export default ClassificationsTable
