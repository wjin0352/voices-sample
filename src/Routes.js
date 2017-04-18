import React from 'react';
import { Route, Switch } from 'react-router-dom';
import SamplePage from './modules/sample/SamplePage';

export default () => (
  <Switch>
    <Route component={SamplePage} path="/sample" exact/>
  </Switch>
)