import {
  SET_LOGIN_INFO,
  SET_SIGNUP_INFO,
  SET_TAB_ACTIVE,
} from 'duck/constants/user'

export function setLoginInfo(payload) {
  return {
    type: SET_LOGIN_INFO,
    payload,
  }
}

export function setSignupInfo(payload) {
  return {
    type: SET_SIGNUP_INFO,
    payload,
  }
}

export function setTabActive(payload) {
  return {
    type: SET_TAB_ACTIVE,
    payload,
  }
}