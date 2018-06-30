import React, {Component} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {  BrowserRouter as Router, Route, IndexRoute, browserHistory } from 'react-router';
import { Link } from 'react-router-dom';
import Signin from './Login.jsx';
import Signup from './Register.jsx'; 
import { Button, Navbar, Nav, NavItem, NavDropdown, MenuItem, Carousel, FormGroup, FormControl} from 'react-bootstrap';
import { Card, CardImg, CardTitle, CardText, CardDeck, CardSubtitle, CardBody,  Row, Col} from 'reactstrap';
import Navigation from './Navigation.jsx';
import Cardsample from './Cardsample.jsx';
import image1 from './Images/Food.jpg';
import image2 from './Images/Hiking.jpg';

export default class HomePage extends React.Component {

	constructor(props){
   	 super(props);
    this.state = {
    title1: 'Foodevent',
    title2: 'Hiking Event',
    Date1: '18th July 2018',
    Date2: '20th July 2018',
        }
  };
  
    render() {
    
        return (
 <div>
   	 <Navigation />

      <div className="container-fluid">
        <div className="container" align="center">
   		<img class="Image" src={require('./Images/Image.jpg')} alt="Logo"/>
		<Row>
      		<Col sm="6">
		  		 <Cardsample title={this.state.title1} date={this.state.Date1} image={image1} />
	 		</Col>
	 
			<Col sm="6">
		   		<Cardsample title={this.state.title2} date={this.state.Date2} image={image2}/>
	 		</Col>
		</Row>
	 	<br />
	 	<Row>
      		<Col sm="6">
		  		 <Cardsample title={this.state.title1} date={this.state.Date1} image={image1} />
	 		</Col>
	 
			<Col sm="6">
		   		<Cardsample title={this.state.title2} date={this.state.Date2} image={image2}/>
	 		</Col>
		</Row>
	  </div>
	 </div> 
 </div>
        )
    }
}


