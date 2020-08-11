import React from 'react'
import {Card, CardHeader, CardBody, CardText} from 'reactstrap'

const ResidentsCard = () => {
  return (
    <div className="mb-3">
      <Card>
        <CardHeader className="bg-primary text-white">
          California Residents - PROP 65 WARNING
        </CardHeader>
        <CardBody>
          <CardText>
            WARNING: Drinking distilled spirits, beer, coolers, wine and other alcoholic beverages
            may increase cancer risk, and, during pregnancy, can cause birth defects. For more
            information go to www.P65Warnings.ca.gov/alcohol.
          </CardText>
        </CardBody>
      </Card>
    </div>
  )
}

export default ResidentsCard
