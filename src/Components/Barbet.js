import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import styled from "styled-components";
import b20 from "../Assets/b20.webp";
import b21 from "../Assets/b21.webp";
import b22 from "../Assets/b22.jpg";
import bb from "../Assets/bb.jpeg";
import bc from "../Assets/bc.jpeg";
import { Link } from "react-router-dom";

export default function Barbet() {
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
            An archetypic water dog of France, the Barbet is a rustic breed of
            medium size and balanced proportions who appears in artwork as early
            as the 16th century. In profile, the Barbet is slightly rectangular
            with a substantial head and long, sweeping tail. He has a long,
            dense covering of curly hair and a distinctive beard. An agile
            athlete, the Barbet has been used primarily to locate, flush, and
            retrieve birds. He has a cheerful disposition and is very social and
            loyal. The defining characteristic of this rustic, medium-sized bird
            dog is the dense curly coat that covers him from the top of his
            large, broad head to the tip of his curving tail. The coat comes in
            shades of black, gray, brown, or fawn, sometimes with white
            markings. The breed's delightfully shaggy coat and amiable nature
            creates the impression of a Muppet come to life, but the Barbet is a
            strong, solidly-built dog bred for centuries to be a keen hunter and
            tireless swimmer. Barbets are very intelligent and learn new things
            quickly. They have a calm nature and are easy to live with as long
            as their exercise needs are being met.
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
              Bella
            </h2>
            <img src={b20} style={{ width: "100%" }} />
            <p style={{ fontSize: "1.2rem", fontWeight: "700" }}>
              Bella, a sweet and affectionate Barbet, is known for her elegant
              curls and charming personality. She loves to be the center of
              attention, always ready to greet you with a wagging tail and a
              gentle bark. Bella enjoys long walks by the water, her curly coat
              glistening in the sunlight.
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
              Oscar
            </h2>
            <img src={b21} style={{ width: "100%" }} />
            <p style={{ fontSize: "1.2rem", fontWeight: "700" }}>
              Meet Oscar, the playful and mischievous Barbet with a heart of
              gold. With his boundless energy, Oscar is always up for an
              adventure, whether it's fetching a ball or splashing around in
              puddles. His curly fur gives him an endearing appearance, making
              him the perfect companion for those who love a mix of fun and
              charm.
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
              Lulu
            </h2>
            <img src={b22} style={{ width: "100%" }} />
            <p style={{ fontSize: "1.2rem", fontWeight: "700" }}>
              Lulu, the gentle soul of the Barbet world, exudes warmth and
              kindness. Her calm demeanor and expressive eyes make her an ideal
              cuddle buddy. Lulu enjoys lazy afternoons lounging in the sun, her
              curly coat creating a cozy nest. She is a true friend, always
              there to offer comfort and companionship.
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
              Chairlie & Daisy
            </h2>
            <img src={bb} style={{ width: "100%" }} />
            <p style={{ fontSize: "1.2rem", fontWeight: "700" }}>
              Charlie, the Barbet with boundless enthusiasm, is a bundle of joy
              and laughter. Daisy, the graceful Barbet with a heart full of
              love, embodies elegance and sweetness. Daisy loves to frolic in
              the garden, her curly coat adorned with flowers as she explores
              the outdoors. She is a true flower of joy in your life, while her
              birth companion, enjoys nothing more than her company, wherever
              she finds herself
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
              Omi
            </h2>
            <img src={bc} style={{ width: "100%", height: "550px" }} />
            <p style={{ fontSize: "1.2rem", fontWeight: "700" }}>
              Omi, the gentle soul of the Barbet world, exudes warmth and
              kindness. Her calm demeanor and expressive eyes make her an ideal
              cuddle buddy. Omi enjoys lazy afternoons lounging in the sun, her
              curly coat creating a cozy nest. She is a true friend, always
              there to offer comfort and companionship.
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
