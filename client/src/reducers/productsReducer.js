/* 

import * as types from '../constants/actionTypes';

const initialState = {
  productList: [],
}

const productsReducer = (state=initialState, action) => {
  let productList;
  
  switch(action.type) {
    case types.ADD_PRODUCT:
      const newProduct = {productName: action.payload}
      productList = state.productList.slice();
      productList.push(newProduct);

      return {
        ...state,
        productList
      }
  }
}

export default productsReducer;

*/