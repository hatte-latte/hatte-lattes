import { createStore , applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import productsReducer from './reducers/productsReducer';


const store = createStore(
  combineReducers({
  products: productsReducer}),
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
