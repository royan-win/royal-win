import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reducers from './app/store';
import { Provider } from 'react-redux';
import * as serviceWorker from './serviceWorker';
import thunk from "redux-thunk" ;

import {createStore , applyMiddleware , compose} from "redux" ; 
const enhancers = [ applyMiddleware(thunk),(window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())];
const store = createStore(reducers , compose(...enhancers)) ; 
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
