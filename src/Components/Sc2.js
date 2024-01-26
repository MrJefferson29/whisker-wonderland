import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import styled from "styled-components";
import k1 from "../Assets/k1.webp";

export default function Sc2() {
  return (
    <Style>
      <Container className="maybe">
        <div style={{ display: "flex", flexDirection: "row" }}>
          <p className="scene">Canine Health Care Foundation</p>
          <p className="scene">Rescue Network</p>
          <p className="scene">Whisker Wonderland Reunite</p>
          <p className="scene">Humane Fund</p>
          <p className="scene">Museum of the Dog</p>
        </div>
        <h2 style={{ color: "black", fontSize: "2.8rem", padding: "30px" }}>
          Canine Health Care Foundation
        </h2>
        <Col md="5">
          <p className="sid">
            The AKC Canine Health Foundation is a nonprofit organization
            dedicated to the prevention and treatment of diseases in all dogs.
            Since 1995, we’ve been awarding grants to scientists and
            professionals to advance canine health research, while providing
            professional information and resources for today’s dog owner.
          </p>
          <Link to="/adopt-shelter">
            <button class="butt">Visit Shelter</button>
          </Link>
        </Col>

        <h2 style={{ color: "black", fontSize: "2.8rem", padding: "30px" }}>
          Rescue Network
        </h2>
        <Col md="5">
          <p className="sid">
            The AKC Rescue Network is the largest network of dog rescue groups
            in the U.S., with more than 450 groups providing fostering and
            rehabilitation services.
          </p>
          <Link to="/adopt-shelter">
            <button class="butt">Visit Shelter</button>
          </Link>
        </Col>

        <h2 style={{ color: "black", fontSize: "2.8rem", padding: "30px" }}>
          Whisker Wonderland Reunite
        </h2>
        <Col md="5">
          <p className="sid">
            AKC Reunite is North America’s largest not-for-profit pet ID and
            recovery service, providing microchipping and ID services as well as
            a national recovery database to safely return dogs home should they
            get lost and, through AKC Pet Disaster Relief, helping local
            Emergency Management to provide animal care services immediately
            following disasters.
          </p>
          <Link to="/adopt-shelter">
            <button class="butt">Visit Shelter</button>
          </Link>
        </Col>
      </Container>
      <Row style={{ margin: "40px" }}>
        <Col md="7">
          <img src={k1} style={{ width: "100%", borderRadius: "5px" }} />
        </Col>
        <Col
          md="5"
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div>
            <h1 style={{ fontSize: "2.8rem", fontFamily: "fantasy" }}>
              Register Your Dog
            </h1>
            <p style={{ fontSize: "2rem", fontWeight: '700' }}>Learn Why</p>
            <p style={{ fontSize: "1.6rem", fontFamily: 'Lobster'}}>
              Having a dog is a lifelong journey. Let the AKC be there to
              support you along the way. Complete your lifetime registration
              today and access AKC's Canine Care packages, which include
              essential resources and services available to you throughout every
              stage of your dog's life.
            </p>
          </div>
          <Link to='/meet-the-team'><button class='butt' style={{margin: '30px', width: '100%'}}>REGISTER YOUR DOG</button></Link>
        </Col>
      </Row>
    </Style>
  );
}

const Style = styled.div`
  .maybe {
    background: burlywood;
    padding: 20px;
    justify-content: center;
  }
  .scene {
    width: 18%;
    padding-left: 10px;
    font-size: 1.1rem;
    font-weight: 800;
    border-left: 1px solid black;
    border-bottom: 1px solid black;
  }
  .sid {
    font-size: 1.4rem;
    font-weight: 500;
  }
  .butt {
    width: auto;
    height: 55px;
    border-radius: 5px;
    border: 1px solid aliceblue;
    font-size: 1.1rem;
    color: black;
    font-weight: 900;
    background: burlywood;
    margin: 35px;
    padding: 10px;
    &:hover {
      background: black;
      color: aliceblue;
    }
  }
`;
