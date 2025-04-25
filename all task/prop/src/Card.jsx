import React, { useState } from "react";

const Card = ({ card }) => {

  return (
    <>
      <div className="container">
        <div className="row">
          {card.map((c) => {
           
            return (
              <div
                className="card col-md-3 m-3 bg-light"
                style={{ width: "18rem" }}
              >
                <div className="card-body text-center">
                  <h5 className="card-title">{c.name}</h5>
                  <p className="card-text">{c.age}</p>
                  <p className="card-text">{c.city}</p>
                  <p className="card-text">{c.occupation}</p>
                  <p className="card-text">{c.hobbies}</p>
                  <p className="card-text">{c.favoriteFood}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

    
    </>
  );
};

// const Counter=()=>{
   
//     return(
//        <>
//         <h1>couter</h1>
//         <h1>couter:-{cnt}</h1>
//        </>
//     )
// }

export default Card;
