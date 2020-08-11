import React, {useEffect, useContext} from 'react'
import {makeStyles} from '@material-ui/styles'
import {Row, Col, Card, CardBody} from 'components'

import AppContext from 'components/App/AppContext'
import CommonDemo from 'routes/components/CommonDemo'
import CommonButton from 'routes/components/CommonButton'

import Heading from './components/Heading'
import DataTreeView from './components/DataTreeView'

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
  },
})

const DisplayCategoryManager = () => {
  const classes = useStyles()

  const context = useContext(AppContext)
  const {setTitle} = context

  useEffect(() => {
    setTitle('Product Configuration > Product Display Categories')
  }, [])

  return (
    <div className={`${classes.root} px-3 px-lg-0`}>
      <Heading />
      <CommonDemo
        wrapperClass="mx-0"
        content="To restructure categories, just drag and drop a category to its new location."
      />
      <Card>
        <CardBody>
          <span className="sub-title">Categories</span>
          <hr />
          <Row className="d-flex justify-content-end">
            <Col sm={10}>
              <DataTreeView />
            </Col>
          </Row>
        </CardBody>
      </Card>
      <Row className="my-4">
        <Col className="d-flex justify-content-lg-end mb-2">
          <CommonButton title="Cancel Changes" buttonType="cancelButton" />
        </Col>
        <Col sm="auto" className="d-flex justify-content-lg-end">
          <CommonButton title="Save Changes" buttonType="addItemButton" wrapperClass="ml-0" />
        </Col>
      </Row>
    </div>
  )
}

export default DisplayCategoryManager
