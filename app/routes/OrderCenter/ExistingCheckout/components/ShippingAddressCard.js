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

const ShippingAddressCard = () => {
  const history = useHistory()
  const routeChange = () => {
    let path =
      '/order-center/create-new-order/shopping/viewcart/createperson/placeorder/existingcheckout/editshippinginfo'
    history.push(path)
  }

  return (
    <div className="mb-3">
      <Card>
        <CardHeader className="bg-primary text-white">Choose a Shipping Address</CardHeader>
        <CardBody>
          <CardTitle>
            <Row>
              <Col md={{size: 2}}>
                <CardText>Who is this order shipping?</CardText>
              </Col>
              <Col md={{size: 2}}>
                <Input type="select" name="select" id="exampleSelect">
                  <option>Order Owner</option>
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
                      <i className="fa fa-home mr-2"></i>Demo
                    </Col>
                    <Col className="text-right">
                      <i className="fa fa-check-square-o ml-2"></i>
                    </Col>
                  </Row>
                </CardHeader>
                <CardBody>
                  <CardText>Minerva Hopkins</CardText>
                  <CardText>803 Tijhuw Junction</CardText>
                  <CardText>Equality Illinois 62934</CardText>
                  <CardText>United States</CardText>
                  <CardText>927-930-2438</CardText>
                </CardBody>
                <CardFooter className="d-flex justify-content-center">
                  <Button onClick={routeChange} color="info">
                    <i className="fa fa-pencil mr-2"></i>
                    Edit
                  </Button>
                  <Button className="ml-2" color="success">
                    <i className="fa fa-check-square-o mr-2"></i>
                    Use shipping address
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

export default ShippingAddressCard
