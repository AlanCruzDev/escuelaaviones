import React from "react";
import { Container, Navbar, Nav,NavDropdown } from "react-bootstrap";
import './navbar.style.css';

export const NavBar = () => {
  return (
    <Navbar expand="lg" sticky="top" className="nav">
      <Container>
        <Navbar.Brand href="#home">El logo va Aqui</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#home">Home</Nav.Link>
            <NavDropdown title="Carreras" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1" className="navdropdown__item" >Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2" className="navdropdown__item">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3" className="navdropdown__item">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4" className="navdropdown__item">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Carreras" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1" className="navdropdown__item" >Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2" className="navdropdown__item">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3" className="navdropdown__item">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4" className="navdropdown__item">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
