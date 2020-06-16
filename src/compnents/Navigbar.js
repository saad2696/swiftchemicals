import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import styled from "styled-components";
import logo from "../images/swiftlogo.png";

const Styles = styled.div`
  .navbar {
    background-color: #1949ad;
  }
  .navbar-brand,
  .navbar-nav .nav-link {
    color: #f5f6fa;
    &:hover {
      color: #ced6e0;
    }
  }
`;

export const Navigbar = () => (
  <Styles>
    <Navbar expands="lg">
      <Navbar.Brand href="/">
        <div>
          <img
            src={logo}
            style={{ width:60, borderRadius: 50 }}
            class="img-responsive"
            alt="logo"
          />
        </div>
      </Navbar.Brand>
      <Navbar.Brand href="/" style={{ fontSize: 25}}>
        {" "}
        <strong>Swift Chemicals</strong>{" "}
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Item>
            <Nav.Link href="/" style={{ paddingRight:30}}>Home</Nav.Link>
          </Nav.Item>

          <Nav.Item>
            <Nav.Link href="/service" style={{ paddingRight:30}} >Services</Nav.Link>
          </Nav.Item>

          <Nav.Item>
            <Nav.Link href="/team" style={{ paddingRight:30}}>Our Team</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/contact" style={{ paddingRight:20}}>Contact</Nav.Link>
          </Nav.Item>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  </Styles>
);
