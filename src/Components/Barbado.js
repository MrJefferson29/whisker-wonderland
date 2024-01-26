import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import styled from "styled-components";
import b20 from "../Assets/ba1.jpeg";
import b21 from "../Assets/ba2.jpeg";
import b22 from "../Assets/ba3.jpeg";
import bb from "../Assets/ba4.jpeg";
import bc from "../Assets/ba5.jpeg";
import es6 from "../Assets/ba6.jpeg";

export default function Barbado() {
  return (
    <Style>
      <Container>
        <Row>
          <Col
            md="5"
            style={{
              margin: "10px",
              fontSize: "1.1rem",
              fontWeight: "600",
              backgroundColor: "burlywood",
            }}
          >
            The Barbado da Terceira is a medium-sized herder that is a great
            companion and family dog. The breed is intelligent, easy to train,
            docile and willful, joyful, and sensitive. BDTs are athletic and
            need an experienced and loving owner.
            <h2>Barbado da Terceira Club of the United States </h2>
            <h2>Club Contact: Dana Simel </h2>
            <h2>Email: barbadoUSA@gmail.com</h2>
            <h2>Pronunciation - Bar-ba-dow da Tera-seat-a</h2>
          </Col>
          <Col
            style={{
              margin: "10px",
              fontSize: "1.3rem",
              fontWeight: "700",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            Please be sure to read carefully our Policy on adoption and pet
            purchases, before making any decisiions. There, you will also find
            out about your rights concerning puppy care and insurrance. Enjoy
            Your Stay at Whisker Wonderland
            <Link to="/terms-and-conditions">
              <button className="bttn">VIEW POLICY</button>
            </Link>
          </Col>
        </Row>
        <Row>
          <Col
            md="4"
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <h2
              style={{
                fontFamily: "Gaqire",
                fontWeight: "900",
                color: "burlywood",
              }}
            >
              Zephyr
            </h2>
            <img src={bb} style={{ width: "100%" }} />
            <p style={{ fontSize: "1.2rem", fontWeight: "700" }}>
              Zephyr, the Barbado da Terceira with a spirited soul, is as swift
              and gentle as the wind. Known for his agility and joyful spirit,
              Zephyr loves to dance through open fields, his fur flowing like a
              breeze. With bright eyes and a playful disposition, Zephyr brings
              a breath of fresh air to your home.
            </p>
          </Col>
          <Col
            md="4"
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <h2
              style={{
                fontFamily: "Gaqire",
                fontWeight: "900",
                color: "burlywood",
              }}
            >
              Sapphire
            </h2>
            <img src={b21} style={{ width: "100%" }} />
            <p style={{ fontSize: "1.2rem", fontWeight: "700" }}>
              Meet Sapphire, the Barbado da Terceira with a coat as rich and
              deep as the ocean. Her stunning blue hues and distinctive markings
              make her a gem among dogs. Sapphire is a loyal and affectionate
              companion, always ready for seaside adventures and moments of
              quiet reflection by the shore.
            </p>
          </Col>

          <Col
            md="4"
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <h2
              style={{
                fontFamily: "Gaqire",
                fontWeight: "900",
                color: "burlywood",
              }}
            >
              Rio
            </h2>
            <img src={b22} style={{ width: "100%" }} />
            <p style={{ fontSize: "1.2rem", fontWeight: "700" }}>
              Rio, the vibrant Barbado da Terceira, radiates energy and
              enthusiasm. With a spirited personality and a colorful coat
              reminiscent of a carnival, Rio is the life of the party. He loves
              socializing with everyone he meets, turning every day into a
              festive celebration filled with laughter and joy.
            </p>
          </Col>
        </Row>

        <Row>
          <Col
            md="4"
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <h2
              style={{
                fontFamily: "Gaqire",
                fontWeight: "900",
                color: "burlywood",
              }}
            >
              Harmony
            </h2>
            <img src={b20} style={{ width: "100%" }} />
            <p style={{ fontSize: "1.2rem", fontWeight: "700" }}>
              Harmony, the Barbado da Terceira with a calm and harmonious
              nature, brings tranquility to your home. Her elegant movements and
              gentle demeanor create a peaceful atmosphere. Harmony enjoys
              serene walks through nature, her presence creating a soothing
              melody that resonates with the rhythm of your daily life.
            </p>
          </Col>
          <Col
            md="4"
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <h2
              style={{
                fontFamily: "Gaqire",
                fontWeight: "900",
                color: "burlywood",
              }}
            >
              Echo
            </h2>
            <img src={bc} style={{ width: "100%", height: "550px" }} />
            <p style={{ fontSize: "1.2rem", fontWeight: "700" }}>
              Echo, the Barbado da Terceira with a strong and resonant presence,
              is known for his loyalty and protective instincts. With a
              distinctive bark that echoes through the hills, Echo is a
              steadfast companion. His deep connection with nature makes him the
              perfect partner for outdoor adventures, where his watchful eyes
              ensure a safe and enjoyable journey.
            </p>
          </Col>
        </Row>
      </Container>
    </Style>
  );
}

const Style = styled.div`
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
`;
