import React from 'react'
import "./Header.css"
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function NavScrollExample() {
  return (
    <Navbar bg="dark" expand="lg">
      <div className='container'>
        <Navbar.Brand style={{color: '#FFAE2B'}} href="#">Atelier.</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link style={{color: '#FFAE2B'}} href="#action1">Overview</Nav.Link>
            <Nav.Link style={{color:'#ACA592'}} href="#action2">Pages</Nav.Link>
            <Nav.Link style={{color:'#ACA592'}} href="#action2">Portfolio</Nav.Link>
            <Nav.Link style={{color:'#ACA592'}} href="#action2">Template</Nav.Link>
            <Nav.Link style={{color:'#ACA592'}} href="#action2">Contact</Nav.Link>

          </Nav>
          <Form className="d-flex">

            <Button className='btn' variant="outline-warning">Buy Template</Button>
          </Form>
        </Navbar.Collapse>
      </div>
    </Navbar>
  );
}

export default NavScrollExample;