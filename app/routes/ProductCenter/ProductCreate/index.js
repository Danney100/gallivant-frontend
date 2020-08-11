import React, {useContext, useEffect, useState} from 'react'
import {Col, Row, Card, CardHeader, CardBody, Button} from 'reactstrap'
import {useHistory} from 'react-router-dom'
import {List} from 'immutable'
import {useSelector, useDispatch} from 'react-redux'
import MoonLoader from 'react-spinners/MoonLoader'
import {useForm} from 'react-hook-form'

import AppContext from 'components/App/AppContext'
import ProductForm from './ProductForm'
import {
  getProductTypes,
  getProductTaxCodes,
  getProductJoinOptions,
  getProductClassifications,
  getMemberships,
  createProduct,
} from 'api'
import {setLoadingStatus} from 'duck/actions/process'
import * as util from 'helpers/util'

export default function ProductCreate() {
  const history = useHistory()
  const context = useContext(AppContext)
  const {setTitle} = context
  const token = useSelector(({user}) => user.get('token'))
  const isLoading = useSelector(({process}) => process.get('isLoading'))

  const dispatch = useDispatch()

  const [types, setTypes] = useState(List())
  const [taxCodes, setTaxCodes] = useState(List())
  const [joinOptions, setJoinOptions] = useState(List())
  const [classifications, setClassifications] = useState(List())
  const [memberships, setMemberships] = useState(List())

  const {register, errors, handleSubmit} = useForm({
    defaultValues: {
      price: {
        amount: 0,
      },
    },
  })

  useEffect(() => {
    setTitle('Product Create')
  }, [])

  useEffect(() => {
    const payload = {
      token: token,
    }
    dispatch(setLoadingStatus(true))

    Promise.all([
      getProductTypes(payload)
        .then((res) => {
          if (!res?.hasError) {
            setTypes(List(res))
          }
        })
        .catch((err) => console.log(err)),
      getProductJoinOptions(payload)
        .then((res) => {
          if (!res?.hasError) {
            setJoinOptions(List(res))
          }
        })
        .catch((err) => console.log(err)),
      getProductClassifications(payload)
        .then((res) => {
          if (!res?.hasError) {
            setClassifications(List(res))
          }
        })
        .catch((err) => console.log(err)),
      getProductTaxCodes(payload)
        .then((res) => {
          if (!res?.hasError) {
            setTaxCodes(List(res))
          }
        })
        .catch((err) => console.log(err)),
      getMemberships(payload)
        .then((res) => {
          if (!res?.hasError) {
            setMemberships(List(res))
          }
        })
        .catch((err) => console.log(err)),
    ]).then(() => dispatch(setLoadingStatus(false)))
  }, [])

  if (isLoading) {
    return (
      <div>
        <Row>
          <Col md={12} sm={12} xs={12}>
            <div className="d-flex justify-content-center mt-5">
              <MoonLoader size={75} color={'#de8b6d'} loading={true} />
            </div>
          </Col>
        </Row>
      </div>
    )
  }

  const handleProductCreate = (data) => {
    data = {
      ...data,
      weight: parseFloat(data['weight']),
      slug: data['sku'],
      price: {
        ...data['price'],
        currency: 'USD',
        includes_tax: true,
      },
      description: data['name'],
      commodity_type: 'physical',
    }

    const payload = {
      data: data,
      token: token,
    }
    createProduct(payload)
      .then((res) => {
        if (!res?.hasError) {
          util.showInfoNotification('Product created successfully')
          history.push('/product-center')
        } else {
          util.showErrorNotification(res.response.data.message)
        }
      })
      .catch(() => util.showErrorNotification('Failed to create product'))
  }

  return (
    <div>
      <Row>
        <Col md={12} sm={12} xs={12}>
          <Card lg={12} md={12} sm={12} xs={12} className="mb-3">
            <CardHeader tag="h6" className="mb-0 mt-0 font-italic bg-primary text-white">
              Use the interface below to edit the product
            </CardHeader>
            <CardBody>
              <ProductForm
                joinOptions={joinOptions.toJS()}
                classifications={classifications.toJS()}
                taxCodes={taxCodes.toJS()}
                types={types.toJS()}
                memberships={memberships.toJS()}
                register={register}
                errors={errors}
              />
            </CardBody>
          </Card>
        </Col>
      </Row>
      <Row className="d-flex justify-content-end">
        <Col md={3} className="text-lg-left text-right mb-1">
          <Button color="danger">
            <i className="fa fas fa-times-circle mr-1"></i>
            Cancel Changes
          </Button>
        </Col>
        <Col md={9} className="text-lg-right text-right">
          <Button onClick={handleSubmit(handleProductCreate)} color="info">
            <i className="fa fas fa-check-circle mr-1"></i>
            Save
          </Button>
        </Col>
      </Row>
    </div>
  )
}
