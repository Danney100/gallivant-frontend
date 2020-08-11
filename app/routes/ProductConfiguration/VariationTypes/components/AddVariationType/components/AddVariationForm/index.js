import React, {useState} from 'react'
import {Form, FormGroup, Label, Row, Col, Input} from 'reactstrap'
import PropTypes from 'prop-types'

import CommonButton from 'routes/components/CommonButton'
import RenderField from '../RenderField'

const AddVariationForm = ({name, description}) => {
  const [optionType, setOptionType] = useState('')
  const [field, setField] = useState('')
  const [fieldCount, setFieldCount] = useState(0)

  const addField = () => {
    if (optionType) {
      setField(optionType)
      setFieldCount((prevState) => prevState + 1)
    }
  }

  const removeField = () => {
    if (fieldCount > 0) {
      setFieldCount((prevState) => prevState - 1)
    }
  }

  const renderFields = () => {
    const fields = []
    for (let i = 0; i < fieldCount; i++) {
      fields.push(<RenderField removeField={removeField} field={field} key={i} />)
    }
    return fields
  }

  return (
    <Form>
      <Row form>
        <Col md={6}>
          <FormGroup>
            <Label className="label">
              Variation Type Name<span className="required">*</span>
            </Label>
            <Input type="text" name="name" defaultValue={name} />
          </FormGroup>
        </Col>
        <Col md={6}>
          <FormGroup>
            <Label className="label">
              Variation Type Description<span className="required">*</span>
            </Label>
            <Input type="text" name="description" defaultValue={description} />
          </FormGroup>
        </Col>
      </Row>
      <FormGroup>
        <Label className="label">Default Variations and Order For Type</Label>
        <Row className="m-0">
          <Col xs={12} sm={12} lg={9} className="pl-0">
            <Input
              type="text"
              placeholder="Option Type"
              style={{height: '40px'}}
              onChange={(e) => setOptionType(e.target.value)}
            />
          </Col>
          <Col xs={12} sm={12} lg={3} className="text-lg-right px-0 mt-2 mt-lg-0">
            <CommonButton
              title="Add"
              buttonType="cancelButton"
              onClick={addField}
              width={120}
              height={40}
              margin={false}
            />
          </Col>
        </Row>
      </FormGroup>
      {fieldCount ? <hr /> : ''}
      {renderFields()}
    </Form>
  )
}

AddVariationForm.propTypes = {
  name: PropTypes.string,
  description: PropTypes.string,
}

export default AddVariationForm
