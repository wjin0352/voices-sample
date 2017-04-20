import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Sample, SampleList, Form } from './components';
import { FindShows } from './modules';

export default () => (
  <Switch>
    <Route component={Sample} path="/sample"/>
    <Route component={FindShows} path="/findShows"/>
    <Route component={SampleList} path="/sampleList" exact/>
  </Switch>
)