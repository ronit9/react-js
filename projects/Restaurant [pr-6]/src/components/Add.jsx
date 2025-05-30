import React from "react";
import { useState } from "react";
import { Col } from "react-bootstrap";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Home from "./Header";
const Add = ({ formSubmit, formInput, recipes, formerrors }) => {
  const [show, setShow] = useState(false);
  return (
    <>
      <Home />
      <section className="add GreatVibes p-5">
        <Container>
          <Row>
            <Col
              lg={6}
              className="d-flex flex-column justify-content-center finput"
            >
              <Col>
                <FloatingLabel
                  controlId="floatingInput"
                  label="Racipe Title"
                  className="mb-3"
                >
                  <Form.Control
                    type="text"
                    name="recipeName"
                    onChange={(e) => {
                      formInput(e);
                      setShow(true);
                    }}
                    value={recipes.recipeName}
                    placeholder="Enter Recipe Title"
                  />
                </FloatingLabel>
                {formerrors && (
                  <p className="text-danger">{formerrors.recipeName}</p>
                )}
              </Col>
              <Col>
                <FloatingLabel
                  controlId="floatingInput"
                  label="Racipe information"
                  className="mb-3"
                >
                  <Form.Control
                    type="text"
                    name="info"
                    onChange={(e) => formInput(e)}
                    value={recipes.info}
                    placeholder="Enter Recipe Information"
                  />
                </FloatingLabel>
                {formerrors && (
                  <p className="text-danger">{formerrors.recipeName}</p>
                )}
              </Col>
              <Col>
                <FloatingLabel
                  controlId="floatingInput"
                  label="Racipe Ingredients"
                  className="mb-3"
                >
                  <Form.Control
                    type="text"
                    name="ingredients"
                    onChange={(e) => formInput(e)}
                    value={recipes.ingredients}
                    placeholder="Enter Recipe Ingredients"
                  />
                </FloatingLabel>
                {formerrors && (
                  <p className="text-danger">{formerrors.ingredients}</p>
                )}
              </Col>
              <Col>
                <FloatingLabel
                  controlId="floatingInput"
                  label="Price"
                  className="mb-3"
                >
                  <Form.Control
                    type="number"
                    name="price"
                    onChange={(e) => formInput(e)}
                    value={recipes.price}
                    placeholder="Enter Price"
                  />
                  {formerrors && (
                    <p className="text-danger">{formerrors.price}</p>
                  )}
                </FloatingLabel>
              </Col>
              <Col>
                <FloatingLabel
                  controlId="floatingInput"
                  label="Image URL"
                  className="mb-3"
                >
                  <Form.Control
                    type="url"
                    name="image"
                    placeholder="Enter Image Url"
                    onChange={(e) => formInput(e)}
                    value={recipes.image}
                    size="lg"
                  />
                  {formerrors && (
                    <p className="text-danger">{formerrors.image}</p>
                  )}
                </FloatingLabel>
              </Col>

              <Col className="d-flex flex-wrap justify-content-lg-evenly mb-2 choose fs-5">
                <Form.Check
                  type="checkbox"
                  aria-label="option 1"
                  name="taste"
                  label="sweet"
                  value={"sweet"}
                  onChange={(e) => formInput(e)}
                  checked={recipes.taste.includes("sweet")}
                />
                <Form.Check
                  type="checkbox"
                  aria-label="option 2"
                  name="taste"
                  label="spicy"
                  value="spicy"
                  onChange={(e) => formInput(e)}
                  checked={recipes.taste.includes("spicy")}
                />
                <Form.Check
                  type="checkbox"
                  aria-label="option 3"
                  name="taste"
                  label="sour"
                  value="sour"
                  onChange={(e) => formInput(e)}
                  checked={recipes.taste.includes("sour")}
                />
                <Form.Check
                  type="checkbox"
                  aria-label="option 4"
                  name="taste"
                  label="salty"
                  value="salty"
                  onChange={(e) => formInput(e)}
                  checked={recipes.taste.includes("salty")}
                />
                <Form.Check
                  type="checkbox"
                  aria-label="option 5"
                  name="taste"
                  label="umami"
                  value="umami"
                  onChange={(e) => formInput(e)}
                  checked={recipes.taste.includes("umami")}
                />
              </Col>
              <Col className="d-flex flex-wrap justify-content-lg-evenly choose fs-5">
                <Form.Check
                  type="checkbox"
                  aria-label="option 6"
                  name="taste"
                  label="bitter"
                  value="bitter"
                  onChange={(e) => formInput(e)}
                  checked={recipes.taste.includes("bitter")}
                />
                <Form.Check
                  type="checkbox"
                  aria-label="option 7"
                  name="taste"
                  label="smoky"
                  value="smoky"
                  onChange={(e) => formInput(e)}
                  checked={recipes.taste.includes("smoky")}
                />
                <Form.Check
                  type="checkbox"
                  aria-label="option 8"
                  name="taste"
                  label="fruity"
                  value="fruity"
                  onChange={(e) => formInput(e)}
                  checked={recipes.taste.includes("fruity")}
                />
                <Form.Check
                  type="checkbox"
                  aria-label="option 9"
                  name="taste"
                  label="nutty"
                  value="nutty"
                  onChange={(e) => formInput(e)}
                  checked={recipes.taste.includes("nutty")}
                />
                <Form.Check
                  type="checkbox"
                  aria-label="option 10"
                  name="taste"
                  label="earthy"
                  value="earthy"
                  onChange={(e) => formInput(e)}
                  checked={recipes.taste.includes("earthy")}
                />
              </Col>
              <Col className="d-flex align-items-center  mt-3">
                <Form.Select
                  aria-label="Default select example"
                  name="category"
                  onChange={(e) => formInput(e)}
                  value={recipes.category}
                >
                  <option>Select Category</option>
                  <option value="Starter">Starter</option>
                  <option value="Main Course">Main Course</option>
                  <option value="Dessert">Dessert</option>
                  <option value="Punjabi">Punjabi</option>
                  <option value="Chinese">Chinese</option>
                </Form.Select>
                {formerrors && (
                  <p className="text-danger">{formerrors.category}</p>
                )}
              </Col>
              <Col className="d-flex justify-content-evenly my-3">
                <Col lg={10} className="d-flex justify-content-between align-items-center fs-4">
                  <Form.Check
                    type="radio"
                    label="desert"
                    name="critaria"
                    onChange={(e) => formInput(e)}
                    value="desert"
                    checked={recipes.critaria === "desert"}
                  />
                  <Form.Check
                    type="radio"
                    label="vegetarian"
                    name="critaria"
                    onChange={(e) => formInput(e)}
                    value="vegetarian"
                    checked={recipes.critaria === "vegetarian"}
                  />
                  <Form.Check
                    type="radio"
                    label="non-vegetarian"
                    name="critaria"
                    onChange={(e) => formInput(e)}
                    value="non-vegetarian"
                    checked={recipes.critaria === "non-vegetarian"}
                  />
                </Col>
                {formerrors && (
                  <p className="text-danger">{formerrors.critaria}</p>
                )}
              </Col>
              <Button
                className="my-3 mx-auto"
                type="submit"
                onClick={(e) => {
                  formSubmit(e);
                  setShow(false);
                }}
                onKeyDown={(e) => e.key === "Enter" && formSubmit(e)}
              >
                Submit
              </Button>
            </Col>
            <Col
              lg={6}
              className="d-flex justify-content-center "
            >
              {show === true ? (
                <Card className="rcard Lora">
                  <Card.Img
                    className="cardimg"
                    variant="top"
                    src={recipes.image}
                  />
                  <Card.Body className="m-3 d-block">
                    <Card.Title className="fs-3">
                      🍽️{recipes.recipeName}
                    </Card.Title>
                    <Card.Text className="fw-semibold">
                      {recipes.info}
                    </Card.Text>
                    <Card.Text>
                      <b>Ingredients:</b>
                      <span className="m-2"> {recipes.ingredients}</span>
                    </Card.Text>
                    <Card.Text>
                      <b>
                        Price: <span className="pri m-1">₹{recipes.price}</span>
                      </b>
                    </Card.Text>
                    <Card.Text>
                      <b> Critaria:</b>
                      <span className="m-2">{recipes.critaria}</span>
                    </Card.Text>
                    <Card.Text>
                      <b>Category:</b>
                      <span className="cat m-2 p-1 rounded-3 text-white">
                        {recipes.category}
                      </span>
                    </Card.Text>
                    <Card.Text className="d-flex flex-wrap  align-items-center">
                      <b>Taste:</b>

                      {recipes.taste.map((item) => {
                        return <span className="bg-danger taste mb-2">{item}</span>;
                      })}
                    </Card.Text>
                  </Card.Body>
                </Card>
              ) : null}
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Add;
