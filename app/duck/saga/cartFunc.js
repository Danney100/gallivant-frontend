import {put} from 'redux-saga/effects'
import {setLoadingStatus} from 'duck/actions/process'
import {getCartDetails, customerSignup} from 'api'
import {setCartDetails} from 'duck/actions/cart'
import {createCustomerAddress} from 'api'
import {setCartUserAddress} from 'duck/actions/cart'
import {cartCheckout} from 'api'
import {setInProgressOrderDetails} from 'duck/actions/order'
import {cartCheckoutWacher} from 'duck/watcher'
import {setCartUserInfo} from 'duck/actions/cart'
import {createCart} from 'api'
import {createNewCart} from 'duck/actions/cart'

export function* setCartDetailsSaga({payload}) {
  const {cartID, token} = payload
  yield put(setLoadingStatus(true))
  try {
    const data = yield getCartDetails(cartID, token)
    if (!data?.hasError) {
      yield put(setCartDetails(data.data))
    }
  } finally {
    yield put(setLoadingStatus(false))
  }
}

export function* cartUserSignupSaga({payload}) {
  yield put(setLoadingStatus(true))
  let shipping = payload.shipping

  try {
    const data = yield customerSignup(payload.data)
    if (!data?.hasError) {
      yield put(setCartUserInfo(data))
      const addressPayload = {
        customerID: data.id,
        data: shipping,
        token: payload.token,
      }
      const shippingData = yield createCustomerAddress(addressPayload)
      if (!shippingData?.hasError) {
        yield put(setCartUserAddress(shippingData.data))
        const checkoutPayload = {
          cartId: payload.cartId,
          token: payload.token,
          data: {
            customer: {
              id: data.id,
            },
            billing_address: {...shippingData.data},
            shipping_address: shippingData.data.id,
            host_order: false,
          },
        }
        yield put(cartCheckoutWacher(checkoutPayload))
      }
    }
  } finally {
  }
}

export function* cartCheckoutSaga({payload}) {
  yield put(setLoadingStatus(true))
  try {
    const data = yield cartCheckout(payload)
    if (!data?.hasError) {
      yield put(setInProgressOrderDetails(data))
    }
  } finally {
    yield put(setLoadingStatus(false))
  }
}

export function* createCartSaga({payload}) {
  yield put(setLoadingStatus(true))
  try {
    const data = yield createCart(payload)
    if (!data?.hasError) {
      const actionPayload = {
        id: data.data.id,
        cartType: payload.cartType,
      }
      yield put(createNewCart(actionPayload))
    }
  } finally {
    yield put(setLoadingStatus(false))
  }
}
