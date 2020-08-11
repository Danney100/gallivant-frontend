import React, {useState, useContext, useEffect} from 'react'
import {useHistory} from 'react-router'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import {setLoadingStatus} from 'duck/actions/process'

import {
  Row,
  Col,
  Card,
  Label,
  Input,
  Nav,
  NavItem,
  TabContent,
  TabPane,
  Button,
  FormGroup,
  Form,
  NavLink,
  UncontrolledButtonDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from 'components'

import { makeStyles, useTheme } from '@material-ui/core/styles'
import { scBase, scColor } from 'styles/sc-jss-components/_variables';
import {
  cssHeading,
  cssHeadingUpSm,
  cssCard,
  cssCardUpMd,
  cssInputBase,
  cssBtnBase,
  cssBtnBaseUpSm,
  cssSuccessButton,
  cssCancelButton,
  cssForm2Col,
  cssForm2ColUpLg,
  cssActionDropdown,
  cssCollapseMenu,
  cssCollapseMenuUpMd,
  cssCollapseMenuUpLg,
} from 'styles/sc-jss-components';

import {fieldGroupFields, moduleFields} from './fields'
import FieldGroup from './components/FieldGroup'
import ModuleGroup from './components/ModuleGroup'
import AppContext from 'components/App/AppContext'

const CreateNewUserType = props => {
  const scVar = { ...scBase(), ...scColor() };
  const theme = useTheme();
  const useStyles = makeStyles({
    root: {
      ...cssHeading(),
      ...cssCard(),
      ...cssForm2Col(),
      ...cssInputBase(),
      ...cssBtnBase(),
      ...cssSuccessButton(),
      ...cssCancelButton(),
      ...cssActionDropdown(),
      ...cssCollapseMenu(),
      [`& .${scVar.prefix}action-dropdown`]: {
        marginTop: `${10 / scVar.rootFontBase}rem`,
      },
      [`& .custom-control`]: {
        paddingTop: `${4 / scVar.fontBase}em`,
        paddingBottom: `${4 / scVar.fontBase}em`,
      },
      [`& .sc-field-group-wrapper .sc-collapse-panel-lv2__col3`]: {
        color: scVar.textContent,
      },
      '& .sc-module-group-btn': {
        flex: `0 0 calc(100% - ${24 / scVar.fontBase}em)`,
      },
      [`& .sc-module-group-checkbox .custom-control-label::before,
      .sc-module-group-checkbox .custom-control-label::after`]: {
        top: `${4 / scVar.fontBase}em`,
      },
      '& .sc-module-group-wrapper .sc-collapse-panel-lv2 .custom-control': {
        paddingTop: `${6 / scVar.fontBase}em`,
        paddingBottom: `${6 / scVar.fontBase}em`,
      },
      [theme.breakpoints.up('sm')]: {
        ...cssHeadingUpSm(),
        ...cssBtnBaseUpSm(),
        [`& .${scVar.prefix}action-dropdown`]: {
          position: 'absolute',
          top: 0,
          right: `${15 / scVar.rootFontBase}rem`,
        },
      },
      [theme.breakpoints.up('md')]: {
        ...cssCardUpMd(),
        ...cssCollapseMenuUpMd(),
      },
      [theme.breakpoints.up('lg')]: {
        ...cssForm2ColUpLg(),
        ...cssCollapseMenuUpLg(),
        [`& .${scVar.prefix}col-border:not(:first-child)`]: {
          borderLeft: `1px solid ${scVar.borderColor}`,
        },
        '& .sc-field-group-wrapper .sc-collapse-panel-lv2__col3': {
          position: 'absolute',
          top: 0,
          left: `100%`,
          zIndex: 1,
        },
      },
      [theme.breakpoints.up('xl')]: {
        '& .sc-field-group-wrapper .sc-collapse-panel-lv2 .form-group': {
          paddingLeft: `${48 / scVar.fontBase}em`,
          paddingRight: `${48 / scVar.fontBase}em`,
        },
        '& .sc-field-group-wrapper .sc-collapse-panel-lv2__col3': {
          paddingLeft: `${55 / scVar.fontBase}em !important`,
          paddingRight: `${55 / scVar.fontBase}em !important`,
        },
      },
    },
  },
  { 
    name: 'scCreateNewUserType',
  })

  const classes = useStyles()

  const [activeTab, setActiveTab] = useState('1')
  const [activePermission, setActivePermission] = useState('Custom Permissions')
  // Field Group tab
  const [openFieldGroup, setOpenFieldGroup] = useState(null)
  const [fieldOptionsOpen, setFieldOptionsOpen] = useState(null)
  const [fieldsCol3Height, setFieldsCol3Height] = useState('')
  // Modules tab
  const [openModuleGroup, setOpenModuleGroup] = useState(null)
  const [modulesCol2Height, setModulesCol2Height] = useState('')

  const context = useContext(AppContext)
  const {setTitle} = context

  const setColumnHeight = (col1Id, col2Id, setState) => {
    const col1 = document.getElementById(col1Id);
    const col2 = document.getElementById(col2Id);
    let col1Height = null;
    let col2Height = null;
    if (col1 && col2) {
      col1Height = col1.offsetHeight;
      col2Height = col2.offsetHeight;
    }
    if (col2Height > col1Height) {
      setState(`${col2Height}px`);
    } else {
      setState('');
    }
  };

  useEffect(() => {
    setTitle('User Type Edit')
  }, [])

  useEffect(() => {
      setColumnHeight(
        'fieldGroupCol1',
        `fieldGroupCol3-${fieldOptionsOpen}`,
        setFieldsCol3Height
      );
  }, [fieldOptionsOpen]);

  useEffect(() => {
      setColumnHeight(
        'moduleGroupCol1',
        `moduleGroupCol2-${openModuleGroup}`,
        setModulesCol2Height
      );
  }, [openModuleGroup]);

  const toggle = (tab) => {
    if (activeTab !== tab) setActiveTab(tab)
  }
  const history = useHistory()

  const routeChange = () => {
    history.push('/user-management')
  }

  const grantAllPermissions = () => {
  }

  const unCheckAllPermissions = () => {
  }

  const quickAction = [
    {
      label: 'Grant All Permissions',
      onClick: grantAllPermissions,
    },
    {
      label: 'Uncheck All Permissions',
      onClick: unCheckAllPermissions,
    },
    {
      label: 'Custom Permissions',
    },
  ];

  return (
    <Form className={ `${classes.root} container` }>
      <div className="sc-heading-bar d-flex mt-3">
        <h1 className="sc-heading">Create User Type</h1>
      </div>
      <Row>
        <Col md={12} sm={12} xs={12}>
          {/* START Card Widget */}
          <Card lg={12} md={12} sm={12} xs={12} className="sc-card mb-3">
            <div className="sc-card__heading">
              <h2 className="sc-heading">Basic Info</h2>
            </div>
            <div className="w-100">
              <FormGroup row>
                <Label for="userType" sm={3} className="text-md-right">
                  User Type
                </Label>
                <Col sm={9} className="sc-form-2col__right">
                  <Input
                    className="sc-input"
                    type="text"
                    id="userType"
                    bsSize="lg"
                    placeholder="Business Development Management"
                  />
                </Col>
              </FormGroup>
              <FormGroup row>
                <Label for="description" sm={3} className="text-md-right">
                  Description
                </Label>
                <Col sm={9} className="sc-form-2col__right">
                  <Input
                    className="sc-input"
                    type="textarea"
                    id="description"
                    bsSize="lg"
                    placeholder="For Business Development Management Roles"
                  />
                </Col>
              </FormGroup>
            </div>
          </Card>
          <Card lg={12} md={12} sm={12} xs={12} className="sc-card">
            <FormGroup row>
              <Col sm={12}>
                <UncontrolledButtonDropdown className="sc-action-dropdown sc-sfui-text-semibold">
                  <DropdownToggle caret color="link">
                    { activePermission }
                  </DropdownToggle>
                  <DropdownMenu right>
                    {quickAction.map((item, index) => {
                      return (
                        <DropdownItem
                          key={ index }
                          onClick={() => {
                            setActivePermission(item.label);
                            if (item.onClick) item.onClick();

                          }}
                          active={ item.label === activePermission ? true : false }
                        >
                          { item.label }
                        </DropdownItem>
                    )})}
                  </DropdownMenu>
                </UncontrolledButtonDropdown>
                <Nav className="sc-nav-tabs sc-sfui-text-semibold">
                  <NavItem
                    className={ `sc-nav-tabs__item ${
                      activeTab === '1' ? 'sc-nav-tabs__item--active' : ''
                    }` }
                  >
                    <NavLink
                      className="sc-nav-tabs__link"
                      onClick={() => {
                        toggle('1')
                      }}>
                      Field Groups
                    </NavLink>
                  </NavItem>
                  <NavItem
                    className={ `sc-nav-tabs__item ${
                      activeTab === '2' ? 'sc-nav-tabs__item--active' : ''
                    }` }
                  >
                    <NavLink
                      className="sc-nav-tabs__link"
                      onClick={() => {
                        toggle('2')
                      }}>
                      Modules
                    </NavLink>
                  </NavItem>
                </Nav>
                <TabContent activeTab={activeTab}>
                  <TabPane tabId="1">
                    <Row>
                      <Col className="sc-col-border pt-3" lg={4} xs={12}>
                        <div id="fieldGroupCol1">
                          {fieldGroupFields.map((field, index) => {
                            return (
                              <FieldGroup
                                key={index}
                                label={field.label}
                                fields={field.fields}
                                index={index}
                                menuOpen={openFieldGroup}
                                setMenuOpen={setOpenFieldGroup}
                                optionsOpen={fieldOptionsOpen}
                                setOptionsOpen={setFieldOptionsOpen}
                              />
                            )
                          })}
                        </div>
                      </Col>
                      <Col className="sc-col-border" lg={4} xs={12}></Col>
                      <Col className="sc-col-border" style={{ height: `${fieldsCol3Height}` }} lg={4} xs={12}></Col>
                    </Row>
                  </TabPane>
                  <TabPane tabId="2">
                    <Row>
                      <Col className="sc-col-border pt-3" lg={5} xs={12}>
                        <div id="moduleGroupCol1">
                          {moduleFields.map((field, index) => {
                            return (
                              <ModuleGroup
                                key={index}
                                label={field.label}
                                fields={field.fields}
                                index={index}
                                open={openModuleGroup}
                                setOpen={setOpenModuleGroup}
                              />
                            )
                          })}
                        </div>
                      </Col>
                      <Col className="sc-col-border d-none d-md-block" style={{ height: `${modulesCol2Height}` }} lg={7} xs={12}>
                      </Col>
                    </Row>
                  </TabPane>
                </TabContent>
              </Col>
            </FormGroup>
          </Card>
        </Col>
        <Col
          xs={12} lg={12}
          className="sc-btn-group sc-btn-group--bottom mb-3 d-flex flex-column flex-sm-row justify-content-sm-between justify-content-md-end"
        >
          <Button
            className="sc-btn sc-btn--cancel sc-btn--w240"
            color="link"
            size="lg"
            onClick={routeChange}
          >
            Cancel Changes
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
              'Save Changes'
            )}
          </Button>
        </Col>
      </Row>
    </Form>
  )
}

CreateNewUserType.propTypes = {
  process: PropTypes.object,
}

const mapStateToProps = (state) => ({
  process: state.process,
})
const mapDispatchToProps = {setLoadingStatus}

export default connect(mapStateToProps, mapDispatchToProps)(CreateNewUserType)
