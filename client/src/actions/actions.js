import * as types from '../constants/actionTypes';
import axios from 'axios';

export const addProduct = (productName) => ({
  type: types.ADD_PRODUCT,
  payload: productName
});

export const addToCart = (productId) => {
  const requestAddToCart = () => ({
    type: types.REQUEST_ADD_TO_CART
  });
  const receiveAddToCart = (data) => ({
    type: types.RECEIVE_ADD_TO_CART, 
    payload: data
  });
  return dispatch => {
    dispatch(requestAddToCart())
    return axios.post('/cart')
      .then(res => res)
      .then(json => {
        dispatch(receiveAddToCart(json.data))
        dispatch(fetchCart())
      })
      .catch(err => console.error(err));
  }
}

export const fetchCart = () => {
  const requestCart = () => ({
    type: types.REQUEST_CART
  });
  const receiveCart = (data) => ({
    type: types.RECEIVE_CART,
    payload: {} || data
  })
  return dispatch => {
    dispatch(requestCart())
    return axios.get('/cart')
      .then(res => res)
      .then(json => {
        dispatch(receiveCart(json.data))
      })
      .catch(err => console.error(err));
  }
}