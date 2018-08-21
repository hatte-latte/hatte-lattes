import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

const store = createStore(
  () => console.log('replace with reducers'),
  composeWithDevTools()
);

export default store;
