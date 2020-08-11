import React from 'react'
import {
  Card,
  Row,
  Col,
  Button,
  CardHeader,
  CardFooter,
  CardBody,
  CardTitle,
  CardText,
  Input,
} from 'reactstrap'
import {useHistory} from 'react-router-dom'

const BuildingMethodCard = () => {
  const history = useHistory()
  const routeChange = () => {
    let path =
      '/order-center/create-new-order/shopping/viewcart/createperson/placeorder/existingcheckout/editbillinginfo'
    history.push(path)
  }

  return (
    <div className="mb-3">
      <Card>
        <CardHeader className="bg-primary text-white">Choose a Billing Method</CardHeader>
        <CardBody>
          <CardTitle>
            <Row>
              <Col md={{size: 2}}>
                <CardText>Who is paying?</CardText>
              </Col>
              <Col md={{size: 2}}>
                <Input type="select" name="select" id="exampleSelect">
                  <option>Order Owner</option>
                  <option>Pay later</option>
                </Input>
              </Col>
            </Row>
          </CardTitle>
          <Row>
            <Col md={{size: 6}}>
              <Card>
                <CardHeader className="bg-info text-white">
                  <Row>
                    <Col>
                      <i className="fa fa-credit-card mr-2"></i>Visa ending in 1111
                    </Col>
                    <Col className="text-right">
                      expires on 06/20
                      <i className="fa fa-check ml-2"></i>
                    </Col>
                  </Row>
                </CardHeader>
                <CardBody>
                  <Row>
                    <Col>
                      <CardText>Name on Card</CardText>
                      <CardText>Minerva Hopkins</CardText>
                    </Col>
                    <Col>
                      <CardText>Billing Address</CardText>
                      <CardText>Pejajriv, Florida 69345</CardText>
                      <CardText>United States</CardText>
                      <CardText>(927) 930-2438</CardText>
                    </Col>
                  </Row>
                  <Row className="d-flex mt-2 justify-content-center">
                    <Col sm={{size: 3}}>
                      <CardText>Enter CVV</CardText>
                    </Col>
                    <Col sm={{size: 3}}>
                      <Input />
                    </Col>
                  </Row>
                </CardBody>
                <CardFooter className="d-flex justify-content-center">
                  <Button onClick={routeChange} color="info">
                    <i className="fa fa-pencil mr-2"></i>
                    Edit
                  </Button>
                  <Button className="ml-2" color="success">
                    <i className="fa fa-check-square-o mr-2"></i>
                    Use billing method
                  </Button>
                </CardFooter>
              </Card>
            </Col>
          </Row>
        </CardBody>
        <CardFooter className="d-flex justify-content-center">
          <Button onClick={routeChange} color="spotify">
            <i className="fa fa-plus mr-2"></i>Add a new credit card
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}

export default BuildingMethodCard
