import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import styled from "styled-components";
import b20 from "../Assets/es1.jpeg";
import b21 from "../Assets/es2.jpeg";
import b22 from "../Assets/es3.jpeg";
import bb from "../Assets/es4.jpeg";
import bc from "../Assets/es5.jpeg";
import es6 from "../Assets/es6.jpeg";
import { Link } from "react-router-dom";

export default function Eskimo() {
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
            The American Eskimo Dog combines striking good looks with a quick
            and clever mind in a total brains-and-beauty package. Neither shy
            nor aggressive, Eskies are always alert and friendly, though a bit
            conservative when making new friends. The American Eskimo Dog comes
            in three sizes'¿standard, miniature, and toy'¿standing as tall as 19
            inches at the shoulder or as short as 9 inches. Distinctive traits
            include a dense, sparkling white coat with a lion-like ruff around
            the chest and shoulders; a smiling face, with black nose, lips, and
            eye-rims that convey a keen, intelligent expression; and a plumed
            tail carried over the back. Some Eskies have markings with the
            delicious color name 'biscuit cream.' They move with a bold and
            agile gait. Eskies are social animals and can develop problem
            behaviors when neglected or undertrained'¿they insist on being part
            of family life. Among the most trainable of breeds, the clever,
            kid-friendly Eskie practically invented the phrase 'eager to
            please.'
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
              Snowflake
            </h2>
            <img src={b20} style={{ width: "100%" }} />
            <p style={{ fontSize: "1.2rem", fontWeight: "700" }}>
              Meet Snowflake, the American Eskimo dog with a coat as pure and
              white as freshly fallen snow. Playful and agile, Snowflake loves
              to bound through the snow-covered landscapes, leaving a trail of
              joy in her wake. Her charming personality and bright eyes make her
              the perfect companion for winter adventures.
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
              Casper
            </h2>
            <img src={b21} style={{ width: "100%" }} />
            <p style={{ fontSize: "1.2rem", fontWeight: "700" }}>
              Casper, the friendly American Eskimo, is known for his sociable
              nature and affectionate demeanor. With a fluffy white coat that
              resembles a cloud, Casper loves to be in the midst of family
              activities. He's always ready for a game of fetch or a cozy cuddle
              on the couch, bringing warmth to your heart.
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
              Luna
            </h2>
            <img src={b22} style={{ width: "100%" }} />
            <p style={{ fontSize: "1.2rem", fontWeight: "700" }}>
              Luna, the graceful American Eskimo, is a moonlit beauty with a
              shimmering white coat. Her elegant presence and gentle disposition
              make her a calming influence in any setting. Luna enjoys quiet
              evenings under the stars, her fur reflecting the soft glow of the
              moon. She is a celestial companion, lighting up your world with
              love.
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
              Frosty
            </h2>
            <img src={bb} style={{ width: "100%" }} />
            <p style={{ fontSize: "1.2rem", fontWeight: "700" }}>
              Frosty, the spirited American Eskimo, embodies the essence of
              winter with his frosty demeanor and playful spirit. Always ready
              for a romp in the snow, Frosty's boundless energy is contagious.
              His thick, white fur provides a cozy warmth, making him the ideal
              partner for chilly adventures and heartwarming moments.
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
              Polar
            </h2>
            <img src={bc} style={{ width: "100%", height: "550px" }} />
            <p style={{ fontSize: "1.2rem", fontWeight: "700" }}>
              Polar, the adventurous American Eskimo, is as bold and majestic as
              the North Pole itself. His bright eyes sparkle with curiosity, and
              his fluffy coat resembles the Arctic tundra. Polar loves exploring
              new terrains, from snowy mountains to icy lakes, making him a
              fearless and loyal companion for those seeking exciting escapades.
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
              Ivy
            </h2>
            <img src={es6} style={{ width: "100%", height: "550px" }} />
            <p style={{ fontSize: "1.2rem", fontWeight: "700" }}>
              Ivy, the charming American Eskimo with a touch of elegance, is
              known for her graceful movements and sweet nature. Her white fur,
              resembling delicate icicles, adds to her enchanting allure. Ivy
              enjoys quiet moments by your side, offering companionship and a
              sense of tranquility to your everyday life.
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
