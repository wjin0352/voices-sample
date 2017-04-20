import React, { Component } from 'react';
import { NavBar, Form } from './components';
import { FindShows } from './modules'
import './App.css';
import { Route } from 'react-router-dom';
import Routes from './Routes';

// For material ui access wrap child components in MuiThemeProvider
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';


// const styles = {
//   root: {
//     display: 'flex',
//     justifyContent: 'center',
//     alignItems: 'center',
//     height: '100vh',
//     flexDirection: 'column'
//   }
// }

const App = () => (
  <div >
    <NavBar/>
    <MuiThemeProvider>
    <Routes/>
    </MuiThemeProvider>
  </div>
);

export default App;
