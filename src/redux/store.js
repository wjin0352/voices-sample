import { compose, createStore, applyMiddleware } from 'redux';
import { browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import logger from 'redux-logger';
import rootReducer from './reducers';


// **logger must be last middleware in chain or it will log thunk and promise not actual actions!
const middleware = [
  logger
];

const enhancers = compose(
  applyMiddleware(...middleware),
  window.devToolsExtension ? window.devToolsExtension() : f => f
);

// Create the store

const store = createStore(
  rootReducer,
  {},
  enhancers
);

// we use this in our react router, to sync the history with the store.
// export const history = syncHistoryWithStore(browserHistory, store);

export { store };

