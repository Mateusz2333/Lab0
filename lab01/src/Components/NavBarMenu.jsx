import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';

const NavBarMenu = ({ items }) => {
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand as={Link} to="/">Strona Główna</Navbar.Brand>  
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          {items
            .filter(item => item.label !== "Strona Główna") 
            .map(item => (
              <Nav.Link as={Link} to={item.url} key={item.id}>
                {item.label}
              </Nav.Link>
          ))}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBarMenu;
