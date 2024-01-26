import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import styled from "styled-components";
import ch1 from "../Assets/ch1.jpeg";
import ch2 from "../Assets/ch2.jpeg";
import ch3 from "../Assets/ch3.jpeg";
import ch4 from "../Assets/ch4.jpeg";
import ch5 from "../Assets/ch5.jpeg";
import ch6 from "../Assets/ch6.jpeg";
import ch7 from "../Assets/ch7.jpeg";
import ch8 from "../Assets/ch8.jpeg";
import ch9 from "../Assets/ch9.jpeg";
import { Link } from "react-router-dom";

export default function Chi() {
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
            The Chihuahua is a tiny dog with a huge personality. A national
            symbol of Mexico, these alert and amusing "purse dogs" stand among
            the oldest breeds of the Americas, with a lineage going back to the
            ancient kingdoms of pre-Columbian times. The Chihuahua is a
            balanced, graceful dog of terrier-like demeanor, weighing no more
            than 6 pounds. The rounded "apple" head is a breed hallmark. The
            erect ears and full, luminous eyes are acutely expressive. Coats
            come in many colors and patterns, and can be long or short. The
            varieties are identical except for coat. Chihuahuas possess loyalty,
            charm, and big-dog attitude. Even tiny dogs require training, and
            without it this clever scamp will rule your household like a little
            Napoleon. Compact and confident, Chihuahuas are ideal city pets.
            They are too small for roughhousing with kids, and special care must
            be taken in cold weather, but Chihuahuas are adaptable'¿as long as
            they get lots of quality time in their preferred lap.
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
              Coco
            </h2>
            <img src={ch1} style={{ width: "100%" }} />
            <p style={{ fontSize: "1.2rem", fontWeight: "700" }}>
              Meet Coco, the spirited Chihuahua with a burst of energy and a
              coat as rich as chocolate. With a lively personality and a love
              for play, Coco is always ready for a game of fetch or a joyful
              romp in the park. Coco's petite size and big heart make for an
              adorable and charming companion.
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
              Peanut
            </h2>
            <img src={ch2} style={{ width: "100%" }} />
            <p style={{ fontSize: "1.2rem", fontWeight: "700" }}>
              Peanut, the tiny Chihuahua with a name as cute as his size, is a
              bundle of sweetness and affection. With expressive eyes and a love
              for cuddles, Peanut enjoys being cradled in the crook of your arm.
              His endearing nature and gentle demeanor make him the perfect
              little buddy.
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
              Rocky
            </h2>
            <img src={ch3} style={{ width: "100%" }} />
            <p style={{ fontSize: "1.2rem", fontWeight: "700" }}>
              Rocky, the confident Chihuahua with a spirited attitude, is a
              pint-sized dynamo with a heart full of courage. Despite his small
              stature, Rocky loves to explore and conquer new territories. His
              bold personality and loyalty make him a feisty and delightful
              companion.
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
              Cherry
            </h2>
            <img src={ch4} style={{ width: "100%" }} />
            <p style={{ fontSize: "1.2rem", fontWeight: "700" }}>
              Cherry, the playful Chihuahua with a cherry-like charm, is a burst
              of joy in every room. With a bright personality and a penchant for
              delightful surprises, Cherry loves to chase toys and entertain
              with acrobatic leaps. Cherry's zest for life adds a vibrant touch
              to your daily adventures.
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
              Taco
            </h2>
            <img src={ch5} style={{ width: "100%", height: "550px" }} />
            <p style={{ fontSize: "1.2rem", fontWeight: "700" }}>
              Taco, the zesty Chihuahua with a spicy personality, is a lively
              and social companion. With a love for meeting new friends and a
              playful spirit, Taco thrives in social settings. Whether it's a
              gathering with family or a playdate at the dog park, Taco is the
              life of the fiesta.
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
              Mango
            </h2>
            <img src={ch6} style={{ width: "100%", height: "550px" }} />
            <p style={{ fontSize: "1.2rem", fontWeight: "700" }}>
              Mango, the tropical Chihuahua with a sweet disposition, brings a
              taste of paradise to your home. With a golden coat and a love for
              sunny spots, Mango enjoys lazy afternoons and tropical treats.
              Mango's gentle nature and warm presence make every moment feel
              like a vacation.
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
              Chico
            </h2>
            <img src={ch7} style={{ width: "100%" }} />
            <p style={{ fontSize: "1.2rem", fontWeight: "700" }}>
              Chico, the charming Chihuahua with a heart full of charisma, is a
              true charmer with a winning smile. With a sleek coat and an
              outgoing personality, Chico loves making new friends and stealing
              the spotlight. Chico's magnetic charm ensures he's the star of
              every social gathering.
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
              Sassy
            </h2>
            <img src={ch8} style={{ width: "100%", height: "550px" }} />
            <p style={{ fontSize: "1.2rem", fontWeight: "700" }}>
              Sassy, the confident Chihuahua with a dash of sass, is a spirited
              companion who knows how to make a statement. With expressive eyes
              and a playful attitude, Sassy loves to strut her stuff and
              captivate everyone around her. Sassy's bold spirit adds a touch of
              flair to your daily routine.
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
              Pepper
            </h2>
            <img src={ch9} style={{ width: "100%", height: "550px" }} />
            <p style={{ fontSize: "1.2rem", fontWeight: "700" }}>
              Pepper, the spunky Chihuahua with a hint of spice, is a lively and
              energetic friend. With a sleek black coat and a love for playful
              antics, Pepper enjoys running circles around the house and keeping
              the energy levels high. Pepper's enthusiastic nature makes every
              day an exciting adventure.
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
