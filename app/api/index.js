import {post, get, del} from './apicore'

import {
  ADMIN_LOGIN_URL,
  ADMIN_SIGNUP_URL,
  ROLE_URL,
  ORDER_URL,
  CART_URL,
  PRODUCT_URL,
  CUSTOMER_URL,
  CONSULTANT_URL,
  REFRESH_URL,
  SUBSCRIPTION_URL,
  COMPENSATION_URL,
  FLIGHT_STAGING_TOKEN,
} from './url'

export async function adminLogin({email, password}) {
  return post(ADMIN_LOGIN_URL, null, {
    email,
    password,
  })
}

export async function adminSignup({email, password, username}) {
  return post(ADMIN_SIGNUP_URL, null, {
    email,
    password,
    username,
  })
}

// -----------------role--------------

export async function getRoles(token) {
  return get(`${ROLE_URL}/`, null, {
    Authorization: `Bearer ${token}`,
  })
}

// -----------------order--------------

export async function searchOrder({query, token}) {
  return post(`${ORDER_URL}/search`, null, query, {
    Authorization: `Bearer ${token}`,
  })
}

export async function getOrderDetials({id, token}) {
  return get(`${ORDER_URL}/${id}`, null, {
    Authorization: `Bearer ${token}`,
  })
}

export async function orderPayment(orderId, data, token) {
  return post(`${ORDER_URL}/${orderId}/payments`, null, data, {
    Authorization: `Bearer ${token}`,
  })
}

// --------------------cart-----------------

export async function createCart(token) {
  return get(`${CART_URL}/guestuser`, null, {
    Authorization: `Bearer ${token}`,
  })
}

export async function addCartItem(cartId, data, token) {
  return post(`${CART_URL}/${cartId}/items`, null, data, {
    Authorization: `Bearer ${token}`,
  })
}

export async function cartCheckout({cartId, data, token}) {
  return post(`${CART_URL}/${cartId}/checkout`, null, data, {
    Authorization: `Bearer ${token}`,
  })
}

export async function getCartDetails(id, token) {
  return get(`${CART_URL}/${id}`, null, {
    Authorization: `Bearer ${token}`,
  })
}

// -------------------customer-----------------

export async function customerSignup(data) {
  return post(`${CUSTOMER_URL}/signup`, null, data)
}

export async function createCustomerAddress({customerID, data, token}) {
  return post(`${CUSTOMER_URL}/${customerID}/addresses/`, null, data, {
    Authorization: `Bearer ${token}`,
  })
}

export async function searchCustomers({data, token}) {
  return post(`${CUSTOMER_URL}/search`, null, data, {
    Authorization: `Bearer ${token}`,
  })
}

export async function getCustomerDetails({id, token}) {
  return get(`${CUSTOMER_URL}/${id}`, null, {
    Authorization: `Bearer ${token}`,
  })
}

// -----------------consultant-----------------

export async function createNewConsultant({data}) {
  return post(`${CONSULTANT_URL}/signup`, null, data)
}

export async function createConsultantAddress({consultantId, data, token}) {
  return post(`${CONSULTANT_URL}/${consultantId}/addresses/`, null, data, {
    Authorization: `Bearer ${token}`,
  })
}

export async function searchConsultants({data, token}) {
  return post(`${CONSULTANT_URL}/search`, null, data, {
    Authorization: `Bearer ${token}`,
  })
}

export async function getConsultantDetails({id, token}) {
  return get(`${CONSULTANT_URL}/${id}`, null, {
    Authorization: `Bearer ${token}`,
  })
}

// User Management
export async function createNewUser({data, token}) {
  return post(ADMIN_SIGNUP_URL, null, data, {
    Authorization: `Bearer ${token}`,
  })
}

// -------------------token refresh------------------
export async function refreshToken({token}) {
  return post(REFRESH_URL, null, null, {
    Authorization: `Bearer ${token}`,
  })
}

//----------------------product-----------------
export async function getAllProducts(token) {
  return get(`${PRODUCT_URL}/`, null, {
    Authorization: `Bearer ${token}`,
  })
}

export async function getProductTypes({token}) {
  return get(`${PRODUCT_URL}/types/`, null, null, {
    Authorization: `Bearer ${token}`,
  })
}

export async function getProductTaxCodes({token}) {
  return get(`${PRODUCT_URL}/taxcodes/`, null, null, {
    Authorization: `Bearer ${token}`,
  })
}

export async function getProductJoinOptions({token}) {
  return get(`${PRODUCT_URL}/joinoptions/`, null, null, {
    Authorization: `Bearer ${token}`,
  })
}

export async function getProductClassifications({token}) {
  return get(`${PRODUCT_URL}/classifications/`, null, null, {
    Authorization: `Bearer ${token}`,
  })
}

export async function getMemberships({token}) {
  return get(`${SUBSCRIPTION_URL}/memberships/`, null, null, {
    Authorization: `Bearer ${token}`,
  })
}

export async function createProduct({data, token}) {
  return post(`${PRODUCT_URL}/`, null, data, {
    Authorization: `Bearer ${token}`,
  })
}

export async function getProductDetails({id, token}) {
  return get(`${PRODUCT_URL}/${id}`, null, null, {
    Authorization: `Bearer ${token}`,
  })
}

export async function searchProducts({data, token}) {
  return post(`${PRODUCT_URL}/search`, null, data, {
    Authorization: `Bearer ${token}`,
  })
}

export async function getCompensationRuns({param, token}) {
  return get(`${COMPENSATION_URL}/Compensation/GetCompensationRuns`, param, {
    Authorization: `Bearer ${token}`,
  })
}

export async function flightAdminLogin({token}) {
  return get(`${FLIGHT_STAGING_TOKEN}/api/flightadmin/login`, null, {
    Authorization: `Bearer ${token}`,
  })
}
