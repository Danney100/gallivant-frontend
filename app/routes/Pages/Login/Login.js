import React, {useState} from 'react'
import {Link, useHistory} from 'react-router-dom'
import {connect} from 'react-redux'
import {makeStyles} from '@material-ui/styles'
import axios from 'axios'

import {setLoginInfo} from 'duck/actions/user'
import {setLoadingStatus} from 'duck/actions/process'

import {Form, FormGroup, Row, Col, CustomInput, Button, Label, EmptyLayout} from 'components'
import {Input} from 'reactstrap'
import {adminLogin} from 'api'
import {HeaderAuth} from 'routes/components/Pages/HeaderAuth'
import {ToastContainer} from 'react-toastify'
import ScoutImage from '../ScoutImage'
import * as util from 'helpers/util'

const useStyles = makeStyles({
  root: {
    marginLeft: '-1.68em',
    '& .imgCol': {
      position: 'relative',
    },
  },
  input: {
    color: '#a09d9d',
    backgroundColor: '#f7f7f7',
    borderRadius: ' 2px',
    border: 'solid 1px #a09d9d',
  },
  button: {borderRadius: '5px', backgroundColor: '#423b3c', fontSize: '16px', fontWeight: 900},
})

const Login = (props) => {
  const classes = useStyles()

  const history = useHistory()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [rememberMe, setRememberMe] = useState(false)

  const handleSignIn = () => {
    props.setLoadingStatus(true) //NOTE: start loading
    const payload = {
      email,
      password,
      rememberMe,
    }

    adminLogin(payload)
      .then((res) => {
        if (res.access) {
          axios.defaults.headers.common['Authorization'] = `Bearer ${res.access}`
          props.setLoginInfo(res)
          history.push('/dashboards')
        } else {
          util.showErrorNotification('Invalid Email and Password')
        }
      })
      .catch((err) => console.log(err))
      .finally(() => {
        props.setLoadingStatus(false)
      })
  }

  return (
    <Row className={classes.root}>
      <ScoutImage />
      <Col sm="6" className="p-0" style={{background: '#fcfaf9'}}>
        <EmptyLayout>
          <EmptyLayout.Section center width="420px">
            <ToastContainer />
            <HeaderAuth />
            <p className="h3 font-weight-bold">Login</p>
            <p className="sub-heading mb-3 text-black">
              Plase enter your username and password to login.
            </p>
            <Form className="mb-3">
              <FormGroup>
                <Label for="emailAdress" className="h6 inputLabel font-weight-bold">
                  Username
                </Label>
                <Input
                  type="email"
                  name="email"
                  id="emailAdress"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Username"
                  className={classes.input}
                />
              </FormGroup>
              <FormGroup>
                <Label for="password" className="h6 inputLabel font-weight-bold">
                  Password
                </Label>
                <Input
                  type="password"
                  name="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Password"
                  className={classes.input}
                />
              </FormGroup>
              <FormGroup className="mb-4">
                <Row>
                  <Col sm="6" xs="6" className="text-black">
                    <CustomInput
                      type="checkbox"
                      id="rememberPassword"
                      label="Remember Password"
                      checked={rememberMe}
                      onChange={() => setRememberMe(!rememberMe)}
                      inline
                    />
                  </Col>
                  <Col sm="6" xs="6" className="text-right text-black">
                    <Link to="/pages/forgot-password" className="text-decoration-none">
                      Recover Password
                    </Link>
                  </Col>
                </Row>
              </FormGroup>
              <Button
                className={`${classes.button} "mt-1"`}
                block
                onClick={handleSignIn}
                disabled={props.process.get('isLoading')}>
                {props.process.get('isLoading') ? (
                  <div>
                    <i className="fa fa-refresh fa-spin mr-2"></i> Loading
                  </div>
                ) : (
                  <span>SIGN IN</span>
                )}
              </Button>
            </Form>
          </EmptyLayout.Section>
        </EmptyLayout>
      </Col>
    </Row>
  )
}

const mapStateToProps = ({process}) => ({process})
const mapDispatchToProps = {setLoginInfo, setLoadingStatus}

export default connect(mapStateToProps, mapDispatchToProps)(Login)
