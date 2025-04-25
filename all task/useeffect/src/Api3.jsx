import React from "react";
import { useState } from "react";

const Api3 = ({ allrec }) => {
  console.log(allrec);

  return (
    <>
      <h1>api3</h1>

      <table className="table table-bordered table-striped">
        <thead>
          <tr>
            <th>id</th>
            <th>image</th>
            <th>name</th>
            <th>ingredients</th>
            <th>instructions</th>
            <th>caloriesPerServing</th>
          </tr>
        </thead>
        <tbody>
          {allrec.map((rec, index) => {
            return (
              <tr key={index}>
                <td>{rec.id}</td>
                <td>
                  <img src={rec.image} width={100} />
                </td>
                <td>{rec.name}</td>
                <td>{
                  rec.ingredients.map((ing, index) => {
                    return <li key={index}>{ing}</li>;
                  })
                  }</td>
                <td>{rec.instructions}</td>
                <td>{rec.caloriesPerServing}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default Api3;
