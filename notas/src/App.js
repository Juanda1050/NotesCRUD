import React from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import { Navbar } from './Navbar/Navbar';
import './App.css';

function App() {
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

export default App;
