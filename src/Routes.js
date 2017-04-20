import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Sample, Form } from './components';
import { ShowIndexPage } from './modules';
import { FindShowsForm } from './modules';

export default () => (
  <Switch>
    <Route component={Sample} path="/sample"/>
    <Route component={FindShowsForm} path="/findShows"/>
    <Route component={ShowIndexPage} path="/showIndex" exact/>
  </Switch>
)