import React, { Component } from 'react';
import { NavBar } from './components';
import './App.css';
import { Route } from 'react-router-dom';
import Routes from './Routes';

// For material ui access wrap child components in MuiThemeProvider
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const App = () => (
  <div >
    <NavBar/>
    <MuiThemeProvider>
      <Routes/>
    </MuiThemeProvider>
  </div>
);

export default App;
