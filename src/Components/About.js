import React from "react";
import { ReactDOM } from "react";
import { Container, Row, Col } from "react-bootstrap";
import styled from "styled-components";
import Sc2 from "./Sc2";

import i2 from "../Assets/i7.jpg";
import g6 from "../Assets/g6.jpg";
import c1 from "../Assets/c1.jpg";
import o1 from "../Assets/o1.jpg";
import { Link } from "react-router-dom";

export default function About() {
  return (
    <Styels>
      <Container>
        <Row>
          <Col md="6">
            <img
              src={o1}
              className=""
              style={{ width: "100%", padding: "10px", borderRadius: "1px" }}
            />
          </Col>
          <Col
            md="6"
            className=""
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <p
              style={{
                padding: "20px",
                fontSize: "1.6rem",
                fontWeight: "500",
                fontFamily: "Gaqire",
              }}
            >
              At Whisker Wonderland, we are passionate about connecting loving
              families with their perfect furry companions. Our mission is to
              create joyful moments and lasting bonds through the magic of pet
              companionship.
            </p>
            <Link to="adopt-shelter">
              <button className="bttn">Visit Shelter</button>
            </Link>
          </Col>
        </Row>

        <Row>
          <Col
            md="6"
            className=""
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <p
              style={{
                padding: "20px",
                fontSize: "1.6rem",
                fontWeight: "500",
                fontFamily: "Gaqire",
              }}
            >
              Founded in 2011, we embarked on this journey with a simple yet
              profound goal – to make the process of finding and welcoming a new
              pet into your home a delightful and seamless experience. We
              understand the unique joy that pets bring to our lives, and we
              want to share that joy with families around the world.
            </p>
            <Link to="adopt-shelter">
              <button className="bttn">Visit Shelter</button>
            </Link>
          </Col>
          <Col>
            <img
              src={i2}
              className=""
              style={{ width: "100%", padding: "10px", borderRadius: "1px" }}
            />
          </Col>
        </Row>
      </Container>
      <Row
        className="5150"
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <img
          src={c1}
          className="imag"
          style={{
            width: "auto",
            padding: "10px",
            borderRadius: "1px",
            position: "relative",
          }}
        />
        <div
          style={{
            position: "absolute",
            width: "70vh",
            fontSize: "1.2rem",
            color: "aliceblue",
            fontWeight: "700",
          }}
        >
          <p style={{color: 'black', fontWeight: '900', fontSize: "1.3rem",}}>
            Support and Community When you adopt from our Whisker Wonderland, you're
            joining a community of passionate animal lovers. We offer ongoing
            support and resources to help you and your new companion thrive
            together. From training tips to health advice, we're here to assist
            you every step of the way.
          </p>

          <Link to="adopt-shelter">
            <button className="bttn">Visit Shelter</button>
          </Link>
        </div>
      </Row>
      {/* <Container> */}
      <Row style={{ background: "#000", height: "120vh" }}>
        <Col md="7"></Col>
        <Col md="5">
          <h2 style={{ color: "aliceblue" }}>
            Changing Lives
            <hr style={{ color: "aliceblue", height: "3px" }} />
          </h2>
          <p
            style={{
              padding: "20px",
              fontSize: "1.2rem",
              fontWeight: "500",
              color: "aliceblue",
            }}
          >
            One Wagging Tail at a Time By choosing to adopt, you're not only
            giving a cute furball a second chance; you're also enriching your own
            life with unconditional love and endless tail wags. Our website is
            where you'll discover these adorable pets in need of forever
            homes. Explore our profiles, fall in love, and embark on a beautiful
            journey of companionship.
          </p>
        </Col>
        <hr style={{ color: "aliceblue", height: "3px" }} />

        <Col md="6"></Col>
        <Col
          md="6"
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <p
            style={{
              padding: "20px",
              fontSize: "1.2rem",
              fontWeight: "500",
              color: "aliceblue",
            }}
          >
            Join the Whisker Wonderland Family Today! Are you ready to open your
            heart and home to a furry friend? We invite you to browse our
            available pups and get to know their stories. Adoption is a
            wonderful way to add a furry family member, and we're here to make
            it a joyful experience. Welcome to our animal-loving family!
          </p>
        </Col>
      </Row>
      {/* </Container> */}
      <Sc2 />
    </Styels>
  );
}

const Styels = styled.div`
  overflow-x: hidden;
  .bttn {
    width: 200px;
    height: 70px;
    margin-top: 30px;
    border-radius: 3px;
    border: none;
    background: burlywood;
    font-size: 1.2rem;
    font-weight: 500;
    color: aliceblue;
    &:hover {
      opacity: 0.5;
    }
  }
  @media only screen and (max-width: 767px) {
    .imag {
      height: 70vh;
    }
  }
`;
