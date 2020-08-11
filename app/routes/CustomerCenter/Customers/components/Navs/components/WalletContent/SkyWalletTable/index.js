import React from 'react'
import {Table} from 'reactstrap'
import WalletButton from '../WalletButton'
import {makeStyles} from '@material-ui/core/styles'

const useStyles = makeStyles({
  title: {
    fontFamily: 'DINCondensed-Bold',
    fontSize: 21,
    color: '#403839',
  },
  theadFont: {
    fontFamily: 'SFUIText-Semibold',
    color: '#403839',
    fontSize: 14,
  },
  tbodyFont: {
    fontFamily: 'SFUIText-Medium',
    color: '#6c6766',
    fontSize: 14,
  },
})

const SkyWalletTable = () => {
  const classes = useStyles()

  return (
    <div>
      <div className="mx-4">
        <span className={classes.title}>Sky Wallet Balances</span>
      </div>
      <div className="mt-3 mb-3">
        <Table responsive striped>
          <thead className={classes.theadFont}>
            <tr>
              <th>
                <span className="ml-2">Balance Type</span>
              </th>
              <th>
                <span>Balance</span>
              </th>
              <th style={{width: '220px'}}></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className={classes.tbodyFont}>Fast Start Bonus Credits </td>
              <td className={classes.tbodyFont}>$0.00</td>
              <td>
                <WalletButton />
              </td>
            </tr>
          </tbody>
        </Table>
      </div>
    </div>
  )
}

export default SkyWalletTable
