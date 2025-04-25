import React, { useEffect } from "react";
import { useState } from "react";

const Api = ({ alluser }) => {
  console.log(alluser);

  return (
    <>
      <h1>api 1</h1>
      <div className="container">
        <div className="row">
          {alluser.map((u) => {
            return (
              <div key={u.id} className="card m-3" style={{ width: "18rem" }}>
                <div className="card-body">
                  <span>{u.id}</span>
                  <h5 className="card-title">{u.title}</h5>
                  <hr />
                  <p className="card-text">{u.body}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Api;
