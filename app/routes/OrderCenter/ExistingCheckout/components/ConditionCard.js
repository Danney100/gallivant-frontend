import React from 'react'
import {Card, Input, Label, CardHeader, CardBody, CardText} from 'reactstrap'

const ConditionCard = () => {
  return (
    <div className="mb-3">
      <Card>
        <CardHeader className="bg-primary text-white">Terms and Conditions</CardHeader>
        <CardBody>
          <CardText>
            These Terms of Use apply to your use of the Scout & Cellar site at ScoutandCellar.com
            (the “Site”), and to content, information, products, services and materials on the Site
            (collectively, “Content”). Read the full Terms and Conditions here.
          </CardText>
          <Label check>I have read and agree to the Terms of Use</Label>
          <Input type="checkbox" className="ml-2" />
        </CardBody>
      </Card>
    </div>
  )
}

export default ConditionCard
