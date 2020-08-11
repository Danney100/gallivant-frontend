import React, {useContext, useEffect} from 'react'
import {Row, Col} from 'reactstrap'
import {useHistory} from 'react-router-dom'
import {makeStyles} from '@material-ui/styles'

import CommonButton from 'routes/components/CommonButton'
import AppContext from 'components/App/AppContext'
import BasicInfo from './components/BasicInfo'
import ShoppingCarts from './components/ShoppingCarts'

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
    '& .label': {
      fontFamily: 'SFUIText-Semibold',
      fontSize: '14px',
      fontWeight: 600,
      color: '#403839',
    },
    '& .checkbox': {
      marginBottom: '0.2rem',
    },
    '& .active': {
      color: '#de8b6d',
      fontFamily: 'SFUIText-Semibold',
      fontSize: '14px',
      fontWeight: 600,
    },
  },
})

const AddDisplayCategory = () => {
  const classes = useStyles()
  const context = useContext(AppContext)
  const {setTitle} = context

  useEffect(() => {
    setTitle('Product Configuration > Product Display Categories > Add New Display Category')
  }, [])
  const history = useHistory()

  const routeChange = () => {
    history.push('/products/display-category-manager')
  }

  return (
    <div className={`${classes.root} px-3 px-lg-0`}>
      <div className="d-flex mt-3 mt-lg-0">
        <h2 className="title">Create Display Category</h2>
      </div>
      <BasicInfo />
      <ShoppingCarts />
      <Row className="my-4">
        <Col className="d-flex justify-content-lg-end mb-2">
          <CommonButton
            title="Cancel"
            buttonType="cancelButton"
            onClick={routeChange}
            wrapperClass="ml-0"
          />
        </Col>
        <Col sm="auto" className="d-flex justify-content-lg-end">
          <CommonButton title="Save" buttonType="addItemButton" wrapperClass="ml-0" />
        </Col>
      </Row>
    </div>
  )
}

export default AddDisplayCategory
