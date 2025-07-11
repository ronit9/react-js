import React from "react";
import Header from "../header/Header";
import { Col, Container, Row } from "react-bootstrap";
import { useState } from "react";
import "./addcart.css";
import { useDispatch, useSelector } from "react-redux";
import { DELET_ITEM } from "../../redux/action/AuthAction";
import { QTY_MANAGE } from "../../redux/action/AuthAction";
const AddCart = () => {
  const cart = useSelector((state) => state?.alldata?.cart);
  const dispatch = useDispatch();
  const deletItem = (id) => {
    dispatch(DELET_ITEM(id));
  };
  const increseqty = (id, type) => {
    dispatch(QTY_MANAGE(id, type));
  };
  
  return (
    <>
      <Header />
      <section className="addcart">
        <Container fluid className="text-center p-5 ">
          <div className="cart-container">
            <div className="cart-icon">🛒</div>
            <div className="cart-text">Your Cart</div>
          </div>
          <Row className="align-items-center ">
            {cart.map((val,index) => {
              const { id, title, price, image, qty, finalTotal } = val;

              return (
                <Col md={3} key={index}>
                  <div className="book m-3">
                    <div className="info ">
                      <h4 className="text-dark">{title}</h4>

                      <div className="quantity-control d-flex align-items-center ">
                        <button onClick={() => increseqty(id, "inc")}>+</button>
                        <span>{qty}</span>
                        <button  onClick={() => increseqty(id, "dec")}>-</button>
                      </div>

                      <span className="text-dark">Price :₹ {price}</span>
                      <span>Total: ₹ {finalTotal}</span>

                      <button
                        className="bin-button"
                        onClick={() => deletItem(id)}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 39 7"
                          className="bin-top"
                        >
                          <line
                            strokeWidth={4}
                            stroke="white"
                            y2={5}
                            x2={39}
                            y1={5}
                          />
                          <line
                            strokeWidth={3}
                            stroke="white"
                            y2="1.5"
                            x2="26.0357"
                            y1="1.5"
                            x1={12}
                          />
                        </svg>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 33 39"
                          className="bin-bottom"
                        >
                          <mask fill="white" id="path-1-inside-1_8_19">
                            <path d="M0 0H33V35C33 37.2091 31.2091 39 29 39H4C1.79086 39 0 37.2091 0 35V0Z" />
                          </mask>
                          <path
                            mask="url(#path-1-inside-1_8_19)"
                            fill="white"
                            d="M0 0H33H0ZM37 35C37 39.4183 33.4183 43 29 43H4C-0.418278 43 -4 39.4183 -4 35H4H29H37ZM4 43C-0.418278 43 -4 39.4183 -4 35V0H4V35V43ZM37 0V35C37 39.4183 33.4183 43 29 43V35V0H37Z"
                          />
                          <path
                            strokeWidth={4}
                            stroke="white"
                            d="M12 6L12 29"
                          />
                          <path strokeWidth={4} stroke="white" d="M21 6V29" />
                        </svg>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 89 80"
                          className="garbage"
                        >
                          <path
                            fill="white"
                            d="M20.5 10.5L37.5 15.5L42.5 11.5L51.5 12.5L68.75 0L72 11.5L79.5 12.5H88.5L87 22L68.75 31.5L75.5066 25L86 26L87 35.5L77.5 48L70.5 49.5L80 50L77.5 71.5L63.5 58.5L53.5 68.5L65.5 70.5L45.5 73L35.5 79.5L28 67L16 63L12 51.5L0 48L16 25L22.5 17L20.5 10.5Z"
                          />
                        </svg>
                      </button>
                    </div>

                    <div className="cover">
                      <img src={image} alt="" />
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

export default AddCart;
