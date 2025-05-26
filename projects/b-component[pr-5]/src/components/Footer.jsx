import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import ListGroup from "react-bootstrap/ListGroup";
import { FaFacebookF } from "react-icons/fa";
import { IoLogoTwitter } from "react-icons/io";
import { FaPinterestP } from "react-icons/fa";
import { FaGooglePlusG } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { IoLocationOutline } from "react-icons/io5";
import { RiCellphoneLine } from "react-icons/ri";
import { CiMail } from "react-icons/ci";
const Footer = () => {
  return (
    <>
      <section className="p-5  foot">
        <Container>
          <Row className="d-flex pb-5 justify-content-between">
            <Col
              xs={12}
              md={5}
              lg={4}
              className="d-sm-flex  justify-content-md-between"
            >
              <ListGroup>
                <ListGroup.Item>Contact Us</ListGroup.Item>
                <ListGroup.Item className="fs-7">
                  We are a team of designers and developers who creates high
                  quality premium Shopify themes.
                </ListGroup.Item>
                <ListGroup.Item>
                  <IoLocationOutline className="me-3" />
                  No 40 Baria Sreet 133/2, NewYork, USA.
                </ListGroup.Item>
                <ListGroup.Item>
                  <RiCellphoneLine className="me-3" /> (012) 800 456 789
                </ListGroup.Item>
                <ListGroup.Item>
                  <CiMail className="me-3" /> support@masstechnologist
                </ListGroup.Item>
                <ListGroup.Item className="d-flex">
                  <Col xs={1} sm={1} md={2} lg={1} className="me-3 icon">
                    <FaFacebookF />
                  </Col>
                  <Col xs={1} sm={1} md={2} lg={1} className="me-3 icon">
                    <IoLogoTwitter />
                  </Col>
                  <Col xs={1} sm={1} md={2} lg={1} className="me-3 icon">
                    <FaPinterestP />
                  </Col>
                  <Col xs={1} sm={1} md={2} lg={1} className="me-3 icon">
                    <FaGooglePlusG />
                  </Col>
                  <Col xs={1} sm={1} md={2} lg={1} className="me-3 icon">
                    <FaInstagram />
                  </Col>
                </ListGroup.Item>
              </ListGroup>
            </Col>
            <Col
              xs={12}
              md={5}
              lg={2}
              className="d-sm-flex  justify-content-md-between"
            >
              <ListGroup>
                <ListGroup.Item>Main menu</ListGroup.Item>
                <ListGroup.Item className="">home</ListGroup.Item>
                <ListGroup.Item>shop</ListGroup.Item>
                <ListGroup.Item>catalog</ListGroup.Item>
                <ListGroup.Item>product</ListGroup.Item>
                <ListGroup.Item>pages</ListGroup.Item>
                <ListGroup.Item className="">buy</ListGroup.Item>
              </ListGroup>
            </Col>
            <Col
              xs={12}
              md={5}
              lg={2}
              className="d-sm-flex  justify-content-md-between"
            >
              <ListGroup>
                <ListGroup.Item>Main menu</ListGroup.Item>
                <ListGroup.Item className="">home</ListGroup.Item>
                <ListGroup.Item>shop</ListGroup.Item>
                <ListGroup.Item>catalog</ListGroup.Item>
                <ListGroup.Item>product</ListGroup.Item>
                <ListGroup.Item>pages</ListGroup.Item>
                <ListGroup.Item className="">buy</ListGroup.Item>
              </ListGroup>
            </Col>
            <Col
              xs={12}
              md={5}
              lg={2}
              className="d-sm-flex  justify-content-md-between"
            >
              <ListGroup>
                <ListGroup.Item>Opening Hours</ListGroup.Item>
                <ListGroup.Item className="">
                  Mon - Fri: 8AM - 10PM
                </ListGroup.Item>
                <ListGroup.Item>Sat: 9AM-8PM</ListGroup.Item>
                <ListGroup.Item>Sun: Closed</ListGroup.Item>
                <ListGroup.Item>National Holidays: Closed</ListGroup.Item>
                <ListGroup.Item className="fw-bold text-white">
                  Home Delivery Service also available!
                </ListGroup.Item>
              </ListGroup>
            </Col>
          </Row>
          <Row className=" border-top pt-4 d-flex align-items-center">
            <Col
              xs={12}
              md={12}
              lg={6}
              className="last mb-sm-3 text-sm-center "
            >
              <p>
                Copyright © 2024
                <span className="primary-color">MassTechnologist.com</span>. All
                rights reserved.
              </p>
            </Col>
            <Col xs={12} md={12} lg={6} className=" end  justify-content-end">
              <ListGroup className=" d-flex flex-row justify-content-between align-items-center">
                <ListGroup.Item>home</ListGroup.Item>
                <ListGroup.Item>shop</ListGroup.Item>
                <ListGroup.Item>catalog</ListGroup.Item>
                <ListGroup.Item>product</ListGroup.Item>
                <ListGroup.Item>pages</ListGroup.Item>
                <ListGroup.Item className="">buy</ListGroup.Item>
              </ListGroup>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Footer;
