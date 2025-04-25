import React, { useEffect } from "react";
import { useState } from "react";

const Api2 = ({ allproduct }) => {
  console.log(allproduct);

  
  

  return (
    <>
      <h1>api 2</h1>
      <div className="container">
        <div className="row">
          {allproduct.map((p, index) => {
            return (
              <div key={index} className="card m-2" style={{ width: "18rem" }}>
                <img
                  src={p.thumbnail}
                  className="card-img-top"
                  alt="Product Image"
                />
                <div className="card-body">
                  <h5 className="card-title">{p.title}</h5>
                  <p className="card-text text-danger">
                    <strong>{p.availabilityStatus}</strong>
                  </p>
                  <p className="card-text">
                    <strong>Brand:{p.brand}</strong>
                  </p>
                  <p className="card-text">
                    <strong>Category:{p.category}</strong>
                  </p>
                  <p className="card-text">
                    <strong className="d-block">Price:{p.price}</strong>
                    <span className="text-success">
                      discount:-{p.discountPercentage}%
                    </span>
                  </p>
                  <p className="card-text">
                    <strong>
                      Rating:
                      {p.rating}
                    </strong>
                  </p>
                  <p className="card-text">
                    <strong>Shipping:{p.shippingInformation}</strong>
                  </p>
                  <p className="card-text">
                    <strong>Return:{p.returnPolicy}</strong>
                  </p>
                  <button onClick={() => show(index)}>review</button>
                  <div id="list">
                    {p.reviews.map((r, index) => {
                      return (
                        <div key={index}>
                          <h6>{r.rating}</h6>
                          <p>{r.comment}</p>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Api2;
