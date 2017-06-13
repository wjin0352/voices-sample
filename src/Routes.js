import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { ShowIndexPage, FindShowsForm, ShowPage } from './modules';

export default () => (
  <Switch>
    <Route exact component={FindShowsForm} path="/"/>
    <Route component={ShowIndexPage} path="/showIndex"/>
    <Route component={ShowPage} path="/showPage/:id"/>
  </Switch>
)