import React, { useContext } from "react";
import { countercontext } from "../context/Counterprovider";

const Counter = () => {
  const { no, increment, decrement } = useContext(countercontext);
  console.log(no);

  return (
    <>
      <h1>{no}</h1>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
    </>
  );
};

export default Counter;
