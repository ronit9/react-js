import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Carousel from "react-bootstrap/Carousel";
import { FaPaperPlane } from "react-icons/fa";
import { FaDollarSign } from "react-icons/fa";
import { LuShipWheel } from "react-icons/lu";
import { FaTruckFast } from "react-icons/fa6";
const Slider = () => {
  return (
    <div>
      <Carousel>
        <Carousel.Item >
          <img 
            src="https://facon-1.myshopify.com/cdn/shop/files/homepage_testimonial_image_bg.jpg?v=1735499278"
            alt=""
          />
          <Carousel.Caption>
            <h3>What our Clients say</h3>
            <p>Best designer around</p>
            <p>
              Code, template and others are very good. The support has served me
              immediately and solved my problems when I need help. Are to be
              congratulated. Att Renan Andrade ..
            </p>

            <i class="fa fa-quote-right fa-2x"></i>
            <span>Dewey Tetzlaff</span>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            src="https://facon-1.myshopify.com/cdn/shop/files/homepage_testimonial_image_bg.jpg?v=1735499278"
            alt=""
          />
          <Carousel.Caption>
            <h3>What our Clients say</h3>
            <p>Best designer around</p>
            <p>
              Code, template and others are very good. The support has served me
              immediately and solved my problems when I need help. Are to be
              congratulated. Att Renan Andrade ..
            </p>

            <i class="fa fa-quote-right fa-2x"></i>
            <span>Dewey Tetzlaff</span>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            src="https://facon-1.myshopify.com/cdn/shop/files/homepage_testimonial_image_bg.jpg?v=1735499278"
            alt=""
          />
          <Carousel.Caption>
            <h3>What our Clients say</h3>
            <p>Best designer around</p>
            <p>
              Code, template and others are very good. The support has served me
              immediately and solved my problems when I need help. Are to be
              congratulated. Att Renan Andrade ..
            </p>

            <i class="fa fa-quote-right fa-2x"></i>
            <span>Dewey Tetzlaff</span>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      <section className="service p-color">
        <Container className="p-5">
          <Row className="justify-content-center justify-content-between">
            <Col xs={5} sm={6} lg={3} className="d-flex justify-content-center align-items-center ">
              <FaPaperPlane className="me-4 fs-1 primary-color" />
              <div className="pt-3">
                <h3 className="m-0 fw-semibold fs-6 ">FREE SHIPPING</h3>
                <p className="p-color fs-6">Free shipping on all orders</p>
              </div>
            </Col>
            <Col xs={5} sm={6} lg={3} className="d-flex justify-content-center align-items-center ">
              <FaDollarSign className="me-4 fs-1 primary-color" />
              <div className="pt-3">
                <h3 className="m-0 fw-semibold fs-6 ">FREE SHIPPING</h3>
                <p className="p-color fs-6">Free shipping on all orders</p>
              </div>
            </Col>
            <Col xs={5} sm={6} lg={3} className="d-flex justify-content-center align-items-center ">
              <LuShipWheel className="me-4 fs-1 primary-color" />
              <div className="pt-3">
                <h3 className="m-0 fw-semibold fs-6 ">FREE SHIPPING</h3>
                <p className="p-color fs-6">Free shipping on all orders</p>
              </div>
            </Col>
            <Col xs={5} sm={6} lg={3} className="d-flex justify-content-center align-items-center ">
              <FaTruckFast   className="me-4 fs-1 primary-color" />
              <div className="pt-3">
                <h3 className="m-0 fw-semibold fs-6 ">FREE SHIPPING</h3>
                <p className="p-color fs-6">Free shipping on all orders</p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default Slider;
