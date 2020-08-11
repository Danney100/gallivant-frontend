import React from 'react'
import {CardBody, Card} from 'reactstrap'
import ScrollingMenu from 'routes/CustomerCenter/Customers/components/Navs/components/ScrollingMenu'

export const Navs = () => {
  return (
    <Card lg={12} md={12} sm={12} xs={12} className="mt-4 mb-5">
      <ScrollingMenu />
    </Card>
  )
}

export default Navs
