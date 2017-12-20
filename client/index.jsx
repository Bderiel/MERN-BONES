import React from 'react';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';
import Routes from './routes';
import store from './redux';
import './scss/index.scss';


ReactDOM.render(
  <Provider store={store}>
    <Routes />
  </Provider>,
  document.getElementById('app'),
);
