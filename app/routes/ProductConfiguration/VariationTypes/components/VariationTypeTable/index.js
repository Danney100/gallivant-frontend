import React from 'react'
import BootstrapTable from 'react-bootstrap-table-next'
import iconEdit from 'images/commonIcons/pencil.svg'
import PropTypes from 'prop-types'

const VariationTypeTable = ({toggle, setTypeName, setTypeDescription}) => {

  const setData = (cell,row) =>{
    toggle()
    setTypeName(row.Name)
    setTypeDescription(row.Description)
  }

  const actionFormater = (cell,row) => {
    return (
      <div className="d-flex flex-row pointer" onClick={()=>setData(cell,row)}>
        <div><img src={iconEdit} /></div>
        <div className="w-100 ml-2">Edit</div>
      </div>
    )
  }

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

  const data = [
    {id: 1, Name: 'Available Options', Description: 'Available Options'},
    {id: 2, Name: 'Available Sizes', Description: 'Available Sizes'},
    {id: 3, Name: 'Bag Options', Description: 'Bag Options'},
    {id: 4, Name: 'Box Options', Description: 'Box Options'},
    {id: 5, Name: 'Carrier Options', Description: 'Carrier Options'},
    {id: 6, Name: 'Frequency', Description: 'Frequency'},
    {id: 7, Name: 'Holiday Box Options', Description: 'Holiday Box Options'},
    {id: 8, Name: 'Lotion Options', Description: 'Lotion Options'},
    {id: 9, Name: 'Number of Bottles', Description: 'Number of Bottles'},
    {id: 10, Name: 'Options', Description: 'Options'},
    {id: 11, Name: 'Pip Stick Options', Description: 'Pip Stick Options'},
    {id: 12, Name: 'Red', Description: 'Red Wine'},
    {id: 13, Name: 'Ship Date', Description: 'Ship Date'},
    {id: 14, Name: 'Soap Options', Description: 'Soap Options'},
    {id: 15, Name: 'Sticker Options', Description: 'Sticker Options'},
    {id: 16, Name: 'Tote Options', Description: 'Tote Options'},
    {id: 17, Name: 'White', Description: 'White Wine'},
    {id: 18, Name: 'Wine Type', Description: 'Wine Type'},
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

VariationTypeTable.propTypes = {
  toggle: PropTypes.func,
  setTypeName: PropTypes.func,
  setTypeDescription: PropTypes.func,
}

export default VariationTypeTable
