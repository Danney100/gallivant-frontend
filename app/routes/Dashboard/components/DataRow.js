import React from 'react'
import {Card, CardBody, Row, Col} from 'reactstrap'
import {makeStyles} from '@material-ui/styles'

const useStyles = makeStyles({
  root: {
    '&  .data-card': {
      borderRadius: '5px',
      boxShadow: ' 0 3px 15px 0 rgba(195, 185, 185, 0.12)',
      border: 'none',
      '& .card-body': {
        padding: '12px',
      },
      '& .title': {
        fontFamily: 'Oswald-Semibold',
        fontSize: '24px',
        fontWeight: '600',
        textAlign: 'left',
        color: '#423b3c',
      },
      '& .sub-title': {
        fontFamily: 'Oswald-Regular',
        fontSize: '14px',
        fontWeight: 'normal',
        lineHeight: '1.29',
        letterSpacing: '0.28px',
        textAlign: 'left',
        color: '#6c6766',
      },
    },
  },
})

const DataRow = () => {
  const classes = useStyles()

  return (
    <Row className={`pb-4 mt-sm-4 ${classes.root}`}>
      <Col sm="4">
        <Row className="h-100">
          <Col md="12" lg="6" className="mb-lg-0 mb-3">
            <Card className="h-100 data-card">
              <CardBody>
                <div className="title">205</div>
                <div className="sub-title">Orders Past 7 Days</div>
              </CardBody>
            </Card>
          </Col>
          <Col md="12" lg="6" className="mb-lg-0 mb-3">
            <Card className="h-100  data-card">
              <CardBody>
                <div className="title">$31,397.75</div>
                <div className="sub-title">Revenue Past 7 Days</div>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Col>
      <Col sm="4">
        <Row className="h-100">
          <Col md="12" lg="4" className="mb-lg-0 mb-3">
            <Card className="h-100  data-card">
              <CardBody>
                <div className="title">73</div>
                <div className="sub-title">Consultants Past 7 Days</div>
              </CardBody>
            </Card>
          </Col>
          <Col md="12" lg="4" className="mb-lg-0 mb-3">
            <Card className="h-100  data-card">
              <CardBody>
                <div className="title">159</div>
                <div className="sub-title">Customers Past 7 Days</div>
              </CardBody>
            </Card>
          </Col>
          <Col md="12" lg="4" className="mb-lg-0 mb-3">
            <Card className="h-100  data-card">
              <CardBody>
                <div className="title">0</div>
                <div className="sub-title">Leads Past 7 Days</div>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Col>
      <Col sm="4">
        <Row className="h-100">
          <Col md="12" lg="6" className="mb-lg-0 mb-3">
            <Card className="h-100  data-card">
              <CardBody>
                <div className="title">8244</div>
                <div className="sub-title">Total Consultants</div>
              </CardBody>
            </Card>
          </Col>
          <Col md="12" lg="6" className="mb-lg-0 mb-3">
            <Card className="h-100  data-card">
              <CardBody>
                <div className="title">194752</div>
                <div className="sub-title">Total Customers</div>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Col>
    </Row>
  )
}

export default DataRow
