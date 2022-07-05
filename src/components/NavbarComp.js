import React, { Component } from "react";
import { Link, Route, Routes } from "react-router-dom";
import About from "./About";
import Contact from "./Contact";
import { Home } from "./Home";
import { ParseExcel } from "./ParseExcel";
import { Nav, Navbar, Container } from "react-bootstrap";

export default class NavbarComp extends Component {
  render() {
    return (
      <>
        <div className="nav-bar">
          <Navbar bg="dark" variant="dark" expand="lg">
            <Container>
              <Navbar.Brand as={Link} to="/">React-Bootstrap</Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                  <Nav.Link as={Link} to="/">
                    Home
                  </Nav.Link>
                  <Nav.Link as={Link} to="/about">
                    About
                  </Nav.Link>
                  <Nav.Link as={Link} to="/contact">
                    Contact
                  </Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </div>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/parse-excel" element={<ParseExcel />}></Route>
        </Routes>
      </>
    );
  }
}
