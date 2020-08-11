import React, {useEffect, useState} from 'react'
import {
  Row,
  Col,
  Card,
  CardBody,
  Pagination,
  PaginationItem,
  PaginationLink,
  FormGroup,
  Modal,
  ModalHeader,
  ModalBody,
  Form,
  Button,
  Label,
  Input,
  ListGroupItem,
  Media,
} from 'reactstrap'
import {makeStyles} from '@material-ui/core/styles'
import {NavLink as Link} from 'react-router-dom'

import CommonButton from 'routes/components/CommonButton'
import SearchDetails from './SearchDetails'
import {useDispatch, useSelector} from 'react-redux'
import {getConsultantDetails} from 'api'
import {setConsultantDetails} from 'duck/actions/consultant'
import {
  Dropdown,
  DropdownMenu,
  DropdownItem,
  DropdownToggle,
  NestedDropdown,
} from '../../../../components'
const useStyles = makeStyles({
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#403839',
  },
  media: {
    backgroundColor: '#ccf2ff',
    borderRadius: 50,
    width: 30,
    height: 30,
    textAlign: 'center',
    paddingTop: 3,
  },
  title1: {
    fontSize: 22,
    fontWeight: 'DINCondensed-Bold',
    color: '#e94b35',
  },
  title2: {
    fontSize: 22,
    fontWeight: 'DINCondensed-Bold',
    color: '#403839',
  },
  advanced: {
    borderColor: 'white',
    backgroundColor: 'white',
    fontSize: 14,
    fontFamily: 'SFUIText-Semibold',
    color: '#27BFA3',
  },
  advanced1: {
    fontSize: 14,
    fontFamily: 'SFUIText-Semibold',
    color: '#e94b35',
  },
  enroller: {
    fontSize: 14,
    fontFamily: 'SFUIText-Medium',
    color: '#6c6766',
  },
  note: {
    fontSize: 22,
    fontFamily: 'DINCondensed-Bold',
    color: '#403839',
  },
  sub: {
    fontSize: 14,
    fontFamily: 'SFUIText-Semibold',
    color: '#403839',
  },
  advanced2: {
    backgroundColor: 'white',
    fontSize: 14,
    fontFamily: 'SFUIText-Semibold',
    color: '#423b3c',
  },
  demos: {
    marginTop: 20,
    marginBottom: 20,
    borderLeftWidth: 5,
    borderLeftColor: '#1EB7FF',
  },
  Radius: {
    borderRadius: 6,
  },
  imageSize: {
    height: 25,
    padding: 3,
    marginRight: 8,
  },
  buttonSize: {
    cursor: 'pointer',
    padding: 4,
    width: 130,
  },
  imgSize: {
    width: 25,
    height: 25,
    borderRadius: 50,
    backgroundColor: '#E6E0DD',
  },
  addButton: {
    backgroundColor: '#27BFA3',
    borderColor: '#27BFA3',
    '&:hover': {
      backgroundColor: '#27BFA3 !important',
      borderColor: '#27BFA3 !important',
    },
    '&:focus': {
      backgroundColor: '#27BFA3 !important',
      borderColor: '#27BFA3 !important',
    },
    width: 180,
  },
  cancelButton: {
    backgroundColor: '#6C6766',
    borderColor: '#6C6766',
    '&:hover': {
      backgroundColor: '#6C6766 !important',
      borderColor: '#6C6766',
    },
    '&:focus': {
      backgroundColor: '#6C6766 !important',
      borderColor: '#6C6766',
    },
    width: 140,
    height: 40,
    fontSize: 13,
  },
  continueButton: {
    backgroundColor: '#e94b35',
    borderColor: '#e94b35',
    '&:hover': {
      backgroundColor: '#e94b35 !important',
      borderColor: '#e94b35',
    },
    '&:focus': {
      backgroundColor: '#e94b35 !important',
      borderColor: '#e94b35',
    },
    width: 140,
    height: 40,
    fontSize: 13,
  },
  content: {
    fontSize: 14,
    fontFamily: 'SFUIText-Semibold',
    color: '#6c6766',
  },
  saveButton: {
    backgroundColor: '#27BFA3',
    borderColor: '#27BFA3',
    '&:hover': {
      backgroundColor: '#27BFA3 !important',
      borderColor: '#27BFA3',
    },
    '&:focus': {
      backgroundColor: '#27BFA3 !important',
      borderColor: '#27BFA3',
    },
    width: 140,
    height: 40,
    fontSize: 13,
  },
  check: {
    fontFamily: 'SFUIText-Semibold',
    fontSize: 14,
    color: '#de8b6d',
    marginBottom: 20,
  },
})

export const ConsultantSearch = (props) => {
  const consultantToDisplay = useSelector(({consultant}) => consultant.get('consultantToDisplay'))
  const token = useSelector(({user}) => user.get('token'))
  const [isOpen, setIsOpen] = useState(false)

  const dispatch = useDispatch()
  const toggle = () => {
    setIsOpen(!isOpen)
  }
  useEffect(() => {
    const payload = {
      id: consultantToDisplay,
      token: token,
    }
    if (consultantToDisplay) {
      getConsultantDetails(payload)
        .then((res) => {
          if (!res?.hasError) {
            dispatch(setConsultantDetails(res))
          }
        })
        .catch((err) => console.log(err))
    }
  }, [consultantToDisplay])
  const {buttonLabel, className} = props

  const [modal1, setModal1] = useState(false)
  const [modal2, setModal2] = useState(false)
  const [modal3, setModal3] = useState(false)
  const [modal4, setModal4] = useState(false)

  const toggle1 = () => setModal1(!modal1)
  const toggle2 = () => setModal2(!modal2)
  const toggle3 = () => setModal3(!modal3)
  const toggle4 = () => setModal4(!modal4)
  const classes = useStyles()
  const [closeAll, setCloseAll] = useState(false)

  const closeBtn1 = (
    <button className="close" onClick={toggle1}>
      &times;
    </button>
  )
  const closeBtn2 = (
    <button className="close" onClick={toggle2}>
      &times;
    </button>
  )
  const closeBtn3 = (
    <button className="close" onClick={toggle3}>
      &times;
    </button>
  )
  const closeBtn4 = (
    <button className="close" onClick={toggle4}>
      &times;
    </button>
  )
  const DemoOne =
    'To update a persons genealogy relationship, use the manager below. Each genealogy relationship associated with the person that can be changed will be displayed. Type in the ID associated with the new person you are moving the selected person under. The ID entered needs to be associated with a person type in the selected genealogy. For example, you cannot set a consultants enroller as a customer.'
  return (
    <div className="mt-2">
      <Row>
        <Col md={12} sm={12} xs={12}>
          <div className="d-flex justify-content-end mb-4">
            <CommonButton title="Edit Consultant" buttonType="saveButton" />
          </div>
          <Card lg={12} md={12} sm={12} xs={12}>
            <CardBody>
              <div>
                <Modal isOpen={modal1} toggle={toggle1}>
                  <ModalHeader toggle={toggle1} close={closeBtn1} className="border-bottom">
                    <p className={classes.title1}>Cancel Consultant</p>
                  </ModalHeader>
                  <ModalBody>
                    <Form>
                      <p className={classes.content}>
                        Are you sure you wish to cancel this customer? Any active subscriptions
                        associated with this customer will be expired.
                      </p>
                    </Form>
                    <Row className="d-flex justify-content-between">
                      <Col className="d-flex justify-content-start">
                        <Button onClick={toggle1} className={classes.cancelButton}>
                          Cancel
                        </Button>
                      </Col>
                      <Col className="d-flex justify-content-end">
                        <Button className={classes.continueButton}>Continue</Button>
                      </Col>
                    </Row>
                  </ModalBody>
                </Modal>
              </div>
              <div>
                <Modal isOpen={modal2} toggle={toggle2}>
                  <ModalHeader toggle={toggle2} className="border-bottom" close={closeBtn2}>
                    <p className={classes.title2}>Change Genealogy</p>
                  </ModalHeader>
                  <ModalBody>
                    <div className={classes.Radius}>
                      <ListGroupItem className={classes.demos}>
                        <Media>
                          <Media>
                            <div className={classes.media}>
                              <i className="fa fas fa-check text-primary"></i>
                            </div>
                          </Media>
                          <Media className="ml-4">
                            <span className="text-dark">
                              <p>{DemoOne}</p>
                            </span>
                          </Media>
                        </Media>
                      </ListGroupItem>
                    </div>
                    <Form className="mx-3">
                      <FormGroup row>
                        <Label for="input" sm={4}>
                          Genealogy
                        </Label>
                        <Col sm={8}>
                          <Label lg={6}>From</Label>
                          <Label lg={6}>To</Label>
                        </Col>
                      </FormGroup>
                      <FormGroup row>
                        <Label for="input" sm={4}>
                          Enroller
                        </Label>
                        <Col sm={8}>
                          <Row>
                            <Col lg={6} className="mb-3">
                              <p className={classes.enroller}>
                                1001 Corporate Account (Honolulu, Hawaii)
                              </p>
                            </Col>
                            <Col lg={6}>
                              <Input type="select" className="mb-2">
                                <option>Consultant</option>
                              </Input>
                              <Input type="text"></Input>
                            </Col>
                          </Row>
                        </Col>
                      </FormGroup>
                      <FormGroup row>
                        <Label for="input" sm={4} className="d-flex">
                          Sponsor
                        </Label>
                        <Col sm={8}>
                          <Row>
                            <Col lg={6} className="mb-2 ">
                              <p className={classes.enroller}>
                                1001 Corporate Account (Honolulu, Hawaii)
                              </p>
                            </Col>
                            <Col lg={6}>
                              <Input type="text"></Input>
                            </Col>
                          </Row>
                        </Col>
                      </FormGroup>
                      <FormGroup row>
                        <Label for="input" sm={4} className="d-flex">
                          Note
                        </Label>
                        <Col sm={8}>
                          <Input></Input>
                        </Col>
                      </FormGroup>
                    </Form>
                    <Row>
                      <Col>
                        <Button onClick={toggle2} className={classes.cancelButton}>
                          Cancel
                        </Button>
                      </Col>
                      <Col className="pagination justify-content-end">
                        <Button onClick={toggle2} className={classes.saveButton}>
                          Save
                        </Button>
                      </Col>
                    </Row>
                  </ModalBody>
                </Modal>
              </div>
              <div>
                <Modal isOpen={modal3} toggle={toggle3}>
                  <ModalHeader toggle={toggle3} close={closeBtn3} className="border-bottom">
                    <p className={classes.note}>Create Customer from Consultant</p>
                  </ModalHeader>
                  <ModalBody>
                    <Form>
                      <p className={classes.content}>
                        Are you sure you wish to create a new customer from this consultant?
                      </p>
                    </Form>
                    <FormGroup row>
                      <Label for="input" sm={2}>
                        Username
                      </Label>
                      <Col sm={10}>
                        <Input></Input>
                      </Col>
                    </FormGroup>
                    <Row className="d-flex justify-content-between">
                      <Col className="d-flex justify-content-start">
                        <Button onClick={toggle1} className={classes.cancelButton}>
                          Cancel
                        </Button>
                      </Col>
                      <Col className="d-flex justify-content-end">
                        <Button className={classes.saveButton}>Create</Button>
                      </Col>
                    </Row>
                  </ModalBody>
                </Modal>
              </div>
              <div>
                <Modal isOpen={modal4} toggle={toggle4}>
                  <ModalHeader toggle={toggle4} close={closeBtn4} className="border-bottom">
                    <p className={classes.note}>Add New Note</p>
                  </ModalHeader>
                  <ModalBody>
                    <Form>
                      <FormGroup row>
                        <Label for="input" sm={2} className="d-flex justify-content-start">
                          <p className={classes.sub}>Subject</p>
                        </Label>
                        <Col sm={4}>
                          <Input type="text"></Input>
                        </Col>
                        <Label for="input" sm={2} className="d-flex justify-content-start">
                          <p className={classes.sub}>Type</p>
                        </Label>
                        <Col sm={4}>
                          <Input type="select" className="rounded-0"></Input>
                        </Col>
                      </FormGroup>
                      <FormGroup row>
                        <Label for="input" sm={2} className="d-flex justify-content-start">
                          <p className={classes.sub}>Note</p>
                        </Label>
                        <Col sm={10}>
                          <Input className="rounded-0"></Input>
                        </Col>
                      </FormGroup>
                      <FormGroup row>
                        <Label for="input" sm={2} className="d-flex justify-content-start"></Label>
                        <Col sm={8} className={`${classes.check} ml-3`}>
                          <Input type="checkbox" />
                          Display As Message
                        </Col>
                      </FormGroup>
                    </Form>
                    <Row>
                      <Col>
                        <Button className={classes.cancelButton}>Cancel</Button>
                      </Col>
                      <Col className="pagination justify-content-end">
                        <Button className={classes.saveButton}>Save</Button>
                      </Col>
                    </Row>
                  </ModalBody>
                </Modal>
              </div>
              <Row className="d-flex justify-content-between border-bottom ">
                <Col sm="12" md={{size: 6, offset: 0}} className=" d-flex justify-content-start">
                  <p className={classes.title}>Consultant:courtney bono</p>
                </Col>
                <Col className="d-flex justify-content-end">
                  <FormGroup row>
                    <Col className="d-flex justify-content-center justify-content-lg-start">
                      <Dropdown isOpen={isOpen} toggle={toggle}>
                        <DropdownToggle caret className={`${classes.advanced}`}>
                          Advanced Options
                        </DropdownToggle>
                        <DropdownMenu>
                          <DropdownItem className={classes.advanced2}>Go to Portal</DropdownItem>
                          <DropdownItem className={classes.advanced2}>Financials</DropdownItem>
                          <DropdownItem className={classes.advanced2}>Downlines</DropdownItem>
                          <DropdownItem
                            onClick={toggle2}
                            className={`${classes.advanced2} bg-white border-0 text-dark`}>
                            Change Genealogy
                          </DropdownItem>
                          <DropdownItem className={classes.advanced2}>
                            Qualification Overrides
                          </DropdownItem>
                          <DropdownItem className={classes.advanced2}>
                            Metric Overrides
                          </DropdownItem>
                          <DropdownItem onClick={toggle3} className={classes.advanced2}>
                            Create Customer from Consultant
                          </DropdownItem>
                          <DropdownItem onClick={toggle4} className={classes.advanced2}>
                            Add New
                          </DropdownItem>
                          <hr className="w-70 mx-auto my-2" />
                          <DropdownItem onClick={toggle1} className={classes.advanced1}>
                            Cancel Consultant
                          </DropdownItem>
                        </DropdownMenu>
                      </Dropdown>
                    </Col>
                    <Col>
                      <Pagination aria-label="Page navigation example">
                        <PaginationItem>
                          <PaginationLink className="font-weight-bold " first />
                        </PaginationItem>
                        <PaginationItem>
                          <PaginationLink className="font-weight-bold " previous />
                        </PaginationItem>
                        <PaginationItem>
                          <PaginationLink className="font-weight-bold " next />
                        </PaginationItem>
                        <PaginationItem>
                          <PaginationLink className="font-weight-bold " last />
                        </PaginationItem>
                      </Pagination>
                    </Col>
                  </FormGroup>
                </Col>
              </Row>
              <SearchDetails />
            </CardBody>
          </Card>
        </Col>
      </Row>
    </div>
  )
}

export default ConsultantSearch
