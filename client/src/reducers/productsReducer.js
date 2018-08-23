import * as types from '../constants/actionTypes';

const initialState = {
  productList: [],
}

const productsReducer = (state=initialState, action) => {
  switch(action.type) {
    case types.FETCH_INVENTORY:
      console.log(action, action.payload);
      return Object.assign({}, state, action.payload);
    default:
      return state;
  }
};

export default productsReducer;
