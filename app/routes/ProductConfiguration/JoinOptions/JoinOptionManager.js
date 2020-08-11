import React, {useContext, useEffect} from 'react'
import {Row, Col, Card, CardBody} from 'reactstrap'
import {useHistory} from 'react-router-dom'
import {makeStyles} from '@material-ui/core/styles'
import CommonButton from 'routes/components/CommonButton'
import CommonDemo from 'routes/components/CommonDemo'
import AppContext from 'components/App/AppContext'
import JoinOptionTable from './components/JoinOptionTable'
import iconSearch from 'images/commonIcons/search.svg'
import Heading from './components/Heading'

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
    '& .show-expired': {
      fontSize: '14px',
      
      fontWeight: 500,
      lineHeight: 1.43,
      fontFamily: 'SFUIText-Medium',
    },
  },
})
const JoinOptionManager = () => {
  const history = useHistory()
  const classes = useStyles()
  const routeChange = () => {
    history.push('/join/join-option-edit')
  }
  const context = useContext(AppContext)
  const {setTitle} = context

  useEffect(() => {
    setTitle('Join Option Management')
  }, [])

  return (
    <div className={`${classes.root} px-3 px-lg-0 mb-4`}>
      <Heading/>
      <Card>
        <CardBody>
          <CommonDemo
            item="danger"
            content="A join option configuration is assigned to a product to enable that product 
            in the join process, along with rules configured for the configuration. The join option 
            management page includes each join option configuration that has been created in the 
            application. To enable or disable a join option configuration use the Enabled checkbox 
            and Save Changes. A join option configuration needs to be enabled to be available for 
            assignment to a product."
            contentOne="Feature Guide Link "
            contentTwo={<i className="fa fas fa-long-arrow-right"></i>}
            wrapperClass="mx-0"
          />
          </CardBody>
          <JoinOptionTable />
      </Card>
      <Row className="my-4">
        <Col className="d-flex justify-content-sm-end mb-2">
          <CommonButton title="Cancel" buttonType="cancelButton" wrapperClass="ml-0" width={180} height={40}/>
        </Col>
        <Col sm="auto" className="d-flex justify-content-sm-end mb-2">
          <CommonButton title="Save" buttonType="addItemButton" wrapperClass="ml-0" width={180} height={40}/>
        </Col>
        <Col sm={12} md="auto" className="d-flex justify-content-sm-end">
          <CommonButton title="Save & Close Back Orders" buttonType="addItemButton" wrapperClass="ml-0" width={253} height={40} />
        </Col>
      </Row>
    </div>
  )
}

export default JoinOptionManager
