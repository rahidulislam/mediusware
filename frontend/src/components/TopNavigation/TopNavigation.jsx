import React, { Component, Fragment } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import {NavLink} from 'react-router-dom';
export default class TopNavigation extends Component {
  render() {
    return (
      <Fragment>
        <Navbar bg="light" expand="lg">
          <Container>
            <Navbar.Brand><NavLink end to="/">Md. Rahidul Islam</NavLink></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link><NavLink to="/">Home</NavLink></Nav.Link>
                <Nav.Link href="#link"><NavLink to="/product/create">Create Product</NavLink></Nav.Link>
                
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </Fragment>
    );
  }
}
