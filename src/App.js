import React, { Component } from 'react';
import { NavBar, Form } from './components';
import { FindShows } from './modules'
import './App.css';
import { Route } from 'react-router-dom';
import Routes from './Routes';


const styles = {
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    flexDirection: 'column'
  }
}

const App = () => (
  <div style={styles.root}>
    <NavBar/>
    <Routes/>
  </div>
);

export default App;
