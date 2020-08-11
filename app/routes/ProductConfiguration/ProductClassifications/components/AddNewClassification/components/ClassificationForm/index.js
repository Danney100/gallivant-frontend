import React, {useState} from 'react'
import {Col, Label, Input, InputGroupAddon, InputGroup, FormGroup, Form} from 'reactstrap'

const ClassificationForm = () => {
  const [count, setCount] = useState(0)
  return (
    <Form className="mt-3">
      <FormGroup row>
        <Label for="name" sm={4} lg={3} className="text-dark text-sm-right">
          Name
        </Label>
        <Col sm={6}>
          <Input type="text" id="name" />
        </Col>
      </FormGroup>
      <FormGroup row>
        <Label for="description" sm={4} lg={3} className="text-dark text-sm-right">
          Description
        </Label>
        <Col sm={6}>
          <Input type="textarea" id="description" />
        </Col>
      </FormGroup>
      <FormGroup row>
        <Label for="order" sm={4} lg={3} className="text-dark text-sm-right">
          Max Per Order
        </Label>
        <Col sm={6}>
          <InputGroup>
            <InputGroupAddon
              className="pointer"
              addonType="prepend"
              onClick={() => setCount(count - 1)}>
              -
            </InputGroupAddon>
            <Input
              placeholder="Amount"
              type="text"
              value={count}
              readOnly
              className="text-center"
            />
            <InputGroupAddon
              className="pointer"
              addonType="append"
              onClick={() => setCount(count + 1)}>
              +
            </InputGroupAddon>
          </InputGroup>
        </Col>
      </FormGroup>
    </Form>
  )
}

export default ClassificationForm
