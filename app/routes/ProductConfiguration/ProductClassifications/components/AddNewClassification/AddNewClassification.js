import React, {useContext, useEffect} from 'react'
import {makeStyles} from '@material-ui/styles'
import {Row, Col, Card, CardBody} from 'reactstrap'
import {useHistory} from 'react-router-dom'
import AppContext from 'components/App/AppContext'
import CommonDemo from 'routes/components/CommonDemo'
import CommonButton from 'routes/components/CommonButton'
import ClassificationForm from './components/ClassificationForm'

const useStyles = makeStyles({
  root: {
    '& .title': {
      fontSize: '32px',
      color: '#403839',
      fontFamily: 'DINCondensed-Bold',
    },
    '& .sub-title': {
      fontFamily: 'DINCondensed-Bold',
      fontSize: '22px',
      fontWeight: 'bold',
      color: '#403839',
    },
    '& .pointer': {
      cursor: 'pointer',
    },
  },
})

const AddNewClassification = () => {
  const classes = useStyles()

  const context = useContext(AppContext)
  const {setTitle} = context
  useEffect(() => {
    setTitle('Product Configuration > Product Classification > Create New Classification')
  }, [])

  const history = useHistory()

  const routeChange = () => {
    history.push('/products/product-classification-manager')
  }

  return (
    <div className={`${classes.root} px-3 px-lg-0 mt-3 mt-lg-0`}>
      <span className="title">Create Product Classification</span>
      <Card className="my-3">
        <CardBody>
          <span className="sub-title">Basic Info</span>
          <hr />
          <CommonDemo
            wrapperClass="mx-0"
            content="A Product Classification is a logical grouping of products that support 
                    specific functional needs such as coupons, rewards, discounts, skywallet and trigger 
                    options. In the Product Classification Manger you can edit existing product 
                    classifications and create new ones."
            contentOne="Feature Guide Link "
            contentTwo={<i className="fa fas fa-long-arrow-right"></i>}
          />
          <ClassificationForm />
        </CardBody>
      </Card>
      <Row className="my-4">
        <Col className="d-flex justify-content-lg-end mb-2">
          <CommonButton title="Cancel" buttonType="cancelButton" onClick={routeChange} />
        </Col>
        <Col sm="auto" className="d-flex justify-content-lg-end">
          <CommonButton title="Save Changes" buttonType="addItemButton" wrapperClass="ml-0" />
        </Col>
      </Row>
    </div>
  )
}

export default AddNewClassification
