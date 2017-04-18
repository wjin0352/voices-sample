import React, { Component } from 'react';
import { NavBar } from './modules/';
import './App.css';
import Route from './Routes';

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
    <NavBar />
    <h1>Hello!</h1>
    <Route/>
  </div>
);

export default App;
