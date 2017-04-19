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

Finally, in your action, you would import that history instance and use it to push the new location*/