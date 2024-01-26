import React, { useState, useEffect, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import '../Css/Header.css';
import { Nav, Navbar, Container } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from 'styled-components';

import { faPaw } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  return (
    <Styles>
      <Navbar collapseOnSelect expand="lg" className="navy" sticky="top">
        <Container sticky="top">
          <Navbar.Brand href="/">
            <div className="IconWrapper">
              <FontAwesomeIcon icon={faPaw} />
            </div>
          </Navbar.Brand>
          <Navbar.Toggle
            aria-controls="responsive-navbar-nav"
            style={{ position: "relative", background: "aliceblue" }}
          />
          <Navbar.Collapse
            id="responsive-navbar-nav"
            sticky="top"
            className="justify-content-end"
          >
            <Nav className="justify-content-end">
              <Nav.Link
                className="link"
                href="/"
                style={{ color: "aliceblue" }}
              >
                HOME
              </Nav.Link>
              <Nav.Link
                className="link"
                href="/adopt-shelter"
                style={{ color: "aliceblue" }}
              >
                SHELTER
              </Nav.Link>
              <Nav.Link
                className="link"
                href="/about"
                style={{ color: "aliceblue" }}
              >
                ABOUT
              </Nav.Link>
              <Nav.Link
                className="link"
                href="/meet-the-team"
                style={{ color: "aliceblue" }}
              >
                TEAM
              </Nav.Link>
              <Nav.Link
                className="link"
                href="/terms-and-conditions"
                style={{ color: "aliceblue" }}
              >
                POLICY
              </Nav.Link>

              <>
                <div className="link">
                </div>
                <div className="link">
                  <div className="header-profile-wrapper "></div>
                  <div className="sub-profile-wrap  ">
                  </div>
                </div>
              </>
              <></>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Styles>
  );
};

export default Header;

const Styles = styled.div`
  // height: 200px;
  background: #000;
  .IconWrapper {
    font-size: 56px;
    color: burlywood;
    padding-right: 20px;
    transition: transform 0.2s ease;

    &:hover {
      transform: scale(1.2);
    }
  }
  .link {
    font-size: 1.2rem;
    text-decoration: none;
    font-weight: bold;
    color: aliceblue;
    margin-left: 45px;
  }
  .eor {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
