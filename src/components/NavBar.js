import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import navLogo from '../../mirrorIcon.jpeg';

const NavBar = () => (
  <Navbar bg="dark" variant="dark">
    <Navbar.Brand href="#home">
      <img
        src={navLogo}
        width="30"
        height="30"
        className="d-inline-block align-top"
        alt="Mirror logo"
      />
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
    </Nav>
    </Navbar.Collapse>
  </Navbar>
);

export default NavBar;
