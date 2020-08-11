import React, {useContext, useEffect} from 'react'
import {
  Row,
  Col,
  Card,
  Label,
  ListGroup,
  CardTitle,
  Input,
  Button,
  Media,
  FormGroup,
} from 'reactstrap'
import {useHistory} from 'react-router-dom'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'

import AppContext from 'components/App/AppContext'
import {createCartWatcher} from 'duck/watcher'
import {makeStyles} from '@material-ui/core/styles'
import OrderDemo from './OrderDemo'
import CommonButton from 'routes/components/CommonButton'

const useStyles = makeStyles({
  title: {
    fontSize: '32px',
    color: '#403839',
    fontFamily: 'DINCondensed-Bold',
  },
  subtitle: {
    fontSize: '22px',
    color: '#403839',
    fontFamily: 'DINCondensed-Bold',
  },
  iterm: {
    fontSize: '14px',
    color: '#403839',
    fontFamily: 'SFUIText-Semibold',
  },
  value: {
    fontSize: '14px',
    color: '#403839',
    fontFamily: 'SFUIText-Medium',
  },
  bottom: {
    marginBottom: 30,
  },
})

function CreateNewOrder(props) {
  const classes = useStyles()
  const context = useContext(AppContext)
  const {setTitle} = context

  const token = props.user.get('token')

  const history = useHistory()

  useEffect(() => {
    setTitle('Start New Order')
  }, [])

  const routeChange = () => {
    let path = '/order-center/create-new-order/shopping'
    const payload = {
      token: token,
      cartType: 'guest',
    }
    props.createCartWatcher(payload)
    history.push(path)
  }

  return (
    <Row className="p-3">
      <Col md={12} sm={12} xs={12}>
        <div>
          <span className={classes.title}>Start New Order</span>
        </div>
        <OrderDemo
          alert_heading_first="To start a new order, begin by using the fields below to identifying who the order will be for. You can select from existing users (Existing Person) or new users (New Person) using the Shop For parameter."
          alert_heading_second="If you previously started a cart and did not complete it, you can select the link in the area above the person criteria using the Continue feature.This will redirected you back into that shopping session."
        />
        <Card lg={12} md={12} sm={12} xs={12} className={classes.bottom}>
          <div className=" ml-4 mr-4 mt-4 mb-4 border-bottom">
            <CardTitle tag="h5">
              <div>
                <span className={classes.subtitle}>Criteria</span>
              </div>
            </CardTitle>
          </div>
          <ListGroup>
            <OrderDemo
              item="warning"
              alert_filter_heading="Order already in progress."
              alert_filter_link="Continue"
            />
            <Col md={{size: 8, offset: 3}} className="mt-2">
              <FormGroup row>
                <Label md={2} className={classes.iterm}>
                  Order Date
                </Label>
                <Col md={7}>
                  <Input
                    id="datetime-local"
                    type="datetime-local"
                    className={`${classes.value} d-flex justify-content-end`}
                  />
                </Col>
              </FormGroup>
              <FormGroup row>
                <Label md={2} className={classes.iterm}>
                  Subject Type
                </Label>
                <Col md={7}>
                  <Input type="select">
                    <option>Customer</option>
                    <option>Consultant</option>
                  </Input>
                </Col>
              </FormGroup>
              <FormGroup row>
                <Label md={2} className={classes.iterm}>
                  Shop For
                </Label>
                <Col md={7}>
                  <Input type="select">
                    <option defaultValue="">New Person</option>
                    <option>Existing Person</option>
                  </Input>
                </Col>
              </FormGroup>
              <FormGroup row>
                <Label md={2} className={classes.iterm}>
                  Customer Status
                </Label>
                <Col md={7}>
                  <Input type="select">
                    <option defaultValue=""></option>
                    <option>Active</option>
                    <option>InActive</option>
                    <option>Cancelled</option>
                  </Input>
                </Col>
              </FormGroup>
              <FormGroup row>
                <Label md={2} className={classes.iterm}>
                  Classcification
                </Label>
                <Col md={7}>
                  <Input type="select">
                    <option defaultValue=""></option>
                    <option>Retail</option>
                    <option>Preferred</option>
                    <option>Guest</option>
                  </Input>
                </Col>
              </FormGroup>
              <FormGroup row>
                <Label md={2} className={classes.iterm}>
                  Country
                </Label>
                <Col md={7}>
                  <Input type="select">
                    <option defaultValue="">United States</option>
                  </Input>
                </Col>
              </FormGroup>
              <FormGroup row>
                <Label md={2} className={classes.iterm}>
                  State
                </Label>
                <Col md={7}>
                  <Input type="select">
                    <option defaultValue=""></option>
                    <option>Alabama</option>
                    <option>Alaska</option>
                    <option>AE</option>
                    <option>AP</option>
                    <option>Arizona</option>
                    <option>Arkansas</option>
                    <option>Califonia</option>
                    <option>Colorado</option>
                    <option>Connecticut</option>
                    <option>DC</option>
                    <option>Delaware</option>
                    <option>Florida</option>
                    <option>Georgia</option>
                    <option>Guam</option>
                  </Input>
                </Col>
              </FormGroup>
            </Col>
          </ListGroup>
        </Card>
        <div className=" d-flex  justify-content-end">
          <CommonButton onClick={routeChange} title="Start New Order" buttonType="addItemButton" />
        </div>
      </Col>
    </Row>
  )
}

CreateNewOrder.propTypes = {
  order: PropTypes.object,
  user: PropTypes.object,
  createCartWatcher: PropTypes.func,
}

const mapStateToProps = (state) => ({
  order: state.order,
  user: state.user,
})

const mapDispatchToProps = {createCartWatcher}

export default connect(mapStateToProps, mapDispatchToProps)(CreateNewOrder)
