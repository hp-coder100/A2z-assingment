import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link as RouteLink} from 'react-router-dom';


function Navigation() {
  return (
    <>
    <Navbar bg="dark" data-bs-theme="dark">
      <Container>
        <Navbar.Brand href="/A2z-assingment/">A@Z Assignment 1</Navbar.Brand>
        <Nav className="ms-auto">
          <Nav.Link as={RouteLink} to='/A2z-assingment/' >Task-1</Nav.Link>
          
          <Nav.Link as={RouteLink} to='/A2z-assingment/task2' >Task-2</Nav.Link>
          
          <Nav.Link as={RouteLink} to='/A2z-assingment/task3' >Task-3</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  </>
  )
}

export default Navigation;
