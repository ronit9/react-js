import React, { createContext, useState } from "react";
export const countercontext = createContext();
const Counterprovider = ({ children }) => {
  const [no, setno] = useState(0);
  const increment = () => {
    setno(no + 1);
  };
  const decrement = () => {
    setno(no - 1);
  }
  return (
    <>
      <countercontext.Provider value={{ no,increment,decrement }}>
        {children}
      </countercontext.Provider>
    </>
  );
};

export default Counterprovider;
