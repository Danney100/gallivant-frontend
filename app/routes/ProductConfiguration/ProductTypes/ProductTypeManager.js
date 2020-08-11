import React, {useState, useContext, useEffect} from 'react'
import {makeStyles} from '@material-ui/styles'
import {Row, Col, Card, Input} from 'components'

import CommonDemo from 'routes/components/CommonDemo'
import iconSearch from 'images/commonIcons/search.svg'
import AppContext from 'components/App/AppContext'
import ProductTypeTable from './components/ProductTypeTable'
import Heading from './components/Heading'
import {CardBody} from 'reactstrap'

const useStyles = makeStyles({
  root: {
    '& .title': {
      fontSize: '32px',
      color: '#403839',
      fontFamily: 'DINCondensed-Bold',
    },
    '& .searchIcon': {
      backgroundImage: `url(${iconSearch})`,
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'right center',
      backgroundOrigin: 'content-box',
    },
    '& .sub-title': {
      fontFamily: 'DINCondensed-Bold',
      fontSize: '22px',
      fontWeight: 'bold',
      color: '#403839',
    },
  },
})

const ProductTypeManager = () => {
  const classes = useStyles()
  const [searchVal, setSearchVal] = useState('')

  const context = useContext(AppContext)
  const {setTitle} = context
  useEffect(() => {
    setTitle('Product Configuration > Product Types')
  }, [])

  return (
    <div className={`${classes.root} px-3 px-lg-0 mb-5`}>
      <Heading />
      <CommonDemo
        item="success"
        wrapperClass="mx-0"
        content="This is a help message based on the current active area."
        contentOne="Feature Guide Link "
        contentTwo={<i className="fa fas fa-long-arrow-right"></i>}
      />
      <Card className="">
        <CardBody className="p-0">
          <Row className="pl-4 pr-4 pt-4 pb-0">
            <Col>
              <span className="sub-title">Product Types</span>
            </Col>
            <Col xs="12" sm="4">
              <Input
                type="search"
                placeholder="search"
                onChange={(e) => setSearchVal(e.target.value)}
                className={`${!searchVal && 'searchIcon'}`}
              />
            </Col>
          </Row>
          <hr />
          <ProductTypeTable />
        </CardBody>
      </Card>
    </div>
  )
}

export default ProductTypeManager
