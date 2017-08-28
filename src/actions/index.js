const REQUEST_PRODUCTS = 'REQUEST_PRODUCTS'
const requestProducts = () => ({
  type: 'REQUEST_PRODUCTS',
})

const RECEIVE_PRODUCTS = 'RECEIVE_PRODUCTS'
const receiveProducts = (json) => ({
  type: 'RECEIVE_PRODUCTS',
  payload: {
    products: json,
  },
})

const fetchProducts = () => (dispatch) => {
  dispatch(requestProducts())
  return fetch(`http://localhost:5000/products`)
    .then(response => response.json())
    .then(json => {
      dispatch(receiveProducts(json))
    })
}

export {
  REQUEST_PRODUCTS,
  RECEIVE_PRODUCTS,
  requestProducts,
  receiveProducts,
  fetchProducts,
}