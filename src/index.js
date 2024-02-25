import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import store from './app/store';
import { Provider } from 'react-redux';
import Main from './componenets/main/main'
ReactDOM.render(
  <Provider store={store}>
    <Main />
  </Provider>,
  document.getElementById('root')
);

