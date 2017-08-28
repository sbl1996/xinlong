import { combineReducers } from 'redux'
import {
  REQUEST_PRODUCTS,
  RECEIVE_PRODUCTS,
} from '../actions'

const products = (state = {
  isFetching: false,
  products: [],
}, { type, payload }) => {
  switch (type) {
    case REQUEST_PRODUCTS:
      return {
        ...state,
        isFetching: true,
      }
    case RECEIVE_PRODUCTS:
      return {
        ...state,
        isFetching: false,
        products: payload.products,
      }
    default:
      return state
  }
}


export default products;
