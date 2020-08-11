import React, {useContext, useEffect} from 'react'
import {
  Row,
  Col,
  Button,
  Card,
  FormGroup,
  Label,
  Input,
  Form,
  CardHeader,
  CardBody,
  CustomInput,
} from 'reactstrap'
import {useHistory} from 'react-router-dom'
import AppContext from 'components/App/AppContext'
import {useState} from 'react'
import Select from 'react-select'
import SubscriptionGroup from './SubscriptionGroup'

const AddJoinOption = () => {
  const context = useContext(AppContext)
  const {setTitle} = context

  const [subscriptionGrpCount, setSubscriptionGrpCount] = useState(1)

  const history = useHistory()

  useEffect(() => {
    setTitle('Generate Gift Cards')
  }, [])

  const starting_rank = [
    {label: ' Consultant', value: 1},
    {label: '  Senior Consultant', value: 2},
    {label: '  Executive Consultant', value: 3},
    {label: '  Associate Manager', value: 4},
    {label: '  Senior Manager', value: 5},
    {label: '  Executive Manager', value: 6},
    {label: '  Associate Director', value: 7},
    {label: '  Director', value: 8},
    {label: '  Senior Director', value: 9},
    {label: '  Executive Director', value: 10},
    {label: '  Managing Director', value: 11},
  ]

  const starting_status = [
    {label: '  Active', value: 1},
    {label: '  Inactive', value: 2},
    {label: '  Hold', value: 3},
    {label: '  Suspended', value: 4},
    {label: '  Financial Hold', value: 5},
    {label: '  Cancelled', value: 6},
    {label: '  Incomplete', value: 7},
  ]

  const routeChange = () => {
    history.push('/products/product-classification-manager')
  }

  const addSubscriptionGrp = () => {
    setSubscriptionGrpCount((prevState) => prevState + 1)
  }

  const removeSubscriptionGrp = () => {
    if (subscriptionGrpCount > 0) {
      setSubscriptionGrpCount((prevState) => prevState - 1)
    }
  }

  const renderSubscriptionGroups = () => {
    let grps = []
    for (let i = 0; i < subscriptionGrpCount; i++) {
      grps.push(
        <SubscriptionGroup
          key={i}
          id={i}
          addSubscriptionGrp={addSubscriptionGrp}
          removeSubscriptionGrp={removeSubscriptionGrp}
        />,
      )
    }
    return grps
  }

  return (
    <div className="container-fluid p-0 mt-2">
      <Card>
        <Row className="border text-black m-0 p-2 rounded">
          <Col lg={1} sm={1} xs={2} className="text-center">
            <span className="fa-stack fa-lg">
              <i className="fa fas fa-question-circle fa-2x text-warning"></i>
            </span>
          </Col>
          <Col sm={11} lg={11} xs={10}>
            <span>
              Join options are constructs that are used to offer products to consultants when they
              join. Fill out the below to define the construct. Under join subscription groups,
              assign products to your join option to make them available to consultants.
            </span>
          </Col>
          <Col lg={12} className="my-auto text-right">
            <span>Features Guide Link</span>
          </Col>
        </Row>
      </Card>
      <Card className="my-3 rounded">
        <CardHeader className="bg-primary text-white">
          <Row>
            <Col lg={6} xs={6} sm={6}>
              Create/Edit Join Option
            </Col>
          </Row>
        </CardHeader>
        <CardBody className="py-2">
          <Form>
            <FormGroup row>
              <Label for="name" sm={4} className="text-dark text-lg-right">
                Join Option Name
              </Label>
              <Col sm={5}>
                <Input type="text" name="text" id="name" />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for="description" sm={4} className="text-dark text-lg-right">
                Join Option Description
              </Label>
              <Col sm={5}>
                <Input type="textarea" name="text" id="description" />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for="enabled" sm={4} className="text-dark text-lg-right">
                Join Option Enabled
              </Label>
              <Col className="mt-1">
                <CustomInput type="checkbox" id="enabled" />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for="payment_options" sm={4} className="text-dark text-lg-right">
                Hide Payment Options
              </Label>
              <Col className="mt-1">
                <CustomInput type="checkbox" id="payment_options" />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for="starting_type" sm={4} className="text-dark text-lg-right">
                Starting Type
              </Label>
              <Col sm={5} className="mt-1">
                <Select
                  options={[
                    {label: 'Consultant', value: 1},
                    {label: 'Circle Consultant', value: 2},
                  ]}
                />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for="starting_rank" sm={4} className="text-dark text-lg-right">
                Starting Rank
              </Label>
              <Col sm={5} className="mt-1">
                <Select options={starting_rank} />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for="starting_status" sm={4} className="text-dark text-lg-right">
                Starting Status
              </Label>
              <Col sm={5} className="mt-1">
                <Select options={starting_status} />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for="site_active" sm={4} className="text-dark text-lg-right">
                Replicated Site Active
              </Label>
              <Col className="mt-1">
                <CustomInput type="checkbox" id="site_active" />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for="portal_access" sm={4} className="text-dark text-lg-right">
                Portal Access
              </Label>
              <Col className="mt-1">
                <CustomInput type="checkbox" id="portal_access" />
              </Col>
            </FormGroup>
          </Form>
        </CardBody>
      </Card>
      <Row className="mt-3 m-2">
        <Col lg={12} xs={12} sm={12} className="p-0 mt-3">
          <Card>
            <CardHeader className="bg-primary text-white">
              <Row>
                <Col lg={6} xs={6} sm={6}>
                  Join Subscription Groups
                </Col>
              </Row>
            </CardHeader>
            <CardBody className="pt-0">
              {subscriptionGrpCount === 0 && (
                <Row className="justify-content-center mt-2">
                  <span
                    onClick={addSubscriptionGrp}
                    className="badge badge-light"
                    style={{cursor: 'pointer'}}>
                    Add a Subscription Group
                  </span>
                </Row>
              )}
              {renderSubscriptionGroups()}
            </CardBody>
          </Card>
        </Col>
        <Col xs={6} lg={6} className="mt-3 pl-0">
          <Button color="danger" onClick={routeChange}>
            <i className="fa fa-fw fa-times-circle-o" aria-hidden="true"></i>Cancel Changes
          </Button>
        </Col>
        <Col xs={6} lg={6} className="text-right mt-3 pr-0">
          <Button color="success" onClick={routeChange}>
            <i className="fa fa-fw fa-check-circle-o" aria-hidden="true"></i>Save Changes
          </Button>
        </Col>
      </Row>
    </div>
  )
}

export default AddJoinOption
