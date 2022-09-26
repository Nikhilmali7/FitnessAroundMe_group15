import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import { Navbar, Nav, NavDropdown,Button,Row,Col} from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap';
import Form from 'react-bootstrap/Form';
// import logo from '../images/logo.png';
import '../index.css';


import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import IconButton from '@material-ui/core/IconButton';
import YouTubeIcon from '@material-ui/icons/YouTube';
import logogym from '../images/logogym.jpg';


const TrainNavbar = () => {

    return (
<>

<Navbar  collapseOnSelect  expand="lg"   sticky="top"  variant="" style={{textAlign:'center',backgroundColor:'yellow'}}>
<div className="d-block d-sm-none " > </div> 
<Navbar.Brand href="#home">

</Navbar.Brand>

  <div className="container-xs">
  <Navbar.Toggle aria-controls="responsive-navbar-nav"  >

  </Navbar.Toggle>
  <Navbar.Collapse id="responsive-navbar-nav"  style={{textAlign:'center'}} >
  
    <Nav className="me-auto">
 
    
    <LinkContainer to="/trainprofile">
    <Nav.Link className="nav-links">PROFILE</Nav.Link>
    </LinkContainer>
    
      <LinkContainer to="/dietplan">
    <Nav.Link className="nav-links">DIET-PLAN</Nav.Link>
    </LinkContainer>
      
    <LinkContainer to="/workoutplan">
    <Nav.Link className="nav-links">WORKOUT-PLAN</Nav.Link>
    </LinkContainer>
    
    </Nav>
   
</Navbar.Collapse>
</div>
</Navbar>
</>
)
};
 

export default TrainNavbar
