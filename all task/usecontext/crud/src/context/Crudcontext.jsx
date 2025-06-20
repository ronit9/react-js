import React, { createContext } from "react";
import { useState } from "react";

export const Crudprovider = createContext();
const Crudcontext = ({ children }) => {
  const [data, setData] = useState({
    hobies: [],
  });
  const [alldata, setAlldata] = useState(
    JSON.parse(localStorage.getItem("data")) || []
  );

  const adduser = (obj) => {
    let rec = [...alldata, obj];
    setAlldata(rec);

    localStorage.setItem("data", JSON.stringify(rec));
  };

  const deletedata = (id) => {
    const deletid = alldata.filter((val) => val.id !== id);
    setAlldata(deletid);
    localStorage.setItem("data", JSON.stringify(deletid));
  };

  const editdata = (id) => {
    const single = alldata.find((val) => val.id === id);
    setData(single);
  };
  
  return (
    <>
      <Crudprovider.Provider
        value={{ data, setData, adduser, alldata, deletedata, editdata }}
      >
        {children}
      </Crudprovider.Provider>
    </>
  );
};

export default Crudcontext;
