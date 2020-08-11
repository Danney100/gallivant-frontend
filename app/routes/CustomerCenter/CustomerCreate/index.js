import React, {useContext, useEffect, useState} from 'react'
import {Row, Col} from 'reactstrap'
import CommonButton from 'routes/components/CommonButton'
import AppContext from 'components/App/AppContext'
import {makeStyles} from '@material-ui/core/styles'
import {useForm} from 'react-hook-form'
import {useSelector, useDispatch} from 'react-redux'
import DemoData from './components/DemoData.json'
import ConfirmAddressModal from './components/ConfirmAddressModal'
import {customerSignup} from 'api'
import * as util from 'helpers/util'
import {createCustomerAddress} from 'api'
import {setLoadingStatus} from 'duck/actions/process'
import {useHistory} from 'react-router-dom'

import Name from './components/Name'
import MailingAddress from './components/MailingAddress'
import ContactInfo from './components/ContactInfo'
import OtherInfo from './components/OtherInfo'
import CreditCard from './components/CreditCard'

const useStyles = makeStyles({
  title: {
    color: '#403839',
    fontSize: 32,
    fontFamily: 'DINCondensed-Bold',
  },
})

const CustomerCreate = () => {
  const user = useSelector(({user}) => user)
  const [demoTrigger, setDemoTrigger] = useState(false)
  const [modalTrigger, setModalTrigger] = useState(false)
  const [redirect, setRedirect] = useState(true)
  const {register, errors, handleSubmit, getValues, reset} = useForm()
  const history = useHistory()
  const dispatch = useDispatch()

  const handleSaveNew = () => {
    setModalTrigger(true)
  }

  const handleSaveAnother = () => {
    setRedirect(true)
    setModalTrigger(true)
  }

  const handleAddNewCustomer = (data) => {
    const token = user.get('token')
    setModalTrigger(!modalTrigger)

    data['ssn'] = parseInt(data['ssn'])

    let shipping_address = {
      ...data.shipping_address,
      first_name: data.first_name,
      last_name: data.last_name,
      company_name: data.company_name,
    }

    let path = '/customer-center'

    dispatch(setLoadingStatus(true))
    customerSignup(data)
      .then((res) => {
        if (!res?.hasError) {
          const addressPayload = {
            customerID: res.id,
            data: shipping_address,
            token: token,
          }
          createCustomerAddress(addressPayload).then((res) => {
            if (!res?.hasError) {
              reset()
              util.showInfoNotification('customer created successfully')
              if (redirect) {
                history.push(path)
              }
            } else {
              util.showErrorNotification(res.response.data.message)
            }
          })
        } else {
          util.showErrorNotification(res.response.data.message)
        }
      })
      .then(() => {
        dispatch(setLoadingStatus(false))
      })
      .catch((err) => console.log(err))
  }

  const classes = useStyles()
  const context = useContext(AppContext)
  const {setTitle} = context

  const routeChange = (path) => {
    history.push(path)
  }
  useEffect(() => {
    setTitle('Customer Center > Create Customer')
  }, [])

  return (
    <div className="p-2">
      <Row className="d-flex justify-content-between">
        <Col lg={{size: 3}} className="d-flex align-items-center">
          <p className={classes.title}>Create Customer</p>
        </Col>
        <Col lg="6" className="d-flex justify-content-end mb-2">
          <CommonButton
            onClick={() => setDemoTrigger(!demoTrigger)}
            title="Demo Data"
            buttonType="saveButton"
          />
          <CommonButton
            onClick={() => routeChange('/customer-center/customer-create/translate')}
            title="Translate"
            buttonType="saveButton"
          />
        </Col>
      </Row>
      <Row>
        <Col>
          <Name
            DemoData={DemoData.Name}
            demoTrigger={demoTrigger}
            register={register}
            errors={errors}
          />
          <MailingAddress
            DemoData={DemoData.MailingAddress}
            demoTrigger={demoTrigger}
            register={register}
            errors={errors}
          />
          <ContactInfo
            DemoData={DemoData.ContactInfo}
            demoTrigger={demoTrigger}
            register={register}
            errors={errors}
          />
          <OtherInfo
            DemoData={DemoData.OtherInfo}
            demoTrigger={demoTrigger}
            register={register}
            errors={errors}
            getValues={getValues}
          />
          <CreditCard DemoData={DemoData.CreditCard} demoTrigger={demoTrigger} />
            <ConfirmAddressModal
              trigger={modalTrigger}
              setModalTrigger={setModalTrigger}
              getValues={getValues}
              handleSubmit={handleSubmit}
              handleAddNewCustomer={handleAddNewCustomer}
            />
          <Row className="d-flex justify-content-end mb-5">
            <Col lg={{size: 3}} xl={{size: 2}} className="d-flex justify-content-center mb-2">
              <CommonButton title="Cancel" buttonType="cancelItemButton" />
            </Col>
            <Col lg={{size: 3}} xl={{size: 2}} className="d-flex justify-content-center mb-2">
              <CommonButton
                onClick={handleSubmit(handleSaveAnother)}
                title="Save and Add Another"
                buttonType="addItemButton"
              />
            </Col>
            <Col lg={{size: 3}} xl={{size: 2}} className="d-flex justify-content-center mb-2">
              <CommonButton
                onClick={handleSubmit(handleSaveNew)}
                title="Save New Customer"
                buttonType="addItemButton"
              />
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  )
}

export default CustomerCreate
