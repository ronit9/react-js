import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
const Secontapi = ({ data, getname, searchdata }) => {
  return (
    <>
      <Container>
        <Col className="search-section">
          <h1>Products</h1>
          <input
            type="text"
            className="form-control search-input mx-auto"
            placeholder="Search products..."
          />
        </Col>

        <Row className="justify-content-center">
          {searchdata !== 0
            ? searchdata.map((val, index) => {
                console.log(val);

                const { id, title, description, price, thumbnail } = val;
                return (
                  <>
                    <Card
                      className="m-3 product-card position-relative"
                      style={{ width: "18rem" }}
                    >
                      <Card.Img
                        variant="top"
                        src={thumbnail}
                        className="product-img"
                      />
                      <Card.Body className="text-center d-flex flex-column justify-content-between">
                        <Card.Title className="product-title">
                          {title}
                        </Card.Title>
                        <Card.Text className="product-desc">
                          {description?.length > 60
                            ? description.slice(0, 57) + "..."
                            : description}
                        </Card.Text>
                        <Card.Text className="product-price">
                          ₹{price}
                        </Card.Text>
                        <Button className="product-btn mt-2">
                          Add to Cart
                        </Button>
                      </Card.Body>
                    </Card>
                  </>
                );
              })
            : data.map((val, index) => {
                const { id, title, description, price, thumbnail } = val;
                return (
                  <>
                    <Card
                      className="m-3 product-card position-relative"
                      style={{ width: "18rem" }}
                    >
                      <Card.Img
                        variant="top"
                        src={thumbnail}
                        className="product-img"
                      />
                      <Card.Body className="text-center d-flex flex-column justify-content-between">
                        <Card.Title className="product-title">
                          {title}
                        </Card.Title>
                        <Card.Text className="product-desc">
                          {description?.length > 60
                            ? description.slice(0, 57) + "..."
                            : description}
                        </Card.Text>
                        <Card.Text className="product-price">
                          ₹{price}
                        </Card.Text>
                        <Button className="product-btn mt-2">
                          Add to Cart
                        </Button>
                      </Card.Body>
                    </Card>
                  </>
                );
              })}
        </Row>
      </Container>
    </>
  );
};

export default Secontapi;
