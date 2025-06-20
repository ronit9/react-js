import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { adduser } from "../redux/action/CrudAction";
import { useNavigate } from "react-router";
import { Link } from "react-router";
const Add = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state);
  const navigate = useNavigate();
  const [data, setdata] = useState([]);
  const inpudata = (e) => {
    const { value, name } = e.target;
    setdata({
      ...data,
      [name]: value,
    });
  };
  const submitData = (e) => {
    e.preventDefault();
    dispatch(adduser(data));
    navigate("/view");
  };
  return (
    <>
      <h1 align="center">Add User</h1>
      <form onSubmit={submitData} align="center">
        <table cellspacing="10px" border={1} align="center">
          <tr>
            <td>name:-</td>
            <td>
              <input type="text" name="name" onChange={(e) => inpudata(e)} />
            </td>
          </tr>
          <tr>
            <td>email:-</td>
            <td>
              <input type="text" name="email" onChange={(e) => inpudata(e)} />
            </td>
          </tr>
          <tr>
            <td>pass:-</td>
            <td>
              <input type="text" name="pass" onChange={(e) => inpudata(e)} />
            </td>
          </tr>
          <tr>
            <td></td>
            <td>
              <input type="submit" />
              &nbsp;&nbsp;
              <Link to="/view">
                <button>View</button>
              </Link>
            </td>
          </tr>
        </table>
      </form>
    </>
  );
};

export default Add;
