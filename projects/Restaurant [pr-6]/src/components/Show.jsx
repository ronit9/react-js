import React, { useEffect } from "react";
import Home from "./Header";
import { Card, Container, Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
const Show = ({ deleterecipes }) => {
  const navigate = useNavigate();
  const [getrecipes, setGetrecipes] = useState();
  const filterracipes = (data) => {
    setGetrecipes(data);
  };
  const [getfilter, setGetfilter] = useState([]);

  let allrecipes = JSON.parse(localStorage.getItem("recipes"));
  let veg = JSON.parse(localStorage.getItem("vegetarian"));
  let nonveg = JSON.parse(localStorage.getItem("nonveg"));
  let des = JSON.parse(localStorage.getItem("dessert"));
  console.log(allrecipes);
  const editrecipes = (id) => {
    navigate(`/edit/${id}`);
  };
  const getitem = (e) => {
    let rec = allrecipes.filter((item) => {
      return (
        item.recipeName.toLowerCase().includes(e.target.value.toLowerCase()) ||
        item.taste.some((item) =>
          item.toLowerCase().includes(e.target.value.toLowerCase())
        ) ||
        parseInt(item.rating) === parseInt(e.target.value)
      );
    });
    setGetfilter(rec);
  };
  const colorstyle = (critaria) => {
    if (critaria === "vegetarian") {
      return { color: "green",backgroundColor:"#FAA317" };
    } else if (critaria === "non-vegetarian") {
      return { color: "red" };
    } else {
      return { color: "white",backgroundColor:"#AE7054" };
    }
  };

  return (
    <>
      <Home />

      <section className="show">
        <Col lg={12} className=" text-danger  text-center p-5">
          <h1 className="Pacifico mb-3">My Recipe Book</h1>
          <p className="GreatVibes  m-0">Explore the flavors of the world</p>
        </Col>
      </section>
      <section className="p-5 d-flex justify-content-between">
        <FloatingLabel
          controlId="floatingInput"
          label="Racipe name"
          className="mb-3"
        >
          <Form.Control
            type="text"
            name="recipeName"
            onChange={(e) => {
              getitem(e);
            }}
            placeholder="search recipe"
          />
        </FloatingLabel>
        <FloatingLabel controlId="floatingInput" label="taste" className="mb-3">
          <Form.Control
            type="text"
            name="recipeName"
            onChange={(e) => {
              getitem(e);
            }}
            placeholder="search recipe"
          />
        </FloatingLabel>
        <FloatingLabel controlId="floatingInput" label="price" className="mb-3">
          <Form.Control
            type="text"
            name="recipeName"
            onChange={(e) => {
              getitem(e);
            }}
            placeholder="price"
          />
        </FloatingLabel>
      </section>
      <section className="p-5 scard">
        <Container>
          <Row className="mb-4 justify-content-center">
            <Col lg={6} className=" d-flex justify-content-between  fil">
              <Button onClick={() => filterracipes(allrecipes)}>All</Button>
              <Button onClick={() => filterracipes(nonveg)}>Non-veg</Button>
              <Button onClick={() => filterracipes(vegetarian)}>
                Vegetarian
              </Button>
              <Button onClick={() => filterracipes(desert)}>Desert</Button>
            </Col>
          </Row>

          <Row className="justify-content-center">
            {getfilter.length > 0
              ? getfilter.map((val) => {
                  const {
                    id,
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
                      <Card>
                        <Card.Img variant="top" src={image} />
                        <Card.Body className="p-3 d-flex flex-column align-items-between">
                          <Card.Title className="GreatVibes fs-2">
                            {recipeName}
                          </Card.Title>
                          <Card.Text
                            style={colorstyle(critaria)}
                            className="fs-6 fw-semibold lora cri rounded-4 d-inline px-2"
                          >
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
                            <span className="text-danger fw-bolder">
                              ₹{price}
                            </span>
                          </Card.Text>
                          <Col>
                            <Button onClick={() => editrecipes(id)}>
                              edit
                            </Button>
                            <Button onClick={() => deleterecipes(id)}>
                              delet
                            </Button>
                          </Col>
                        </Card.Body>
                      </Card>
                    </Col>
                  );
                })
              : allrecipes
              ? allrecipes.map((val) => {
                  const {
                    id,
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
                      <Card>
                        <Card.Img variant="top" src={image} />
                        <Card.Body className="p-3 d-flex flex-column align-items-between">
                          <Card.Title className="GreatVibes fs-2">
                            {recipeName}
                          </Card.Title>
                          <Card.Text
                            style={colorstyle(critaria)}
                            className="fs-6 lora fw-semibold cri rounded-4 d-inline px-2"
                          >
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
                            <span className="text-danger fw-bolder">
                              ₹{price}
                            </span>
                          </Card.Text>
                          <Col>
                            <Button onClick={() => editrecipes(id)}>
                              edit
                            </Button>
                            <Button onClick={() => deleterecipes(id)}>
                              delet
                            </Button>
                          </Col>
                        </Card.Body>
                      </Card>
                    </Col>
                  );
                })
              : getrecipes.map((val) => {
                  const {
                    id,
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
                      <Card>
                        <Card.Img variant="top" src={image} />
                        <Card.Body className="p-3 d-flex flex-column justify-content-between">
                          <Card.Title className="GreatVibes fs-2">
                            {recipeName}
                          </Card.Title>
                          <Card.Text
                            style={colorstyle(critaria)}
                            className="fs-6 lora fw-semibold cri rounded-4 d-inline px-2"
                          >
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
                            <span className="text-danger fw-bolder">
                              ₹{price}
                            </span>
                          </Card.Text>
                          <Col>
                            <Button onClick={() => editrecipes(id)}>
                              edit
                            </Button>
                            <Button onClick={() => deleterecipes(id)}>
                              delet
                            </Button>
                          </Col>
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
