import React, {useState, useEffect, useContext} from 'react'
import {useHistory} from 'react-router'
import {useDispatch, connect} from 'react-redux'
import PropTypes from 'prop-types'

import {setSignupInfo} from 'duck/actions/user'
import {setLoadingStatus} from 'duck/actions/process'
import { getRoles, createNewUser as createNewUserApi} from 'api'
import { useForm, Controller } from 'react-hook-form';
import { showInfoNotification, showErrorNotification } from 'helpers/util'

import {
  Row,
  Col,
  Card,
  Label,
  Input,
  Button,
  FormGroup,
  Form,
  FormFeedback,
  CustomInput,
} from 'components'
import { makeStyles, useTheme } from '@material-ui/core/styles'
import {Async as AsyncSelect} from 'react-select'
import AppContext from 'components/App/AppContext'
import {
  cssHeading,
  cssCard,
  cssCardUpMd,
  cssBtnBase,
  cssBtnBaseUpSm,
  cssSuccessButton,
  cssCancelButton,
  cssInputBase,
  cssForm2Col,
  cssForm2ColUpSm,
  cssForm2ColUpLg,
  cssReactSelect,
  cssSelectInvalid,
} from 'styles/sc-jss-components';

const CreateNewUser = props => {
  const theme = useTheme();
  const useStyles = makeStyles({
    root: {
      ...cssHeading(),
      ...cssCard(),
      ...cssInputBase(),
      ...cssBtnBase(),
      ...cssSuccessButton(),
      ...cssCancelButton(),
      ...cssForm2Col(),
      ...cssSelectInvalid(),
      [theme.breakpoints.up('sm')]: {
        ...cssBtnBaseUpSm(),
        ...cssForm2ColUpSm(),
      },
      [theme.breakpoints.up('md')]: {
        ...cssCardUpMd(),
      },
      [theme.breakpoints.up('lg')]: {
        ...cssForm2ColUpLg(),
      },
    },
  }, { name: 'scCreateNewUser' });
  const classes = useStyles();

  const context = useContext(AppContext)
  const {setTitle} = context

  useEffect(() => {
    setTitle('Create a New User')
  }, [])

  const history = useHistory()

  const routeChange = () => {
    history.push('/user-management')
  }

  const token = props.user.get('token')
  const dispatch = useDispatch();
  const [locked_out, setLockedOut] = useState(false);
  const [ignore_inactivity_check, setIgnoreInactivityCheck] = useState(false);

  const { control, watch, handleSubmit, errors } = useForm({ mode: 'onBlur' });

  const usernameRegex = /^[a-z\d]{5,12}$/i;
  const passwordRegex = /^.{8,}$/;
  const emailRegex = /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/;
  const nameRegex = /^[a-z\d]+$/i;


  const passwordMatch = (confirmPass) => confirmPass === watch('password');

  const handleCreateNewUser = (data) => {
    dispatch(setLoadingStatus(true));

    Object.keys(data).forEach(key => {
      (key === 'confirm_password' || data[key] === undefined || data[key] === '') && delete data[key];
      (typeof data[key] === 'object') && (data[key] = data[key].label);
    });

    const payload = {
      data: {
        ...data,
        locked_out,
        ignore_inactivity_check,
      },
      token: token,
    };

    createNewUserApi(payload)
      .then((res) => {
        if (res.access) {
          dispatch(setSignupInfo(res.access));
          routeChange()
          showInfoNotification('User Created Successfully');
        } else {
          console.log(res);
          showErrorNotification(res.response.data.message);
        }
      })
      .catch((err) => {
        console.log(err);
        showErrorNotification('Signup is failed');
      })
      .finally(() => {
        dispatch(setLoadingStatus(false));
      });
  }

  const languageOptions = [
    {
      label: 'English',
      value: 1,
    },
  ]

  const countryOptions = [
    {
      label: 'United States',
      value: 1,
    },
  ]

  const filterSelects = (inputValue, objData) =>
    objData.filter(i =>
      i.label.toLowerCase().includes(inputValue.toLowerCase())
    )
  
  const loadLanguageOptions = (inputValue) => 
    new Promise(resolve => {
      setTimeout(() => {
        resolve(filterSelects(inputValue, languageOptions))
      }, 0)
    })
  
  const loadCountryOptions = (inputValue) =>
    new Promise(resolve => {
      setTimeout(() => {
        resolve(filterSelects(inputValue, countryOptions))
      }, 0)
    })
  
  // handle User Types Select input
  const fetchRoleData = (inputValue, token, resolve) => {
    getRoles(token)
    .then((res) => {
      if (!res?.hasError) {
        const roles = []
        for (let role of res) {
          roles.push({
            id: role.id,
            label: role.name,
            value: role.name,
          })
        }
        resolve(filterSelects(inputValue, roles))
      }
    })
    .catch((err) => console.log(err))
  }
  
  const loadRoleOptions = (inputValue) => 
    new Promise(resolve => {
      const handleAsync = async () => {
        try {
          let token = await props.user.get('token')
          if (token) {
            fetchRoleData(inputValue, token, resolve)
          }
        } catch (err) {
          console.log(err)
        }
      }
      handleAsync()
    })

  const formItems = [
    {
      id: 'username',
      name: 'username',
      label: 'Username',
      type: 'text',
      placeholder: 'Alphanumeric from 5 to 12 characters',
      pattern: usernameRegex,
    },
    {
      id: 'password',
      name: 'password',
      label: 'Password',
      type: 'password',
      placeholder: 'At least 8 characters',
      pattern: passwordRegex,
    },
    {
      id: 'confirmPassword',
      name: 'confirm_password',
      label: 'Confirm Password',
      type: 'password',
      placeholder: 'Retype the password field',
      pattern: passwordRegex,
      validate: {
        name: 'passwordMatch',
        check: passwordMatch,
        error: 'Passwords do not match',
      },
    },
    {
      id: 'firstName',
      name: 'first_name',
      label: 'First Name',
      type: 'text',
      placeholder: 'First Name',
      pattern: nameRegex,
    },
    {
      id: 'lastName',
      name: 'last_name',
      label: 'Last Name',
      type: 'text',
      placeholder: 'Last Name',
      pattern: nameRegex,
    },
    {
      id: 'email',
      name: 'email',
      label: 'Email',
      type: 'email',
      placeholder: 'anonymous@example.com',
      pattern: emailRegex,
    },
    {
      id: 'language',
      name: 'language',
      label: 'Language',
      options: loadLanguageOptions,
    },
    {
      id: 'country',
      name: 'country',
      label: 'Country',
      options: loadCountryOptions,
    },
    {
      id: 'userType',
      name: 'user_type',
      label: 'User Type',
      options: loadRoleOptions,
    },
  ];

  const listFormGroup = formItems.map(group => (
    <FormGroup row key={ group.id }>
      <Label for={ group.id } sm={3} className="text-lg-right">
        { group.label }
      </Label>
      <Col sm={9} className="sc-form-2col__right">
        {
          group.type ? (
            <>
              <Controller
                as={ Input }
                className="sc-input"
                type={ group.type }
                id={ group.id }
                name={ group.name }
                bsSize="lg"
                placeholder={ group.placeholder }
                control={ control }
                defaultValue=""
                autoComplete="off"
                rules={{
                  required: true,
                  pattern: group.pattern ? group.pattern : false,
                  validate: group.validate ? {
                    [group.validate.name]: group.validate.check,
                  } : false,
                }}
                invalid={ errors[group.name] ? true : false }
                aria-required="true"
                aria-invalid={ errors[group.name] ? true : false }
              />
              {errors[group.name]?.type === "required" && (
                <FormFeedback>{ `${group.label} is mandatory field!` }</FormFeedback>
              )}
              {errors[group.name]?.type === "pattern" && (
                <FormFeedback>{ `${group.label} format is invalid!` }</FormFeedback>
              )}
              {group.validate ? errors[group.name]?.type === group.validate.name && (
                <FormFeedback>{ group.validate.error }</FormFeedback>
              ) : ''}
            </>
          ) : (
            <div className="sc-form-2col__select-wrapper">
              <Controller
                as={ AsyncSelect }
                className={`
                  sc-react-select
                  ${errors[group.name] ? 'sc-react-select-invalid is-invalid' : ''}
                `}
                styles={ cssReactSelect }
                name={ group.name ? group.name : '' }
                cacheOptions
                defaultOptions
                loadOptions={ group.options }
                isDisabled={!token}
                defaultValue=""
                control={ control }
                placeholder={ group.placeholder ? group.placeholder : 'Select...' }
                rules={{ required: true }}
              />
              {errors[group.name] && (
                <FormFeedback>{ `${group.label} is mandatory field!` }</FormFeedback>
              )}
            </div>
          )
        }
      </Col>
    </FormGroup>
  ));

  return (
    <Form className={ `${classes.root} container` } onSubmit={ handleSubmit(handleCreateNewUser) }>
      <div className="sc-heading-bar d-flex mt-3">
        <h1 className="sc-heading">Create New User</h1>
      </div>
      <Row>
        <Col md={12} sm={12} xs={12}>
          <Card lg={12} md={12} sm={12} xs={12} className="sc-card rounded-top align-items-lg-center">
            <div className="w-100 pt-2 pt-sm-3 pt-lg-4">
              { listFormGroup }
              <FormGroup row>
                <Label sm={3} />
                <Col sm={9} className="sc-form-2col__right">
                  <FormGroup className="sc-form-2col__right__inline mb-3">
                    <CustomInput
                      type="checkbox"
                      id="createNewUserLockedOut"
                      label="Locked Out"
                      onClick={ (e) => { e.target.checked ? setLockedOut(true) : setLockedOut(false)} }
                      inline
                    />
                    <CustomInput
                      type="checkbox"
                      id="createNewUserIgnoreInactivityCheck"
                      label="Ignore Inactivity Check"
                      onClick={ (e) => { e.target.checked ? setIgnoreInactivityCheck(true) : setIgnoreInactivityCheck(false)} }
                      inline
                    />
                  </FormGroup>
                </Col>
              </FormGroup>
            </div>
          </Card>
        </Col>
        <Col className="sc-btn-group sc-btn-group--bottom mb-3 d-flex flex-column flex-sm-row justify-content-sm-between justify-content-md-end" xs={12} lg={12}>
          <Button className="sc-btn sc-btn--cancel sc-btn--w240" color="link" size="lg" onClick={routeChange}>
            Cancel
          </Button>
          <Button
            className="sc-btn sc-btn--success sc-btn--w240"
            color="link"
            size="lg"
            disabled={props.process.get('isLoading')}
          >
            {props.process.get('isLoading') ? (
              <div>
                <i className="fa fa-refresh fa-spin mr-2"></i> Loading
              </div>
            ) : (
              'Create User'
            )}
          </Button>
        </Col>
      </Row>
    </Form>
  )
}

CreateNewUser.propTypes = {
  user: PropTypes.object,
  process: PropTypes.object,
}

const mapStateToProps = (state) => ({
  user: state.user,
  process: state.process,
})
const mapDispatchToProps = {setSignupInfo, setLoadingStatus}

export default connect(mapStateToProps, mapDispatchToProps)(CreateNewUser)
