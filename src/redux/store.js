import { compose, createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger'
import rootReducer from './reducers';
// import { thunk } from 'redux-thunk';
var thunk = require('redux-thunk').default;

// **logger must be last middleware in chain or it will log thunk and promise not actual actions!
const middleware = [
  thunk,
  createLogger()
];

const enhancers = compose(
  applyMiddleware(...middleware),
  window.devToolsExtension ? window.devToolsExtension() : f => f
);

// Create the store
export default createStore(
  rootReducer,
  {},   
  enhancers
);


