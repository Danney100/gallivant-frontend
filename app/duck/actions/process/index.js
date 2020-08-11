import {SET_LOADING_STATUS, SET_CART_CREATING_STATUS} from 'duck/constants/process'

export function setLoadingStatus(payload) {
  return {
    type: SET_LOADING_STATUS,
    payload,
  }
}

export function setCartCreatingStatus(payload) {
  return {
    type: SET_CART_CREATING_STATUS,
    payload,
  }
}
