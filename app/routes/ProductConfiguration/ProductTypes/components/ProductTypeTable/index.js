import React from 'react'
import BootstrapTable from 'react-bootstrap-table-next'
import iconTrash from 'images/commonIcons/trash.svg'
import iconEdit from 'images/commonIcons/pencil.svg'

const ProductTypeTable = () => {
  const actionFormater = () => (
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
  )
  const data = [
    {id: 1, Name: 'Business Basics Kit', Description: 'Business Basics Kit'},
    {id: 2, Name: 'Gift Cards', Description: 'Gift Cards'},
    {id: 3, Name: 'Merchandise', Description: 'Scout & Cellar merchandise'},
    {id: 4, Name: 'Service', Description: 'Service'},
    {id: 5, Name: 'Warehouse Supplies', Description: 'Warehouse Supplies'},
    {
      id: 6,
      Name: 'Wine',
      Description: 'Wine product category against which volume discounts can be applied',
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
    {dataField: 'df1', isDummyField: true, text: '', formatter: actionFormater},
  ]
  return (
    <BootstrapTable
      keyField="id"
      columns={columns}
      data={data}
      bordered={false}
      striped
      wrapperClasses="table-responsive"
      noDataIndication={'no results found'}
    />
  )
}

export default ProductTypeTable
