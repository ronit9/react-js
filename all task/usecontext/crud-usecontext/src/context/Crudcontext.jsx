import React, { createContext, useState } from "react";
import { useParams } from "react-router";

export const crudprovider = createContext();
const Crudcontext = ({ children }) => {
  const [inputdata, setinputdata] = useState([]);

  const [newuser, setnewuser] = useState(
    localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user")) : []
  );
  const [findid, setfindid] = useState([]);
  console.log(findid);
  
  const adduser = (obj) => {
    let alluser = [...newuser, obj];
    console.log(alluser);

    setnewuser(alluser);
    localStorage.setItem("user", JSON.stringify(alluser));
  };

  const deleuser = (id) => {
    let deletid = newuser.filter((val) => val.id !== id);

    setnewuser(deletid);
    localStorage.setItem("user", JSON.stringify(deletid));
  };

  const edituser = (id) => {
    let editid = newuser.find((val) => val.id === id);
    setfindid(editid);
  };
  return (
    <>
      <crudprovider.Provider
        value={{
          inputdata,
          setinputdata,
          adduser,
          setnewuser,
          deleuser,
          newuser,
          edituser,
          findid
        }}
      >
        {children}
      </crudprovider.Provider>
    </>
  );
};

export default Crudcontext;
