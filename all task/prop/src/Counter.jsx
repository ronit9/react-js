import React, { useState } from "react";

const Counter = () => {
  let [cnt, setcnt] = useState(0);
  const plus = () => {
    setcnt(cnt + 1);
  };
  const minus = () => {
    setcnt(cnt - 1);
  };
  return (
    <>
      <h1>couter</h1>
      <h1>couter:-{cnt}</h1>
      <button onClick={() => plus()}>Increment</button>
      <button disabled={cnt == 0} onClick={() => minus()}>
        Decrement
      </button>
      <button
        onClick={() => {
          setcnt(0);
        }}
      >
        reset
      </button>
    </>
  );
};

export default Counter;
