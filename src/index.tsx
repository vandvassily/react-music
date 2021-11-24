import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css';
import './index.css';
import store from './store';
import App from './App';
import { Provider } from 'react-redux';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
