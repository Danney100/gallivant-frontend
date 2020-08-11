import React, {useEffect, useContext} from 'react'
import {Col, Card, Row, CardBody} from 'components'
import {useHistory} from 'react-router-dom'
import {makeStyles} from '@material-ui/styles'

import AppContext from 'components/App/AppContext'
import CommonDemo from 'routes/components/CommonDemo'
import CommonButton from 'routes/components/CommonButton'
import ProductTypeForm from './components/ProductTypeForm'

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

function AddProductType() {
  const classes = useStyles()

  const context = useContext(AppContext)
  const {setTitle} = context
  const history = useHistory()

  useEffect(() => {
    setTitle('Product Configuration > Product Types > Add Product Type')
  }, [])

  const routeChange = () => {
    history.push('/products/product-type-manager')
  }

  return (
    <div className={`${classes.root} px-3 px-lg-0 pt-3 pt-lg-0`}>
      <span className="title">New Product Type</span>
      <Card className="mb-3 mt-2">
        <CardBody>
          <span className="sub-title">Basic Info</span>
          <hr />
          <CommonDemo
            wrapperClass="mx-0"
            content="Create/edit a product type. You can set 
                    the name of the type and an optional description."
            contentOne="Feature Guide Link "
            contentTwo={<i className="fa fas fa-long-arrow-right"></i>}
          />
          <ProductTypeForm />
        </CardBody>
      </Card>
      <Row className="my-4">
        <Col className="d-flex justify-content-lg-end mb-2">
          <CommonButton
            title="Cancel"
            buttonType="cancelButton"
            onClick={routeChange}
            wrapperClass="m-0"
          />
        </Col>
        <Col sm="auto" className="d-flex justify-content-lg-end">
          <CommonButton title="Save Changes" buttonType="addItemButton" wrapperClass="ml-0" />
        </Col>
      </Row>
    </div>
  )
}

export default AddProductType
