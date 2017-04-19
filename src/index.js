import React from 'react';
import { render } from 'react-dom';
// import { BrowserRouter as Router } from 'react-router-dom'; 
import { Provider } from 'react-redux';
import store from './redux/store';
import Routes from './Routes';
import App from './App';
import { Router } from 'react-router';
import history from './modules/history';

render(
  <Provider store={store}>
    <Router history={history}>
      <App /> 
    </Router> 
  </Provider>,
  document.getElementById('root')
);
