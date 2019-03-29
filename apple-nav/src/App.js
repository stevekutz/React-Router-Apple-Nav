import React, { Component } from 'react';

import {BrowswerRouter as Router, Route, NavLink} from 'react-router-dom';
import IPad from './components/IPad';
import Mac from './components/Mac';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">

        <div className = "nav-container">
          <NavLink exact to = "/" activeClassName = "activeNavButton" className = "navItem">
            Mac
          </NavLink>
          <NavLink exact to = "/" activeClassName = "activeNavButton" className = "navItem">
            iPad
          </NavLink>
          <NavLink exact to = "/" activeClassName = "activeNavButton" className = "navItem">
            iPhone
          </NavLink>
        </div>




      </div>
    );
  }
}

export default App;
