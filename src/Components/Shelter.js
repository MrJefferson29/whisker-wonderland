import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import styled from "styled-components";
import { Link } from "react-router-dom";
import v1 from "../Assets/v1.jpg";
import v2 from "../Assets/v2.jpg";
import v3 from "../Assets/v3.webp";
import v4 from "../Assets/v4.webp";
import v5 from "../Assets/v5.webp";
import v6 from "../Assets/v6.webp";

export default function Shelter() {
  return (
    <Style>
      <Container>
        <Row style={{ marginTop: "30px" }}>
          <Col
            md="4"
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              background: "rgba(192, 188, 188, 0.2)",
            }}
          >
            <Link to="/adopt-shelter/barbet" style={{ color: "black" }}>
              <img src={v3} style={{ width: "100%", borderRadius: "5px" }} />
              <h2 className="begg">Barbet</h2>
              <p className="roul">
                An archetypic water dog of France, the Barbet is a rustic breed
                of medium size and...
              </p>
            </Link>
          </Col>
          <Col
            md="4"
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              background: "rgba(192, 188, 188, 0.2)",
            }}
          >
            <Link to="/adopt-shelter/american-eskimo" style={{ color: "black" }}>
              <img src={v1} style={{ width: "100%", borderRadius: "5px" }} />
              <h2 className="begg">American Eskimo Dog</h2>
              <p className="roul">
                The American Eskimo Dog combines striking good looks with a
                quick and clever mind in a total...
              </p>
            </Link>
          </Col>
          <Col
            md="4"
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              background: "rgba(192, 188, 188, 0.2)",
            }}
          >
            <Link to="/adopt-shelter/barbado-d-teicera" style={{ color: "black" }}>
              <img src={v2} style={{ width: "100%", borderRadius: "5px" }} />
              <h2 className="begg">Barbado Da Teicera</h2>
              <p className="roul">
                The Barbado da Terceira is a medium-sized herder that is a great
                companion and family dog...
              </p>
            </Link>
          </Col>
        </Row>

        <Row style={{ marginTop: "30px" }}>
          <Col
            md="4"
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              background: "rgba(192, 188, 188, 0.2)",
            }}
          >
            <Link to="/adopt-shelter/shih-tzu" style={{ color: "black" }}>
            <img src={v4} style={{ width: "100%", borderRadius: "5px" }} />
            <h2 className="begg">Shih Tzu</h2>
            <p className="roul">
              That face! Those big dark eyes looking up at you with that sweet
              expression! It's no surprise tha…
            </p>
            </Link>
          </Col>
          <Col
            md="4"
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              background: "rgba(192, 188, 188, 0.2)",
            }}
          >
            <Link to="/adopt-shelter/chihuahua" style={{ color: "black" }}>
            <img src={v5} style={{ width: "100%", borderRadius: "5px" }} />
            <h2 className="begg">Chihuahua</h2>
            <p className="roul">
              The Chihuahua is a tiny dog with a huge personality. A national
              symbol of Mexico, these alert and…
            </p>
            </Link>
          </Col>
          <Col
            md="4"
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              background: "rgba(192, 188, 188, 0.2)",
            }}
          >
            <Link to="/adopt-shelter/yorkshire-terrier" style={{ color: "black" }}>
            <img src={v6} style={{ width: "100%", borderRadius: "5px" }} />
            <h2 className="begg">Yorkshire Terrier</h2>
            <p className="roul">
              Beneath the dainty, glossy, floor-length coat of a Yorkshire
              Terrier beats the heart of a feisty…
            </p>
            </Link>
          </Col>
        </Row>
      </Container>
    </Style>
  );
}
const Style = styled.div`
  margin: 30px;
  .begg {
    font-size: 1.8rem;
    color: burlywood;
    padding: 15px;
    font-family: Gaqire;
    font-weight: 900;
  }
  .roul {
    font-size: 1.3rem;
    font-weight: 700;
  }
`;
