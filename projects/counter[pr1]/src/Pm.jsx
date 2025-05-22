import { useState } from "react";

const Pm = () => {
  let [cnt, setcnt] = useState(0);
  const inc = () => {
    setcnt(cnt + 1);
  };
  const dec = () => {
    setcnt(cnt - 1);
  };
  return (
    <>
      <h1>coounter button</h1>
   
      <h1>couter:-{cnt}</h1>
      <button onClick={inc}>plus</button>
      <button disabled={cnt <= 0} onClick={dec}>
        minus
      </button>
      <button onClick={() => setcnt(0)}>reset</button>
      <hr />
    </>
  );
};
export default Pm;
