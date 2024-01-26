import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import styled from "styled-components";
import sh1 from "../Assets/sh1.jpeg";
import sh2 from "../Assets/sh2.jpeg";
import sh3 from "../Assets/sh3.jpeg";
import sh4 from "../Assets/sh4.jpeg";
import sh5 from "../Assets/sh5.jpeg";
import sh6 from "../Assets/sh6.jpeg";
import sh7 from "../Assets/sh7.jpeg";
import { Link } from "react-router-dom";

export default function Shih() {
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
            That face! Those big dark eyes looking up at you with that sweet
            expression! It's no surprise that Shih Tzu owners have been so
            delighted with this little 'Lion Dog' for a thousand years. Where
            Shih Tzu go, giggles and mischief follow. Shi Tsu (pronounced in the
            West 'sheed-zoo' or 'sheet-su'; the Chinese say 'sher-zer'),
            weighing between 9 to 16 pounds, and standing between 8 and 11
            inches, are surprisingly solid for dogs their size. The coat, which
            comes in many colors, is worth the time you will put into it'¿few
            dogs are as beautiful as a well-groomed Shih Tzu. Being cute is a
            way of life for this lively charmer. The Shih Tzu is known to be
            especially affectionate with children. As a small dog bred to spend
            most of their day inside royal palaces, they make a great pet if you
            live in an apartment or lack a big backyard. Some dogs live to dig
            holes and chase cats, but a Shih Tzu's idea of fun is sitting in
            your lap acting adorable as you try to watch TV.
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
              Mochi
            </h2>
            <img src={sh1} style={{ width: "100%" }} />
            <p style={{ fontSize: "1.2rem", fontWeight: "700" }}>
              Mochi, the adorable Shih Tzu with a sweet and soft demeanor, is as
              delightful as the popular Japanese treat. With a fluffy coat and
              affectionate eyes, Mochi loves cuddling up on the couch and
              bringing joy to your home. Mochi's playful antics and endearing
              personality make every day a delightful experience.
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
              Bamboo
            </h2>
            <img src={sh3} style={{ width: "100%" }} />
            <p style={{ fontSize: "1.2rem", fontWeight: "700" }}>
              Meet Bamboo, the elegant Shih Tzu with a graceful presence and a
              sleek coat that flows like bamboo leaves in the wind. Known for
              his gentle nature and refined charm, Bamboo enjoys leisurely
              strolls through serene gardens, bringing a touch of tranquility to
              your surroundings.
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
              Pippin
            </h2>
            <img src={sh2} style={{ width: "100%" }} />
            <p style={{ fontSize: "1.2rem", fontWeight: "700" }}>
              Pippin, the lively Shih Tzu with boundless energy, is a spirited
              companion ready for any adventure. With a wagging tail and
              expressive eyes, Pippin loves playtime and socializing with furry
              friends. Pippin's joyful spirit adds a burst of happiness to your
              household.
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
              Lulu Belle
            </h2>
            <img src={sh4} style={{ width: "100%" }} />
            <p style={{ fontSize: "1.2rem", fontWeight: "700" }}>
              Lulu Belle, the Shih Tzu with a name as charming as her
              personality, is a true belle of the ball. With a fluffy coat and a
              penchant for elegant poses, Lulu Belle adores attention and basks
              in the spotlight. Her affectionate nature and graceful demeanor
              make her a cherished member of the family.
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
              Teddy
            </h2>
            <img src={sh5} style={{ width: "100%", height: "550px" }} />
            <p style={{ fontSize: "1.2rem", fontWeight: "700" }}>
              Teddy, the lovable Shih Tzu with a teddy bear-like appearance, is
              a cuddly companion who steals hearts with a single glance. Known
              for his soft fur and warm disposition, Teddy loves snuggling up
              during movie nights and providing comfort on rainy days. Teddy's
              presence is like a comforting hug.
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
              Misty
            </h2>
            <img src={sh6} style={{ width: "100%", height: "550px" }} />
            <p style={{ fontSize: "1.2rem", fontWeight: "700" }}>
              Misty, the ethereal Shih Tzu with a mist-like softness to her
              coat, brings a touch of magic to your home. With dreamy eyes and a
              gentle spirit, Misty enjoys quiet moments by the window, watching
              the world go by. Misty's calm presence creates a serene atmosphere
              wherever she goes.
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
              Oliver
            </h2>
            <img src={sh7} style={{ width: "100%", height: "550px" }} />
            <p style={{ fontSize: "1.2rem", fontWeight: "700" }}>
              Oliver, the dapper Shih Tzu with a timeless charm, is a true
              gentleman with a heart of gold. With a well-groomed coat and a
              dignified stance, Oliver exudes sophistication. Whether strolling
              through the park or lounging in the sun, Oliver is a picture of
              elegance and companionship.
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
