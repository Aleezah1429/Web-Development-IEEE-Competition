import '../App.css';
import React, { useEffect, useState } from 'react';
import { BiLogIn, BiLogOut } from "react-icons/bi";
import { HiOutlineUserAdd, HiOutlineShoppingCart } from "react-icons/hi";
import { Button, Row, Card, Navbar, Nav, Container, Form, Col} from "react-bootstrap";
import Logo from "../assets/logo.png";
import 'bootstrap/dist/css/bootstrap.min.css';



function NavBar() {

  return (
    <>
      {/* Navbar */}
      <Row>
        <Navbar
          sticky="top"
          collapseOnSelect
          expand="sm"
          style={{ backgroundColor: "#04091E", opacity: 0.95 }}
          variant="dark"
        >
          <Container fluid>

            <Navbar.Brand
              href="/"
              style={{ width: "13%" }}
            >

              <img
                src={Logo}
                style={{ height: "2.5em", width: "7em" }}
                className="d-inline-block top-align"
              // alt="React Bootstrap logo"
              />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link className="navLinks" href="">Home</Nav.Link>
                <Nav.Link className="navLinks" href="https://www.fifa.com/">Shop</Nav.Link>
                <Nav.Link className="navLinks" href="https://www.fifa.com/">Contact</Nav.Link>
                <Nav.Link className="navLinks" href="https://www.fifa.com/">Cart</Nav.Link>
                <Nav.Link className="navLinks" href="https://www.fifa.com/">FAQS</Nav.Link>
              </Nav>

              <>
                <Button
                  style={{ marginRight: "1%" }}
                  variant="outline-secondary"
                >
                  <HiOutlineShoppingCart size={20} />
                </Button>
              </>

              <>
                <Button
                  style={{ marginRight: "1%" }}
                  variant="outline-secondary"
                >
                  <HiOutlineUserAdd size={20} />
                </Button>
              </>
            </Navbar.Collapse>


          </Container>
        </Navbar>
      </Row>

    
    </>
  );
}

export default NavBar;
