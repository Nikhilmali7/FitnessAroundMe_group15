import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Navbar, Nav, NavDropdown,Button,Row,Col} from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap';

import '../index.css';





const AdminNavbar = () => {

    return (
<>

<Navbar  collapseOnSelect  expand="lg"   sticky="top"  variant="" style={{textAlign:'center',backgroundColor:'pink'}}>
<div className="d-block d-sm-none " > </div> 
<Navbar.Brand href="#home">

</Navbar.Brand>

  <div className="container-xs">
  <Navbar.Toggle aria-controls="responsive-navbar-nav"  >

  </Navbar.Toggle>
  <Navbar.Collapse id="responsive-navbar-nav"  style={{textAlign:'center'}} >
  
    <Nav className="me-auto">
 
    <LinkContainer to="/memberprofile">
    <Nav.Link className="nav-links">Profile</Nav.Link>
    </LinkContainer>
    
      <LinkContainer to="/healthstatus">
    <Nav.Link className="nav-links">Health Status</Nav.Link>
    </LinkContainer>
      
    <LinkContainer to="/membsubplan">
    <Nav.Link className="nav-links">Center List</Nav.Link>
    </LinkContainer>

     {/* <LinkContainer to="/search">
    <Nav.Link className="nav-links">Search</Nav.Link>
    </LinkContainer> */}

    

    {/*<LinkContainer to="/membform">
    <Nav.Link className="nav-links">Membership Form</Nav.Link>
    </LinkContainer>

    <LinkContainer to="/membworkoutplan">
    <Nav.Link className="nav-links">Workout Plan</Nav.Link>
    </LinkContainer>

    <LinkContainer to="/membdietplan">
    <Nav.Link className="nav-links">Diet Plan</Nav.Link>
    </LinkContainer>

    <LinkContainer to="/memberorder">
    <Nav.Link className="nav-links">Orders</Nav.Link>
    </LinkContainer> */}
    
    </Nav>
   
</Navbar.Collapse>
</div>
</Navbar>
</>
)
};
 

export default AdminNavbar
