import React from 'react'
import {Row, Col, Button} from 'reactstrap'

const SearchButton = () => {
  return (
    <Row className="mt-1">
      <Col sm={8} xs={12} className="text-lg-left text-center">
        <Button className="m-1" color="info">
          <i className="fa fas fa-pencil mr-1"></i>Edit Product Details
        </Button>
        <Button className="m-1" color="info">
          <i className="fa fas fa-pencil mr-1"></i>Copy Product
        </Button>
      </Col>
    </Row>
  )
}

export default SearchButton
