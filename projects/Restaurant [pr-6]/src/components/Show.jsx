<<<<<<< HEAD
import React from "react";
import Home from "./Header";
import { Card, Container, Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
const Show = ({ allrecipes }) => {
  console.log(allrecipes);

  return (
    <>
      <Home />

      <section className="show">
        <Col lg={12} className=" text-danger  text-center p-5">
          <h1 className="Pacifico mb-3">My Recipe Book</h1>
          <p className="GreatVibes  m-0">Explore the flavors of the world</p>
        </Col>
      </section>
      <section className="p-5 scard">
        <Container>
          <Row>
            {allrecipes.map((val) => {
              const {
                category,
                critaria,
                image,
                info,
                ingredients,
                price,
                recipeName,
                taste,
              } = val;
              return (
                <Col lg={3} className="mb-4">
                  <Card >
                    <Card.Img variant="top" src={image} />
                    <Card.Body className="p-3 d-flex flex-column justify-content-between">
                      <Card.Title className="GreatVibes fs-2">
                        {recipeName}
                      </Card.Title>
                      <Card.Text className="fs-6 lora cri rounded-4 d-inline px-2">
                        {critaria}
                      </Card.Text>
                      <Card.Text>
                        <b className="me-2">ingredients:</b>
                        {ingredients}
                      </Card.Text>
                      <Card.Text>
                        <b className="me-2">taste:</b>
                        {taste.join(", ")}
                      </Card.Text>
                      <Card.Text>
                        <b className="me-2">info:</b>
                        {info}
                      </Card.Text>
                      <Card.Text>
                        <b className="me-2">price:</b>
                        <span className="text-danger fw-bolder">₹{price}</span>
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              );
            })}
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Show;
=======
import React from "react";
import Home from "./Header";
import { Card, Container, Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
const Show = ({ allrecipes }) => {
  console.log(allrecipes);

  return (
    <>
      <Home />

      <section className="show">
        <Col lg={12} className=" text-danger  text-center p-5">
          <h1 className="Pacifico mb-3">My Recipe Book</h1>
          <p className="GreatVibes  m-0">Explore the flavors of the world</p>
        </Col>
      </section>
      <section className="p-5 scard">
        <Container>
          <Row>
            {allrecipes.map((val) => {
              const {
                category,
                critaria,
                image,
                info,
                ingredients,
                price,
                recipeName,
                taste,
              } = val;
              return (
                <Col lg={3} className="mb-4">
                  <Card >
                    <Card.Img variant="top" src={image} />
                    <Card.Body className="p-3 d-flex flex-column justify-content-between">
                      <Card.Title className="GreatVibes fs-2">
                        {recipeName}
                      </Card.Title>
                      <Card.Text className="fs-6 lora cri rounded-4 d-inline px-2">
                        {critaria}
                      </Card.Text>
                      <Card.Text>
                        <b className="me-2">ingredients:</b>
                        {ingredients}
                      </Card.Text>
                      <Card.Text>
                        <b className="me-2">taste:</b>
                        {taste.join(", ")}
                      </Card.Text>
                      <Card.Text>
                        <b className="me-2">info:</b>
                        {info}
                      </Card.Text>
                      <Card.Text>
                        <b className="me-2">price:</b>
                        <span className="text-danger fw-bolder">₹{price}</span>
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              );
            })}
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Show;
>>>>>>> 7671f32 (pr-6)
