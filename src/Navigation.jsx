import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';


export default class Navigation extends React.Component {

	constructor(props){
   	 super(props);
    this.state = {
        }
  };
     componentMount(){

        let success = (position) => {
            console.log(position);
            console.log('latitude', position.coords.latitude,
                'longitude', position.coords.longitude);

            let url = "https://maps.googleapis.com/maps/api/geocode/json?latlng=" + position.coords.latitude +
                ","+ position.coords.longitude + "&keyAIzaSyAQEG469VvfeBtcs0FzzuY2mwnyYvTohV0";

            fetch(url)
                .then((response) => response.json())
                .then((responseJson) => {
                    this.setState({
                        province: responseJson.results[0].address_components[5].short_name,
                        city: responseJson.results[0].address_components[4].long_name
                    });

                })
                .catch((error) => {
                });
        };

        if ("geolocation" in navigator) {
            navigator.geolocation.getCurrentPosition(success,
                function error(error) {
                   
                }
            );
        } else {
            console.log('geolocation is not enabled on this browser')
        }

    }
    render() {

        return (
        
        <div>
    <Navbar inverse collapseOnSelect>
    	 <Navbar.Header>
    		<Navbar.Brand>
     			 <Link to="/">SOCIAL</Link>
    		</Navbar.Brand>
  		</Navbar.Header>
      <Nav bsStyle="tabs" >
    		<NavItem>
          		<Link className="nav-link" to="/">Home</Link>
        	</NavItem>
       		<NavItem >
          		<Link to="/Login">Login</Link>
       		</NavItem>
        	<NavItem >
          		<Link to="/Register">Register</Link>
       		</NavItem>
       		<NavItem >
          		<Link to="/">Creat events</Link>
       		</NavItem>
      </Nav>
      
     
      
      <Nav pullRight>
      		<NavItem>
         	 <label> {this.state.province} , {this.state.city} </label>
     		</NavItem>
      
      		<NavItem>
         		<Link to="/">About Us</Link>
     		</NavItem>
     </Nav>
    </Navbar>
      
      </div>
        )
    }
}