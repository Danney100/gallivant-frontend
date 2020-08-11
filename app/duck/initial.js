import {Map, List} from 'immutable'

export const initialState = {
  user: Map({
    token: '',
    refresh: '',
    tabActive: 'User Types',
  }),
  process: Map({
    isLoading: false,
  }),
  order: Map({
    isSearching: false,
    orders: List(),
    orderToDisplay: null,
    orderDetails: Map(),
    inProgressOrder: Map(),
    transaction: Map(),
  }),
  cart: Map({
    cartID: -1,
    itemCount: 0,
    items: List(),
    cartDetails: Map(),
    user: Map(),
    address: Map(),
    cartType: null,
  }),
  products: Map({
    productList: List(),
    productToDisplay: '0b8a5033-344d-4a62-97ef-a72ac3b63846',
    productDetails: Map(),
  }),
  consultant: Map({
    consultantToDisplay: null,
    consultantDetails: Map(),
  }),
  customer: Map({
    customerToDisplay: null,
    customerDetails: Map(),
  }),
  compensation: Map({
    runs: List([]),
  }),
}
