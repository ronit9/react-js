import React from "react";
import { Col, Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
// import ExampleCarouselImage from 'components/ExampleCarouselImage';

const Banner = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <>
      <Carousel  activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item >
          <img
            src="https://facon-1.myshopify.com/cdn/shop/files/bg_slide_1.jpg?crop=center&format=pjpg&height=1070&v=1734962478&width=1920"
            className="d-block w-100"
            alt="First slide"
          />

          <Col className="text-center con " xs={12}>
            <h1>A BRAND NEW ARRIVAL</h1>
            <span>MINIMAL & MODERN LOOK</span>
            <Button>read more</Button>
          </Col>
        </Carousel.Item>
        <Carousel.Item >
          {/* <ExampleCarouselImage text="Second slide" /> */}
          <img
            src="https://facon-1.myshopify.com/cdn/shop/files/bg_slide_2.jpg?crop=center&format=pjpg&height=1070&v=1734962478&width=1920"
            className="d-block w-100"
            alt="First slide"
          />
          <Col className="text-center con baner2" xs={12}>
            <h1>TRENDY & COMFY</h1>
            <span>HOLIDAY SEASON DELIGHT</span>
            <Button>read more</Button>
          </Col>
        </Carousel.Item>
      </Carousel>
      {/* <section className="">
        <div className="banner">
          <Container>
            <Col className="text-center con " xs={12}>
              <h1>A BRAND NEW ARRIVAL</h1>
              <span>MINIMAL & MODERN LOOK</span>
              <Button>read more</Button>
            </Col>
          </Container>
        </div>
        <div className="banner">
          <Container>
            <Col className="text-center con " xs={12}>
              <h1>A BRAND NEW ARRIVAL</h1>
              <span>MINIMAL & MODERN LOOK</span>
              <Button>read more</Button>
            </Col>
          </Container>
        </div>
      </section> */}
    </>
  );
};

export default Banner;
