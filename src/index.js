import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

let initialState = {
  totalOrder: 24
}
// Reducer
const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case "PLUS_ORDER":
      return {
        ...state,
        totalOrder: state.totalOrder + 1
      }
      break;
    case "MINUS_ORDER":
      return {
        ...state,
        totalOrder: state.totalOrder - 1
      }
      break;
    default:
      return state
      break;
  }
}

// Store
const storeRedux = createStore(rootReducer)

ReactDOM.render(
  <Provider store={storeRedux}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
