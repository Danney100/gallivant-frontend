import React from 'react'
import {Card, Button, CardHeader, CardFooter, CardBody, CardTitle, CardText} from 'reactstrap'
import {useHistory} from 'react-router-dom'

const BackCard = () => {
  const history = useHistory()
  const routeChange = () => {
    let path =
      '/order-center/create-new-order/shopping/viewcart/createperson/placeorder/existingcheckout/editpersoninfo'
    history.push(path)
  }

  return (
    <div md="6" className="mb-3">
      <Card>
        <CardHeader className="bg-primary text-white">Welcome back, Minerva!</CardHeader>
        <CardBody>
          <CardTitle>Minerva Hopkins</CardTitle>
          <CardText>Jidup Inc.</CardText>
          <CardText>MHopkins613@gmail.com</CardText>
          <CardText>9283439283</CardText>
        </CardBody>
        <CardFooter className="d-flex justify-content-center">
          <Button onClick={routeChange} color="info">
            <i className="fa fa-pencil mr-2"></i>
            Edit your information
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}

export default BackCard
