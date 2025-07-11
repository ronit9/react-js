import React from "react";
import { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";

import Card from "react-bootstrap/Card";
import { product } from "../../producs";
import Cartbtn from "../allbuttons/button/Cartbtn";
import {ADD_TO_CART} from "../../redux/action/AuthAction"
import { useDispatch } from "react-redux";
import "./filter.css";
const Filterproduct = () => {
  const [allproduct, setAllproduct] = useState(product);
  const [filterpro, setFilterpro] = useState();
  const some = allproduct.slice(0, 4);
  const dispatch=useDispatch()
  const getPro = (category) => {
    let all = product.filter((val) => val.category === category);
    all = all.splice(0, 4);
    setFilterpro(all);
  };
const addToCart=(id)=>{
  dispatch(ADD_TO_CART(id))
}
  return (
    <>
      <section className="filter p-5 d-flex align-items-center">
        <Container>
          <Row className="justify-content-center">
            <Col md={9} className="d-flex  justify-content-between">
              <button
                className="professional-button"
                onClick={() => getPro("beauty")}
              >
                <span>
                  <svg
                    className="filter-icon"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                  >
                    <path d="M3 5h18v2H3V5zm4 6h10v2H7v-2zm4 6h2v2h-2v-2z" />
                  </svg>
                  beauty
                </span>
              </button>
              <button
                className="professional-button"
                onClick={() => getPro("electronics")}
              >
                <span>
                  <svg
                    className="filter-icon"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                  >
                    <path d="M3 5h18v2H3V5zm4 6h10v2H7v-2zm4 6h2v2h-2v-2z" />
                  </svg>
                  electronics
                </span>
              </button>
              <button
                className="professional-button"
                onClick={() => getPro("clothing")}
              >
                <span>
                  <svg
                    className="filter-icon"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                  >
                    <path d="M3 5h18v2H3V5zm4 6h10v2H7v-2zm4 6h2v2h-2v-2z" />
                  </svg>
                  clothing
                </span>
              </button>
              <button
                className="professional-button"
                onClick={() => getPro("furniture")}
              >
                <span>
                  <svg
                    className="filter-icon"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                  >
                    <path d="M3 5h18v2H3V5zm4 6h10v2H7v-2zm4 6h2v2h-2v-2z" />
                  </svg>
                  furniture
                </span>
              </button>
            </Col>
          </Row>
          <Row className="justify-content-center">
            {filterpro
              ? filterpro.map((val) => {
                  const { id, title, price, image, details } = val;
                  return (
                    <Col md={3} className="mt-5" key={id}>
                      <div className="flip-card">
                        <div className="flip-card-inner">
                          <div className="flip-card-front p-2 ">
                            <img
                              className="img-fluid rounded"
                              src={image}
                              alt="Front Image"
                            />
                          </div>
                          <div className="flip-card-back d-flex flex-column p-3 justify-content-between">
                            <h3 className="title">{title}</h3>
                            <h4>${price}</h4>

                            <p>{details}</p>
                            <button onClick={() => addToCart(id)}>
                               <Cartbtn />
                            </button>
                          </div>
                        </div>
                      </div>
                    </Col>
                  );
                })
              : some.map((val) => {
                  const { id, title, price, image, details } = val;
                  return (
                    <Col md={3} className="mt-5" key={id}>
                      <div className="flip-card">
                        <div className="flip-card-inner">
                          <div className="flip-card-front  p-2 ">
                            <img
                              className="img-fluid rounded"
                              src={image}
                              alt="Front Image"
                            />
                          </div>
                          <div className="flip-card-back d-flex flex-column p-3 justify-content-between">
                            <h3 className="title">{title}</h3>
                            <h4>${price}</h4>

                            <p>{details}</p>
                            <button onClick={() => addToCart(id)}>
                             <Cartbtn />
                            </button>
                          </div>
                        </div>
                      </div>
                    </Col>
                  );
                })}
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Filterproduct;
