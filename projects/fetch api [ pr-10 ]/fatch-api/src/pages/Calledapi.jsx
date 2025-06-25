import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const Calledapi = ({ recipes, getrec, searched }) => {
  return (
    <Container className=" ">
      <Col className="text-center my-4">
        <h1
          className="fw-bold mb-3"
          style={{ color: "#EEA302", fontSize: "2.5rem" }}
        >
          Your Kitchen Friend
        </h1>
        <input
          type="text"
          placeholder="Search your recipe..."
          onChange={(e) => getrec(e)}
          className="search-input"
        />
      </Col>

      <Row className="d-flex justify-content-center">
        {searched.length > 0
          ? searched.map((val) => {
              const { id, name, image, ingredients } = val;
              return (
                <>
                  <Card
                    className="recipe-card shadow-lg border-0 m-3"
                    key={id}
                    style={{ width: "18rem", backgroundColor: "#fff" }}
                  >
                    <Card.Img
                      src={image}
                      alt={name}
                      className="recipe-img"
                      style={{ height: "180px", objectFit: "cover" }}
                    />
                    <Card.Body className="d-flex flex-column justify-content-between text-center p-3">
                      <Card.Title className="recipe-title fs-5 fw-bold text-dark mb-2">
                        {name}
                      </Card.Title>

                      <Card.Text
                        className="text-start w-100 mb-3"
                        style={{ maxHeight: "120px", overflowY: "auto" }}
                      >
                        <ul className="ingredient-list list-unstyled mb-0 ps-3">
                          {ingredients.map((item, index) => (
                            <li key={index} className="text-muted small">
                              • {item}
                            </li>
                          ))}
                        </ul>
                      </Card.Text>

                      <Button
                        variant="dark"
                        className="recipe-btn mt-auto px-4 py-2 fw-semibold"
                        style={{ fontSize: "14px", borderRadius: "20px" }}
                      >
                        View Recipe
                      </Button>
                    </Card.Body>
                  </Card>
                </>
              );
            })
          : recipes.map((val) => {
              const { id, name, image, ingredients } = val;
              return (
                <>
                  <Card
                    className="recipe-card shadow-lg border-0 m-3"
                    key={id}
                    style={{ width: "18rem", backgroundColor: "#fff" }}
                  >
                    <Card.Img
                      src={image}
                      alt={name}
                      className="recipe-img"
                      style={{ height: "180px", objectFit: "cover" }}
                    />
                    <Card.Body className="d-flex flex-column justify-content-between text-center p-3">
                      <Card.Title className="recipe-title fs-5 fw-bold text-dark mb-2">
                        {name}
                      </Card.Title>

                      <Card.Text
                        className="text-start w-100 mb-3"
                        style={{ maxHeight: "120px", overflowY: "auto" }}
                      >
                        <ul className="ingredient-list list-unstyled mb-0 ps-3">
                          {ingredients.map((item, index) => (
                            <li key={index} className="text-muted small">
                              • {item}
                            </li>
                          ))}
                        </ul>
                      </Card.Text>

                      <Button
                        variant="dark"
                        className="recipe-btn mt-auto px-4 py-2 fw-semibold"
                        style={{ fontSize: "14px", borderRadius: "20px" }}
                      >
                        View Recipe
                      </Button>
                    </Card.Body>
                  </Card>
                </>
              );
            })}
      </Row>
    </Container>
  );
};

export default Calledapi;
