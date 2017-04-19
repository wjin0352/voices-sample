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


/*
Then for your application, instead of using <BrowserRouter>, you would use the regular <Router> component.
import history from './history';
render((
  <Router history={history}>
    <App />
  </Router>
), holder);

Finally, in your action, you would import that history instance and use it to push the new location*/