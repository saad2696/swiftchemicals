import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import styled from "styled-components";
import logo from "../images/swiftlogo.png";
import {Link} from 'react-router-dom'

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
            style={{ width: 60, borderRadius: 50 }}
            class="img-responsive"
            alt="logo"
          />
        </div>
      </Navbar.Brand>
      <Navbar.Brand href="/" style={{ fontSize: 25 }}>
        {" "}
        <strong>Swift Chemicals</strong>{" "}
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Item>
            <Nav.Link >
              <Link  style={{ padding: 25 , color:"white"}} to="/">
                Home
              </Link>
            </Nav.Link>
          </Nav.Item>

          <Nav.Item>
            <Nav.Link  >
              <Link  style={{ paddingRight: 30 , color:"white"}} to="/service">
                Services
              </Link>
            </Nav.Link>
          </Nav.Item>

          <Nav.Item>
            <Nav.Link >
              <Link style={{ paddingRight: 30 , color:"white"}} to="/team">
                Our Team
              </Link>
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link >
              <Link  style={{ paddingRight: 20,color:"white" }} to="/contact">
                Contact
              </Link>
            </Nav.Link>
          </Nav.Item>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  </Styles>
);
