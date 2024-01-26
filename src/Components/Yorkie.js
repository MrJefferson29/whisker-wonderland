import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import styled from "styled-components";
import yo2 from "../Assets/yo2.jpeg";
import yo1 from "../Assets/yo1.jpeg";
import yo3 from "../Assets/yo3.jpeg";
import yo4 from "../Assets/yo4.jpeg";
import yo5 from "../Assets/yo5.jpeg";
import yo6 from "../Assets/yo6.jpeg";
import { Link } from "react-router-dom";

export default function Yorkie() {
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
            Beneath the dainty, glossy, floor-length coat of a Yorkshire Terrier
            beats the heart of a feisty, old-time terrier. Yorkies earned their
            living as ratters in mines and mills long before they became the
            beribboned lapdogs of Victorian ladies. The Yorkshire Terrier is a
            compact, toy-size terrier of no more than seven pounds whose
            crowning glory is a floor-length, silky coat of steel blue and a
            rich golden tan. Don't let the Yorkie's daintiness fool you.
            Tenacious, feisty, brave, and sometimes bossy, the Yorkie exhibits
            all the traits of a true terrier. Often named the most popular dog
            breed in various American cities, Yorkies pack lots of big-town
            attitude into a small but self-important package. They are favorites
            of urbanites the world over. Yorkies are long-lived and
            hypoallergenic (the coat is more like human hair than animal fur),
            and they make fine little watchdogs. This is a true 'personality
            breed,' providing years of laughs, love, and close companionship.
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
              Milo
            </h2>
            <img src={yo1} style={{ width: "100%" }} />
            <p style={{ fontSize: "1.2rem", fontWeight: "700" }}>
              Milo, the charismatic Yorkie Terrier, is a little bundle of joy
              with a heart full of love. With a silky coat and expressive eyes,
              Milo is always ready for playful moments and affectionate cuddles.
              Milo's charming personality and friendly disposition make him an
              irresistible companion.
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
              Bella Rose
            </h2>
            <img src={yo2} style={{ width: "100%" }} />
            <p style={{ fontSize: "1.2rem", fontWeight: "700" }}>
              Bella Rose, the elegant Yorkie Terrier, is a petite princess with
              a name as lovely as her demeanor. With a luxurious coat and a
              regal presence, Bella Rose enjoys the finer things in life.
              Whether strolling in the park or lounging on a cushion, Bella Rose
              is a picture of grace and sophistication.
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
              Teddy Bear
            </h2>
            <img src={yo3} style={{ width: "100%" }} />
            <p style={{ fontSize: "1.2rem", fontWeight: "700" }}>
              Meet Teddy Bear, the Yorkie Terrier with a name that perfectly
              suits his cuddly nature. With a plush coat and a warm heart, Teddy
              Bear loves snuggling up and providing comfort during quiet
              moments. Teddy Bear's affectionate spirit makes him a cherished
              and huggable friend.
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
              Charlie Sparkle
            </h2>
            <img src={yo4} style={{ width: "100%" }} />
            <p style={{ fontSize: "1.2rem", fontWeight: "700" }}>
              Charlie Sparkle, the dynamic Yorkie Terrier, is a burst of energy
              and enthusiasm. With a shiny coat and a lively personality,
              Charlie Sparkle loves engaging in playful antics and stealing the
              show with his sparkling presence. Charlie Sparkle's zest for life
              is contagious and brings joy to everyone around.
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
              Sophie Pearl
            </h2>
            <img src={yo6} style={{ width: "100%", height: "550px" }} />
            <p style={{ fontSize: "1.2rem", fontWeight: "700" }}>
              Sophie Pearl, the gentle Yorkie Terrier, is a precious gem with a
              name as timeless as her charm. With a pearly white coat and a calm
              demeanor, Sophie Pearl enjoys serene moments and the company of
              loved ones. Sophie Pearl's quiet elegance adds a touch of grace to
              your home.
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
              Rocky Rascal
            </h2>
            <img src={yo5} style={{ width: "100%", height: "550px" }} />
            <p style={{ fontSize: "1.2rem", fontWeight: "700" }}>
              Rocky Rascal, the adventurous Yorkie Terrier, is a spirited
              companion with a heart full of mischief. With a tousled coat and
              an outgoing personality, Rocky Rascal loves exploring new
              territories and turning everyday activities into exciting
              adventures. Rocky Rascal's playful antics keep the household
              lively and entertaining.
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
