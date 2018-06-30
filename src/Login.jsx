import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Navbar, Nav, NavItem, NavDropdown, MenuItem, FormGroup, ControlLabel, FormControl } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Navigation from './Navigation.jsx';

export default class Signin extends React.Component {
   
    render() {
    
        return (
           <div>
       <Navigation />
       <div class="container" align="center">
         <div className="col-md-6 col-md-offset-3">
         <h2 className="form-signup-heading"> Please sign in </h2>
                
        <form>
        <FormGroup controlId="formBasicText" >
          <FormControl  type="text" placeholder="Enter Email" />
          <br />
          <FormControl  type="password" placeholder="Enter Password" />
          <FormControl.Feedback />
        </FormGroup>

        <Button type="submit" bsStyle="primary" bsSize="large" block>Login</Button>
      </form>

         </div>
           </div>
         </div>
        )
    }
}