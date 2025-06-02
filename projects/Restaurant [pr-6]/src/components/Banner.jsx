import React from "react";

import Carousel from "react-bootstrap/Carousel";
import Image from "react-bootstrap/Image";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
const Banner = () => {
  return (
    <>
      <section className="banner p-5">
        <Container>
          <Carousel>
            <Carousel.Item interval={1000}>
              <Row>
                <Col
                  lg={6}
                  className="d-flex flex-column justify-content-center text-center p-5 text tometo"
                >
                  <h1>Burgers that Speak Louder than Words.</h1>
                  <p>
                    Our burgers are made fresh daily with juicy, perfectly
                    seasoned patties, topped with crisp veggies and melted
                    cheese
                  </p>
                </Col>
                <Col lg={6} className="p-5 d-flex justify-content-center move">
                  <img
                    src="https://static.vecteezy.com/system/resources/previews/060/421/956/large_2x/healthy-and-delicious-selection-of-local-dishes-served-with-fresh-herbs-and-garnishes-free-png.png"
                    alt=""
                  />
                </Col>
              </Row>
            </Carousel.Item>
            <Carousel.Item interval={500}>
              <Row>
                <Col
                  lg={6}
                  className="d-flex flex-column justify-content-center text-center p-5 text tometo"
                >
                  <h1>
                    Big Hunger?<br></br> Bigger Combo!
                  </h1>
                  <p>
                    “Craving the ultimate meal? Our combo brings together a
                    juicy burger, crispy fries, and a refreshing drink all in
                    one satisfying deal!”
                  </p>
                </Col>
                <Col lg={6} className="p-5 d-flex justify-content-center move">
                  <img
                    src="https://static.vecteezy.com/system/resources/previews/055/666/421/large_2x/juicy-cheeseburger-served-with-crispy-fries-and-tangy-chicken-wings-symbolizing-indulgence-and-the-satisfying-flavors-of-fast-food-free-png.png"
                    alt=""
                  />
                </Col>
              </Row>
            </Carousel.Item>
            <Carousel.Item>
              <Row>
                <Col
                  lg={6}
                  className="d-flex flex-column justify-content-center text-center p-5 text tometo"
                >
                  <h1>Your Next Favorite Bite Awaits</h1>
                  <p>
                    “Dive into the rich, bold flavors of Punjab! From buttery
                    curries to smoky tandoori delights, every dish is packed
                    with spice, warmth, and love just like home.
                  </p>
                </Col>
                <Col lg={6} className="p-5 d-flex justify-content-center move">
                  <img
                    src="https://static.vecteezy.com/system/resources/previews/065/422/569/large_2x/diverse-indian-cuisine-platter-with-various-curries-and-naan-free-png.png"
                    alt=""
                  />
                </Col>
              </Row>
            </Carousel.Item>
          </Carousel>
        </Container>
      </section>
    </>
  );
};

export default Banner;
