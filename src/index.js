import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import productsReducer from './reducers/products-reducer';
import userReducer from './reducers/user-reducer';
import { combineReducers, createStore } from 'redux';
import { Provider } from 'react-redux';

const allReducers = combineReducers({
  products: productsReducer,
  user: userReducer
});

const store = createStore(
  allReducers,
  {
    products: [{ name: 'iPhone' }],
    user: 'Michael'
  },
  window.devToolsExtension && window.devToolsExtension()
);

console.log(store.getState());

const updateUserAction = {
  type: 'updateUser',
  payload: {
    user: 'John'
  }
}

store.dispatch(updateUserAction);
ReactDOM.render(
  <Provider store={store}>
  <App />
  </Provider>,
  document.getElementById('root'));

serviceWorker.unregister();
