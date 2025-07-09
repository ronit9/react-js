import React from "react";
import Header from "../header/Header";
import { Container } from "react-bootstrap";

const AddCart = () => {
  return (
    <>
      <section>
  
        <Header />
        <Container className="text-center p-5">
          <h1>Cart Product</h1>
        </Container>
      </section>
    </>
  );
};

export default AddCart;
