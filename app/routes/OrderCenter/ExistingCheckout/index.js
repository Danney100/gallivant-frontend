import React from 'react'
import {Row, Col, FormGroup, Button} from 'reactstrap'
import BackCard from './components/BackCard'
import BuillingMethodCard from './components/BillingMethodCard'
import ShippingAddressCard from './components/ShippingAddressCard'
import AgeCard from './components/AgeCard'
import ConditionCard from './components/ConditionCard'
import ResidentsCard from './components/ResidentsCard'
import {useHistory} from 'react-router-dom'

const ExistingCheckout = () => {
  const history = useHistory()
  const routeChange = () => {
    let path = '/order-center/create-new-order/shopping/viewcart/createperson/placeorder'
    history.push(path)
  }

  return (
    <div>
      <Row>
        <Col md={{size: 6}}>
          <BackCard />
        </Col>
      </Row>
      <Row>
        <Col>
          <BuillingMethodCard />
        </Col>
      </Row>
      <Row>
        <Col>
          <ShippingAddressCard />
        </Col>
      </Row>
      <Row>
        <Col>
          <AgeCard />
        </Col>
      </Row>
      <Row>
        <Col>
          <ConditionCard />
        </Col>
      </Row>
      <Row>
        <Col>
          <ResidentsCard />
        </Col>
      </Row>
      <FormGroup row className="d-flex justify-content-end">
        <Button onClick={routeChange} className="mr-3" color="success">
          <i className="fa fas fa-check-circle mr-1"></i>
          continue
        </Button>
      </FormGroup>
    </div>
  )
}

export default ExistingCheckout
