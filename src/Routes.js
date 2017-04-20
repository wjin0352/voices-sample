import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Sample } from './components';
import { ShowIndexPage, FindShowsForm, ShowPage } from './modules';

export default () => (
  <Switch>
    <Route component={Sample} path="/sample"/>
    <Route component={FindShowsForm} path="/findShows"/>
    <Route component={ShowIndexPage} path="/showIndex" exact/>
    <Route component={ShowPage} path="/showPage/:id"/>
  </Switch>
)