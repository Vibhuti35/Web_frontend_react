import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './App.css';
import { Card, CardImg, CardTitle, CardText, CardDeck, CardSubtitle, CardBody, Row, Col} from 'reactstrap';
// src={require(this.props.image)}

export default class Cardsample extends React.Component {
    render() {
        return (
        
        <div className="border">
             <Card >  
                    <CardImg top width="100%" src={this.props.image} alt="Movie Poster" className="size"/>
                    <CardBody>
                        <CardTitle>{this.props.title}</CardTitle>
                        <CardSubtitle>{this.props.date}</CardSubtitle>
                        <CardText>{this.props.details}</CardText>
                        <Button bsStyle="primary" bsSize="large" type="button"> More Details</Button>
                    </CardBody>
            </Card>
        </div>
        )
    }
}