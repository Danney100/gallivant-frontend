import React, {useState, useEffect, useContext} from 'react'
import {makeStyles} from '@material-ui/styles'
import {Card, CardBody, Input, Col, Row} from 'reactstrap'

import AppContext from 'components/App/AppContext'
import CommonDemo from 'routes/components/CommonDemo'
import Heading from './components/Heading'
import ClassificationsTable from './components/ClassificationsTable'
import iconSearch from 'images/commonIcons/search.svg'

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

const ProductClassificationManager = () => {
  const classes = useStyles()
  const [searchVal, setSearchVal] = useState('')

  const context = useContext(AppContext)
  const {setTitle} = context
  useEffect(() => {
    setTitle('Product Configuration >  Product Classification')
  }, [])

  return (
    <div className={`${classes.root} px-3 px-lg-0`}>
      <Heading />
      <CommonDemo
        item="success"
        wrapperClass="mx-0"
        content="A Product Classification is a logical grouping of products that support 
            specific functional needs such as coupons, rewards, discounts, skywallet and trigger 
            options. In the Product Classification Manger you can edit existing product 
            classifications and create new ones."
        contentOne="Feature Guide Link "
        contentTwo={<i className="fa fas fa-long-arrow-right"></i>}
      />
      <Card className="my-3">
        <CardBody className="p-0">
          <Row className="pl-4 pr-4 pt-4 pb-0">
            <Col xs="12" lg="9">
              <span className="sub-title">Product Classifications</span>
            </Col>
            <Col xs="8" sm="8" md="5" lg="3">
              <Input
                type="search"
                placeholder="search"
                onChange={(e) => setSearchVal(e.target.value)}
                className={`${!searchVal && 'searchIcon'}`}
              />
            </Col>
          </Row>
          <hr />
          <ClassificationsTable />
        </CardBody>
      </Card>
    </div>
  )
}

export default ProductClassificationManager
