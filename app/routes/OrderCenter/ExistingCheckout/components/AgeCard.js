import React from 'react'
import {Card, Input, Label, CardHeader, CardBody} from 'reactstrap'

const AgeCard = () => {
  return (
    <div className="mb-3">
      <Card>
        <CardHeader className="bg-primary text-white">Age Verification</CardHeader>
        <CardBody>
          <Label check>I am at least 21 years of age</Label>
          <Input type="checkbox" className="ml-2" />
        </CardBody>
      </Card>
    </div>
  )
}

export default AgeCard
