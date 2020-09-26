import React from 'react';
import './App.css';
import 'tachyons';
import { Route, Link, Switch, BrowserRouter as Router} from 'react-router-dom';
import Nav from './Nav';
import Home from './Home';

function App() {
  return (
    <div className="app">
      <Router>
        <Route path="/">
          <Nav />
          <Home />
        </Route>
      </Router>
    </div>
  );
}

export default App;
