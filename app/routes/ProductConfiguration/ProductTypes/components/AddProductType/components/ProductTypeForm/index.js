import React from 'react'
import { Col, Form, FormGroup, Label, Input } from 'reactstrap'

const ProductTypeForm = () => {
    return (
        <Form className="mt-3">
            <FormGroup row>
                <Label for="name" sm={4} lg={3} className="text-sm-right">
                    Name
                </Label>
                <Col sm={6}>
                    <Input type="text" id="name" />
                </Col>
            </FormGroup>
            <FormGroup row>
                <Label for="description" sm={4} lg={3} className="text-sm-right">
                    Description
                </Label>
                <Col sm={6}>
                    <Input type="textarea" id="description" />
                </Col>
            </FormGroup>
      </Form>
    )
}

export default ProductTypeForm
