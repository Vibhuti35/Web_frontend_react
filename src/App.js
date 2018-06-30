import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Signin from './Login.jsx'; 
import Signup from './Register.jsx'; 
import HomePage from './Home.jsx'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import {  BrowserRouter as Router, Route, IndexRoute, browserHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { Button, Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';

class App extends Component {
  render() {
    return (
    
    <div>
  		<Router>
        <div >
          <Route name="Home" exact path="/" component={HomePage} />
          <Route name="Login" exact path="/Login" component={Signin} />
          <Route name="Register" exact path="/Register" component={Signup} />
        </div>
      </Router>
    </div>
    );
  }
}

export default App;