import * as types from '../constants/actionTypes';

export const addProduct = (productName) => ({
  type: types.ADD_PRODUCT,
  payload: productName
})
