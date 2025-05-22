import { Col, Row } from "react-bootstrap";
import ListGroup from "react-bootstrap/ListGroup";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import { IoIosArrowDown } from "react-icons/io";
import Image from "react-bootstrap/Image";
import { FaSearch } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import { CiSettings } from "react-icons/ci";
import { IoIosCall } from "react-icons/io";
import Card from "react-bootstrap/Card";

const Header = () => {
  
  
  return (
    <>
      <section className="nav">
        <Container>
          <Row className="d-flex justify-content-between p-2 align-items-center">
            <Col className="fw-semibold">
              <IoIosCall className="me-2" />
              (+1)866-540-3229
            </Col>
            <Col>
              <Image
                src="https://facon-1.myshopify.com/cdn/shop/files/logo.png?v=1734962234"
                alt="logo"
              />
            </Col>
            <Col xs={1} className="d-flex justify-content-between">
              <FaSearch />
              <FaCartShopping />
              <CiSettings />
            </Col>
          </Row>
        </Container>

        <Container className="p-0 menu">
          <Row className="justify-content-center">
            <Col xs={6} className="p-4 fs-5 justify-content-between d-flex">
              <Nav.Item className="list">
                home
                <IoIosArrowDown className="ms-2" />
                <ListGroup className="home">
                  <Nav.Item className="item">Home 1</Nav.Item>
                  <Nav.Item className="item">Home 2</Nav.Item>
                  <Nav.Item className="item">Home 3</Nav.Item>
                  <Nav.Item className="item">Home 4</Nav.Item>
                  <Nav.Item className="item">home 5</Nav.Item>
                </ListGroup>
              </Nav.Item>
              <Nav.Item className="list">
                shop
                <IoIosArrowDown className="ms-2" />
                <Col className="d-flex cloth ">
                  <ListGroup className="p-1 m-3">
                    <Nav.Item>
                      <h4>clothing</h4>
                    </Nav.Item>
                    <Nav.Item>shop</Nav.Item>
                    <Nav.Item>catlog</Nav.Item>
                    <Nav.Item>product</Nav.Item>
                    <Nav.Item>page</Nav.Item>
                    <Nav.Item>buy</Nav.Item>
                  </ListGroup>
                  <ListGroup className="p-1 m-3">
                    <Nav.Item>
                      <h4>footwear</h4>
                    </Nav.Item>
                    <Nav.Item>shop</Nav.Item>
                    <Nav.Item>catlog</Nav.Item>
                    <Nav.Item>product</Nav.Item>
                    <Nav.Item>page</Nav.Item>
                    <Nav.Item>buy</Nav.Item>
                  </ListGroup>
                  <ListGroup className="p-1 m-3">
                    <Nav.Item>
                      <h4>Apparel</h4>
                    </Nav.Item>
                    <Nav.Item>shop</Nav.Item>
                    <Nav.Item>catlog</Nav.Item>
                    <Nav.Item>product</Nav.Item>
                    <Nav.Item>page</Nav.Item>
                    <Nav.Item>buy</Nav.Item>
                  </ListGroup>
                  <ListGroup className="p-1 m-3">
                    <Nav.Item>
                      <h4>Skincare</h4>
                    </Nav.Item>
                    <Nav.Item>shop</Nav.Item>
                    <Nav.Item>catlog</Nav.Item>
                    <Nav.Item>product</Nav.Item>
                    <Nav.Item>page</Nav.Item>
                    <Nav.Item>buy</Nav.Item>
                  </ListGroup>
                </Col>
              </Nav.Item>
              <Nav.Item className="list">
                catlog
                <IoIosArrowDown className="ms-2" />
                <Col className="d-flex p-card ">
                  <Card  style={{ width: "16rem",borderRadius:"0px",textAlign:"center",margin:"10px",border:"0px" }}>
                    <Card.Img
                      variant="top"
                      src="https://facon-1.myshopify.com/cdn/shop/products/integer-enim-purus.jpg?crop=center&height=666&v=1735913822&width=500"
                    />
                    <Card.Body>
                      <Card.Text>Sleeve High Neck Bodycon Dress</Card.Text>
                      <Card.Text>
                        <b className="fs-6">$100.00</b>
                        <span class="text-decoration-line-through m-1">
                          $150.00
                        </span>
                      </Card.Text>
                    </Card.Body>
                  </Card>
                  <Card  style={{ width: "16rem",borderRadius:"0px",textAlign:"center",margin:"10px ",border:"0px" }}>
                    <Card.Img
                      variant="top"
                      src="https://facon-1.myshopify.com/cdn/shop/products/detail-1_3682bbfe-fdaa-4f7b-a25f-f9ec546a3680.jpg?crop=center&height=666&v=1475789129&width=500"
                    />
                    <Card.Body>
                      <Card.Text>Sleeve High Neck Bodycon Dress</Card.Text>
                      <Card.Text>
                        <b className="fs-6">$100.00</b>
                        <span class="text-decoration-line-through m-1">
                          $150.00
                        </span>
                      </Card.Text>
                    </Card.Body>
                  </Card>
                  <Card  style={{ width: "16rem",borderRadius:"0px",textAlign:"center",margin:"10px",border:"0px" }}>
                    <Card.Img
                      variant="top"
                      src="https://facon-1.myshopify.com/cdn/shop/products/blouse_411b702f-924c-4be4-a965-10956f4f7c4a.jpg?crop=center&height=666&v=1475785257&width=500"
                    />
                    <Card.Body>
                      <Card.Text>Sleeve High Neck Bodycon Dress</Card.Text>
                      <Card.Text>
                        <b className="fs-6">$100.00</b>
                        <span class="text-decoration-line-through m-1">
                          $150.00
                        </span>
                      </Card.Text>
                    </Card.Body>
                  </Card>
                  <Card  style={{ width: "16rem",borderRadius:"0px",textAlign:"center",margin:"10px",border:"0px" }}>
                    <Card.Img
                      variant="top"
                      src="https://facon-1.myshopify.com/cdn/shop/products/detail-thumb_2b59f2ae-f617-42e2-a3a9-6f397cdcf401.jpg?crop=center&height=666&v=1736092204&width=500"
                    />
                    <Card.Body>
                      <Card.Text>Sleeve High Neck Bodycon Dress</Card.Text>
                      <Card.Text>
                        <b className="fs-6">$100.00</b>
                        <span class="text-decoration-line-through m-1">
                          $150.00
                        </span>
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              </Nav.Item>
              <Nav.Item className="list">
                product
                <IoIosArrowDown className="ms-2" />
              </Nav.Item>
              <Nav.Item className="list">
                pages
                <IoIosArrowDown className="ms-2" />
              </Nav.Item>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Header;
