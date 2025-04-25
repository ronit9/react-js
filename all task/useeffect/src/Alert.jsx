import React, { useState, useEffect } from "react";
import { use } from "react";

const Alert = () => {
  let [cnt, setcnt] = useState("");
  let [start, setstart] = useState(false);

  const cntstart = () => {
    setstart(true);
  };

  useEffect(() => {
    if (start) {
      setTimeout(() => {
        setcnt(cnt - 1);
        if(cnt==0){
          alert("count is zero");
          setstart(false);
          setcnt(0)
          clearTimeout();
        }
      },1000);
    }
  });

  return (
    <>
      <input type="text" onChange={(e) => setcnt(e.target.value)} />
      <h1>count:-{cnt}</h1>
      <button onClick={() => cntstart()}>start</button>
    </>
  );
};

export default Alert;
