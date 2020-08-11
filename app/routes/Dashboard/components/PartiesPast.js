import React from 'react'
import {Table} from 'reactstrap'
import {makeStyles} from '@material-ui/styles'

const useStyles = makeStyles({
  root: {
    '& .table': {
      '& tr': {
        height: '50px',
      },
      '& th': {
        fontFamily: ' Avenir-Roman',
        fontSize: '14px',
        color: ' #707070',
      },
      '& td': {
        fontFamily: ' Avenir-Heavy',
        fontSize: '14px',
        color: ' #6c6766',
        letterSpacing: '0.2px',
        textAlign: 'right',
      },
      '& tr:nth-child(odd) ': {
        backgroundColor: 'rgba(66, 59, 60, 0.01)',
      },
      '& tr:nth-child(even)': {
        backgroundColor: 'rgba(66, 59, 60, 0.03)',
      },
    },
    '& .table-striped': {
      '& tbody': {},
    },
  },
})

const PartiesPast = () => {
  const classes = useStyles()
  return (
    <div className={`${classes.root}`}>
      <Table striped responsive>
        <tbody>
          <tr>
            <th scope="row">New Parties Booked</th>
            <td>4</td>
          </tr>
          <tr>
            <th scope="row">Total Parties</th>
            <td>3</td>
          </tr>
          <tr>
            <th scope="row">Total Party Sales</th>
            <td>$14,367.00</td>
          </tr>
          <tr>
            <th scope="row">Party Sales Average</th>
            <td>$4,789.00</td>
          </tr>
        </tbody>
      </Table>
    </div>
  )
}

export default PartiesPast
