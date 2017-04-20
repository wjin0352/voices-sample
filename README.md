To allow redirecting from action creators: 

First you would make a module that creates and exports a history instance
import { createBrowserHistory } from 'history';
export default createBrowserHistory();

Then for your application, instead of using <BrowserRouter>, you would use the regular <Router> component.
import history from './history';
render((
  <Router history={history}>
    <App />
  </Router>
), holder);

Finally, in your action, you would import that history instance and use it to push the new location


import React from 'react'
import PropTypes from 'prop-types'
import createHistory from 'history/createBrowserHistory'
import { Router } from 'react-router'

/**
 * The public API for a <Router> that uses HTML5 history.
 */
class BrowserRouter extends React.Component {
  static propTypes = {
    basename: PropTypes.string,
    forceRefresh: PropTypes.bool,
    getUserConfirmation: PropTypes.func,
    keyLength: PropTypes.number,
    children: PropTypes.node
  }

  history = createHistory(this.props)

  render() {
    return <Router history={this.history} children={this.props.children}/>
  }
}

export default BrowserRouter