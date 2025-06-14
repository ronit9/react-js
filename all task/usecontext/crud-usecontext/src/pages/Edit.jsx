import React, { useContext, useEffect } from "react";

import { crudprovider } from "../context/Crudcontext";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router";
const Edit = () => {
  const { inputdata, setinputdata, adduser, setnewuser, findid } =
    useContext(crudprovider);
  const getinput = (e) => {
    const { name, value } = e.target;

    setinputdata({ ...inputdata, [name]: value });
  };
  useEffect(() => {
    setinputdata(findid);
  }, []);
  const navigate = useNavigate();
  const inputSubmit = (e) => {
    e.preventDefault();
    let obj = {
      id: Math.floor(Math.random() * 100),
      ...inputdata,
    };
    adduser(findid);
    setinputdata({ name: "", email: "" });
    navigate("/view");
  };
  return (
    <>
      <div align="center">
        <h1>Edit</h1>
        <form onSubmit={(e) => inputSubmit(e)}>
          <table border="1" cellPadding="10">
            <tr>
              <td>name:-</td>
              <td>
                <input
                  type="text"
                  name="name"
                  onChange={(e) => getinput(e)}
                  value={inputdata.name}
                />
              </td>
            </tr>
            <tr>
              <td>email:-</td>
              <td>
                <input
                  type="text"
                  name="email"
                  onChange={(e) => getinput(e)}
                  value={inputdata.email}
                />
              </td>
            </tr>
            <tr>
              <td></td>
              <td align="center">
                <input type="submit" />
              </td>
            </tr>
          </table>
        </form>
      </div>
    </>
  );
};

export default Edit;
