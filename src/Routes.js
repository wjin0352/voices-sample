import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Sample, Form } from './components';
import { FindShows } from './modules';

export default () => (
  <Switch>
    <Route component={Sample} path="/sample" exact/>
    <Route component={FindShows} path="/findShows" exact/>
  </Switch>
)