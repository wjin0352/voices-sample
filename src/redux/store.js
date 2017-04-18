import { compose, createStore, applyMiddleware } from 'redux';
// import { browserHistory } from 'react-router';
// import { syncHistoryWithStore } from 'react-router-redux';
import { createLogger } from 'redux-logger'
import rootReducer from './reducers';
// import logger from 'redux-logger'

// **logger must be last middleware in chain or it will log thunk and promise not actual actions!
const middleware = [
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


