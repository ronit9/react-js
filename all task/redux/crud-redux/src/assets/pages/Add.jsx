import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { add_user } from "../redux/action/crud-action";
import { useNavigate } from "react-router";

const add = () => {
  const navigate = useNavigate();
  const [inputdata, setinputdata] = useState({
    name: "",
    email: "",
    pass: "",
  });

  const enterdata = (e) => {
    const { name, value } = e.target;

    setinputdata({
      ...inputdata,
      [name]: value,
    });
  };
  const dispatch = useDispatch();
  const submitform = (e) => {
    e.preventDefault();
    const obj = {
      id: Math.floor(Math.random() * 1000),
      ...inputdata,
    };

    dispatch(add_user(obj));
    setinputdata({ name: "", email: "", pass: "" });
    navigate("/view");
  };
  return (
    <div>
      <h1>add</h1>
      <form onSubmit={(e) => submitform(e)}>
        <table>
          <thead>
            <tr>
              <td>name:-</td>
              <td>
                <input type="text" name="name" onChange={(e) => enterdata(e)} />
              </td>
            </tr>
            <tr>
              <td>email:-</td>
              <td>
                <input
                  type="text"
                  name="email"
                  onChange={(e) => enterdata(e)}
                />
              </td>
            </tr>
            <tr>
              <td>pass:-</td>
              <td>
                <input type="text" name="pass" onChange={(e) => enterdata(e)} />
              </td>
            </tr>
          </thead>
        </table>

        <button>submit</button>
      </form>
    </div>
  );
};

export default add;
