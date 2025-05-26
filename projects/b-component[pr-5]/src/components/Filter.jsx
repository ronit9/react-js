import React from "react";
import clothes from "./Data";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Col";
import Col from "react-bootstrap/Col";
import { useState } from "react";
import Card from "react-bootstrap/Card";
import { Container } from "react-bootstrap";
import { CardGroup } from "react-bootstrap";
import { FaShoppingBag } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { FaListAlt } from "react-icons/fa";
import { FaEye } from "react-icons/fa6";
const Filter = () => {
  const [filter, setFilter] = useState([]);
  console.log(filter);

  const filtercloth = (gender) => {
    let result = clothes.filter((c) => c.gender === gender);
    setFilter(result);
  };

  return (
    <section className="filter">
      <Container className="text-center p-5 fil">
        <h1 className="mb-5">NEW ARRIVALS</h1>
        <Col className="d-flex justify-content-center f-btn">
          <Row xs={6} className="d-flex justify-content-between ">
            <Button onClick={() => filtercloth("all")}>all</Button>
            <Button onClick={() => filtercloth("female")}>female</Button>
            <Button onClick={() => filtercloth("male")}>male</Button>
            <Button onClick={() => filtercloth("unisex")}>unisex</Button>
          </Row>
        </Col>
      </Container>
      <Container>
        <CardGroup>
          {filter.length
            ? filter.map((c) => {
                const { id, name, type, sizes, price, gender, image } = c;
                return (
                  <Col
                    xs={12}
                    sm={6}
                    md={6}
                    lg={4}
                    xl={3}
                    key={id}
                    className=" justify-content-center justify-content-between"
                    >
                    <Card className="fcard " style={{ border: "none" }}>
                      <Card.Img className="mx-auto" src={image} />
                      <Card.Body className="text-center">
                        <Col
                          xs={6}
                          className="icons  d-flex justify-content-between"
                        >
                          <div className=" icon text-white">
                            <FaShoppingBag />
                          </div>
                          <div className=" icon text-white">
                            <FaHeart />
                          </div>
                          <div className=" icon text-white">
                            <FaListAlt />
                          </div>
                          <div className=" icon text-white">
                            <FaEye />
                          </div>
                        </Col>
                        <Card.Title>{name}</Card.Title>
                        <Card.Text>
                          <p>{type}</p>
                          <p>{sizes}</p>
                          <p>{price}</p>
                          <p>{gender}</p>
                        </Card.Text>
                      </Card.Body>
                    </Card>
                  </Col>
                );
              })
            : clothes.map((c) => {
                const { id, name, type, sizes, price, gender, image } = c;
                return (
                  <Col
                    xs={12}
                    sm={6}
                    md={6}
                    lg={4}
                    xl={3}
                    key={id}
                    className=" justify-content-center justify-content-between"
                  >
                    <Card className="fcard " style={{ border: "none" }}>
                      <Card.Img className="mx-auto img-fluid" src={image} />
                      <Card.Body className="text-center">
                        <Col
                          xs={6}
                          className="icons  d-flex justify-content-between"
                        >
                          <div className=" icon text-white">
                            <FaShoppingBag />
                          </div>
                          <div className=" icon text-white">
                            <FaHeart />
                          </div>
                          <div className=" icon text-white">
                            <FaListAlt />
                          </div>
                          <div className=" icon text-white">
                            <FaEye />
                          </div>
                        </Col>
                        <Card.Title>{name}</Card.Title>
                        <Card.Text>
                          <p>{type}</p>
                          <p>{sizes}</p>
                          <p>{price}</p>
                          <p>{gender}</p>
                        </Card.Text>
                      </Card.Body>
                    </Card>
                  </Col>
                );
              })}
        </CardGroup>
      </Container>
    </section>
  );
};

export default Filter;
