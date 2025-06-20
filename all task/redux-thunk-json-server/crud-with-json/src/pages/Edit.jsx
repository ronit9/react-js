import React, { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { adduser, edituser, updateuser } from "../redux/action/CrudAction";
import { useNavigate, useParams } from "react-router";
import { Link } from "react-router";
const Edit = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.single);

  const navigate = useNavigate();
  const { id } = useParams();
  const [data, setdata] = useState([]);
  useEffect(() => {
    dispatch(edituser(id));
  }, [id]);
  useEffect(() => {
    if (user) {
      setdata({
        name: user.name,
        email: user.email,
        pass: user.pass,
      });
    }
  }, [user]);
  const inpudata = (e) => {
    const { value, name } = e.target;
    setdata({
      ...data,
      [name]: value,
    });
  };
  const submitData = (e) => {
    e.preventDefault();
    dispatch(updateuser({ ...data, id }));
    navigate("/view");
  };
  return (
    <>
      <h1 align="center">edit User</h1>
      <form onSubmit={submitData} align="center">
        <table cellspacing="10px" border={1} align="center">
          <tr>
            <td>name:-</td>
            <td>
              <input
                type="text"
                name="name"
                onChange={(e) => inpudata(e)}
                value={data.name}
              />
            </td>
          </tr>
          <tr>
            <td>email:-</td>
            <td>
              <input
                type="text"
                name="email"
                onChange={(e) => inpudata(e)}
                value={data.email}
              />
            </td>
          </tr>
          <tr>
            <td>pass:-</td>
            <td>
              <input
                type="text"
                name="pass"
                onChange={(e) => inpudata(e)}
                value={data.pass}
              />
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

export default Edit;
