import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import { Navbar } from './components/Navbar/Navbar';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <Navbar />
        <main>
          <Switch>
  
          </Switch>
        </main>
      </Router>
    );
  }
  }

export default App;
