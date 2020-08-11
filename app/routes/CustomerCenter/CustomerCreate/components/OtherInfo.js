import React from 'react'
import PropTypes from 'prop-types'
import {Col, Card, Label, FormGroup, Input, Row} from 'reactstrap'
import {makeStyles} from '@material-ui/core/styles'

const useStyles = makeStyles({
  title: {
    color: '#403839',
    fontSize: 12,
    fontFamily: 'SFUIText-Bold',
  },
  input: {
    marginBottom: 50,
  },
  name: {
    fontFamily: 'DINCondensed-Bold',
    fontSize: 22,
    color: '#403839',
    marginTop: 25,
    marginLeft: 26,
  },
  content: {
    fontFamily: 'SFUIText-Medium',
    fontSize: 14,
    color: '#6c6766',
  },
  border: {
    borderRadius: 4,
    marginRight: 26,
  },
  distance: {
    marginBottom: 30,
  },
  check: {
    fontFamily: 'SFUIText-Semibold',
    fontSize: 14,
    color: '#de8b6d',
    marginTop: 20,
    marginBottom: 21,
  },
})

const OtherInfo = (props) => {
  const {register, errors, getValues, demotrigger, DemoData} = props
  const classes = useStyles()
  return (
    <Card className={classes.distance}>
      <div tag="h5" className="mb-0">
        <p className={`${classes.name} mb-0`}>OtherInfo</p>
      </div>
      <hr className={`${classes.border} mx-4 mt-2`} />
      <div>
        <Row form>
          <Col md={{size: 4, offset: 2}}>
            <FormGroup className="mr-md-5 mx-3 mt-3">
              <Label className={classes.title}>Join Date</Label>
              <Input className={classes.content} innerRef={register} type="datetime-local" />
            </FormGroup>
          </Col>
          <Col md={{size: 4}}>
            <FormGroup className="ml-md-5 mx-3 mt-3">
              <Label className={classes.title}>Date of Birth*</Label>
              <Input className={classes.content} innerRef={register} type="date"></Input>
            </FormGroup>
          </Col>
        </Row>
        <Row form>
          <Col md={{size: 4, offset: 2}}>
            <FormGroup className="mr-md-5 mx-3">
              <Label className={classes.title}>CustomerType</Label>
              <Input
                className={classes.content}
                name="customer_type"
                innerRef={register}
                type="select">
                <option>{props.demoTrigger ? props.DemoData.CustomerType : ''}</option>
                <option>Retail</option>
                <option>Preferred</option>
                <option>Guest</option>
              </Input>
            </FormGroup>
          </Col>
          <Col md={{size: 4}}>
            <FormGroup className="ml-md-5 mx-3">
              <Label className={classes.title}>Tax Exempt</Label>
              <Input
                className={classes.content}
                type="select"
                name="tax_exempt"
                innerRef={register}>
                <option>Yes</option>
                <option>No</option>
              </Input>
            </FormGroup>
          </Col>
        </Row>
        <Row form>
          <Col md={{size: 4, offset: 2}}>
            <FormGroup className="mr-md-5 mx-3">
              <Label className={classes.title}>Username&nbsp;*</Label>
              <Input
                type="text"
                innerRef={register({
                  required: 'This field is required.',
                })}></Input>
              {errors.username && <span className="text-danger">{errors.username.message}</span>}
            </FormGroup>
          </Col>
          <Col md={{size: 4}}>
            <FormGroup className="ml-md-5 mx-3">
              <Label className={classes.title}>Password&nbsp;*</Label>
              <Input
                type="password"
                name="password"
                defaultValue=""
                innerRef={register({
                  required: 'This field is required.',
                })}
              />
              {errors.password && <span className="text-danger">{errors.password.message}</span>}
            </FormGroup>
          </Col>
        </Row>
        <Row form>
          <Col md={{size: 4, offset: 2}}>
            <FormGroup className="mr-md-5 mx-3">
              <Label className={classes.title}>Confirm Password&nbsp;*</Label>
              <Input
                type="password"
                name="confirm_password"
                defaultValue=""
                innerRef={register({
                  validate: (value) => {
                    const {password} = getValues()
                    return value === password || 'The passwords do not match'
                  },
                })}
              />
              {errors.confirm_password && (
                <span className="text-danger">{errors.confirm_password.message}</span>
              )}
            </FormGroup>
          </Col>
          <Col md={{size: 4}}>
            <FormGroup className="ml-md-5 mx-3">
              <Label className={classes.title}>Language*</Label>
              <Input className={classes.content} type="select" name="language" innerRef={register}>
                <option>English</option>
              </Input>
            </FormGroup>
          </Col>
        </Row>
        <Row form>
          <Col md={{size: 4, offset: 2}}>
            <FormGroup className="mr-md-5 mx-3">
              <Label className={classes.title}>Customer Status</Label>
              <Input
                className={classes.content}
                type="select"
                name="customer_status"
                innerRef={register}>
                <option></option>
                <option>Inactive</option>
                <option>Active</option>
              </Input>
            </FormGroup>
          </Col>
        </Row>
        <Row form className="mb-3">
          <Col md={{size: 4, offset: 2}}>
            <FormGroup className="mx-4">
              <Col className={classes.check}>
                <Input type="checkbox" innerRef={register} /> Locked Out
              </Col>
            </FormGroup>
          </Col>
          <Col md={{size: 4}}>
            <FormGroup className="mx-4">
              <Col className={classes.check}>
                <Input type="checkbox" innerRef={register} /> Ignore Inactivity Check
              </Col>
            </FormGroup>
          </Col>
        </Row>
      </div>
    </Card>
  )
}

OtherInfo.propTypes = {
  demotrigger: PropTypes.bool,
  DemoData: PropTypes.object,
  errors: PropTypes.object,
  register: PropTypes.func,
}

export default OtherInfo
