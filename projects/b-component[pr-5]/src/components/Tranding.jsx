import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Accordion from "react-bootstrap/Accordion";

const Tranding = () => {
  return (
    <>
      <h1 className="text-center p-5">Tranding</h1>
      <section  className="p-5 look">
        <Container className="content">
          <p className="fw-bold fs-3">FACON FASHION LOOKBOOK</p>
          <h1 className="fw-light ">THE LATEST TREND OF FASHION FACON</h1>
          <button>brouse now</button>
        </Container>
      </section>
      <section className="blog p-5 ">
        <h3 className="text-center fw-bold pb-5">FROM OUR BLOG</h3>
        <Container>
          <Row className="justify-content-md-between justify-content-xs-center justify-content-md-center">
            <Card xs={12} className="mb-xs-4 mx-xs-auto">
              <div className="img">
                <Card.Img
                  variant="top"
                  src="https://facon-1.myshopify.com/cdn/shop/articles/blog3.jpg?v=1735735080"
                />
              </div>
              <Card.Body className="p-0 py-3">
                <Card.Text>
                  <h6>Top 10 New Year Deals for Savvy Shoppers</h6>
                  <span className="p-color">Admin Admin</span>
                  <p>
                    As the New Year approaches, savvy shoppers are gearing up to
                    take advantage of the...
                  </p>
                </Card.Text>
                <Button>Read More</Button>
              </Card.Body>
            </Card>
            <Card xs={12} className="mb-xs-4 mx-xs-auto">
              <div className="img">
                <Card.Img
                  variant="top"
                  src="https://facon-1.myshopify.com/cdn/shop/articles/f6.jpg?v=1476050357"
                />
              </div>
              <Card.Body className="p-0 py-3">
                <Card.Text>
                  <h6>Check our summer collection specials</h6>
                  <span className="p-color">Admin Admin</span>
                  <p>
                    As the New Year approaches, savvy shoppers are gearing up to
                    take advantage of the...
                  </p>
                </Card.Text>
                <Button>Read More</Button>
              </Card.Body>
            </Card>
            <Card xs={12} className="mb-xs-4 mx-xs-auto">
              <div className="img">
                <Card.Img
                  variant="top"
                  src="http://facon-1.myshopify.com/cdn/shop/articles/image_manager__slider-desktop_mundaka-bucht-von-urdaibai-eltito-wiki.jpg?v=1476050560"
                />
              </div>
              <Card.Body className="p-0 py-3">
                <Card.Text>
                  <h6>Top 10 New Year Deals for Savvy Shoppers</h6>
                  <span className="p-color">Admin Admin</span>
                  <p>
                    As the New Year approaches, savvy shoppers are gearing up to
                    take advantage of the...
                  </p>
                </Card.Text>
                <Button>Read More</Button>
              </Card.Body>
            </Card>
          </Row>
        </Container>
      </section>

      <section className="p-5">
        <h3 className="text-center pb-5 fw-bold">Frequently Asked Questions</h3>
        <Container className="faq">
          <Accordion defaultActiveKey="0">
            <Accordion.Item eventKey="0">
              <Accordion.Header>How do i signup?</Accordion.Header>
              <Accordion.Body>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
          <Accordion defaultActiveKey="0">
            <Accordion.Item eventKey="0">
              <Accordion.Header>What is your refund policy?</Accordion.Header>
              <Accordion.Body>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
          <Accordion defaultActiveKey="0">
            <Accordion.Item eventKey="0">
              <Accordion.Header>
                How long does it take to deliver?
              </Accordion.Header>
              <Accordion.Body>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </Container>
      </section>
      <section className="pb-5">
        <Container>
          <Row className=" justify-content-xs-between justify-content-center">
            <Col
              xs={5}
              md={4}
              lg={2}
              className="img-list d-flex justify-content-center "
            >
              <img
                className="img-fluid"
                src="	https://facon-1.myshopify.com/cdn/shop/files/homepage_brand_image_1.png?crop=center&height=101&v=1735499724&width=170"
                alt=""
              />
            </Col>
            <Col
              xs={5}
              md={4}
              lg={2}
              className="img-list d-flex justify-content-center "
            >
              <img
                className="img-fluid"
                src="	https://facon-1.myshopify.com/cdn/shop/files/homepage_brand_image_3.png?crop=center&height=98&v=1735499724&width=165"
                alt=""
              />
            </Col>
            <Col
              xs={5}
              md={4}
              lg={2}
              className="img-list d-flex justify-content-center "
            >
              <img
                className="img-fluid"
                src="https://facon-1.myshopify.com/cdn/shop/files/homepage_brand_image_5.png?crop=center&height=102&v=1735499724&width=172"
                alt=""
              />
            </Col>
            <Col
              xs={5}
              md={4}
              lg={2}
              className="img-list d-flex justify-content-center "
            >
              <img
                className="img-fluid"
                src="https://facon-1.myshopify.com/cdn/shop/files/homepage_brand_image_2.png?crop=center&height=101&v=1735499724&width=170"
                alt=""
              />
            </Col>
            <Col
              xs={5}
              md={4}
              lg={2}
              className="img-list d-flex justify-content-center "
            >
              <img
                className="img-fluid"
                src="https://facon-1.myshopify.com/cdn/shop/files/homepage_brand_image_4.png?crop=center&height=102&v=1735499724&width=171"
                alt=""
              />
            </Col>
          </Row>
        </Container>
      </section>
      <section className="p-5 email">
        <Container>
          <Row className="d-flex align-items-center justify-content-between">
            <Col xs={12} md={6}>
              <h3 className="primary-color">SIGN UP FOR SPECIAL PROMOTIONS</h3>
              <p>
                Get exclusive deals you wont find anywhere else straight to your
                inbox!
              </p>
            </Col>
            <Col
              xs={12}
              md={6}
              className="input d-flex justify-content-between"
            >
              <input type="text" placeholder="Enter your email" />
              <Button>Subscribe</Button>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Tranding;
