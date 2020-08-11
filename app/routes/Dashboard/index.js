import React, {useContext, useEffect} from 'react'
import {Card, CardBody, CardDeck, Row, Col} from 'reactstrap'
import {makeStyles} from '@material-ui/styles'

import AppContext from 'components/App/AppContext'
import PastBarChart from './components/PastBarChart'
import JoinPastChart from './components/JoinPastChart'
import PartiesPast from './components/PartiesPast'
import OrderOriginPast7Days from './components/OrderOriginPast7Days'
import DataRow from './components/DataRow'

const useStyles = makeStyles({
  root: {
    '& .card': {
      border: 'none',
      borderRadius: '5px',
      boxShadow: '0 3px 15px 0 rgba(195, 185, 185, 0.12)',
    },
    '& .card-title': {
      fontSize: '26px',
      fontFamily: 'Oswald-SemiBold',
      color: '#423b3c',
      marginBottom: '10px',
      fontWeight: 600,
    },
  },
})

export const Dashboard = () => {
  const context = useContext(AppContext)
  const {setTitle} = context
  const classes = useStyles()

  useEffect(() => {
    setTitle('Dashboard')
  }, [])

  return (
    <div className="p-lg-0 px-3">
      <Row className="mb-lg-0 mb-3">
        <Col style={{fontFamily: 'Oswald-Medium', fontSize: '24px', color: '#423b3c'}}>
          Dashboard
        </Col>
      </Row>
      <DataRow />
      <CardDeck className={classes.root}>
        <Card lg={4}>
          <CardBody>
            <div className="d-flex border-bottom mb-4">
              <div className="card-title">
                <span>Orders Past 7 Days</span>
              </div>
            </div>
            <PastBarChart label="orderPast" BarOffset={{dy: 25, dx: -15, angle: -45}} />
          </CardBody>
        </Card>

        <Card lg={4}>
          <CardBody>
            <div className="d-flex border-bottom mb-4">
              <div className="card-title">
                <span>Joins Past 7 Days</span>
              </div>
            </div>
            <JoinPastChart />
          </CardBody>
        </Card>

        <Card lg={4}>
          <CardBody>
            <div className="d-flex border-bottom mb-4">
              <div className="card-title">
                <span>Parties Past 7 Days</span>
              </div>
            </div>
            <PartiesPast />
          </CardBody>
        </Card>
      </CardDeck>
      <CardDeck className={`my-4 ${classes.root}`}>
        <Card lg={4}>
          <CardBody>
            <div className="d-flex border-bottom mb-4">
              <div className="card-title">
                <span>Tasting Sales Past 7 Days</span>
              </div>
            </div>
            <PastBarChart label="testingSalesPast" BarOffset={{dy: 25, dx: -15, angle: -45}} />
          </CardBody>
        </Card>
        <Card lg={4}>
          <CardBody>
            <div className="d-flex border-bottom mb-4">
              <div className="card-title">
                <span>Parties Past 6 Months</span>
              </div>
            </div>
            <PastBarChart label="partiesPast" BarOffset={{dy: 10, dx: -1, angle: 0}} />
          </CardBody>
        </Card>
        <Card lg={4}>
          <CardBody>
            <div className="d-flex border-bottom mb-4">
              <div className="card-title">
                <span>Order Origin Past 7 Days</span>
              </div>
            </div>
            <OrderOriginPast7Days />
          </CardBody>
        </Card>
      </CardDeck>
    </div>
  )
}

export default Dashboard
