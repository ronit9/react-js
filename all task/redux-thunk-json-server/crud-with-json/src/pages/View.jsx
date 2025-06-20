import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Deleteuser, edituser, Viewuser } from "../redux/action/CrudAction";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router";
const View = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.users);
const navigate = useNavigate();
  useEffect(() => {
    dispatch(Viewuser());
  }, []);

  const editid = (id) => {

    navigate(`/edit/${id}`);
  };

  const deletid = (id) => {
    dispatch(Deleteuser(id));
  };
  return (
    <div align="center">
      <h1 align="center">View</h1>
      <table align="center" border={1}>
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Email</th>
            <th>Password</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody align="center">
          {user.map((val) => {
            const { id, name, email, pass } = val;
            return (
              <tr key={id}>
                <td>{id}</td>
                <td>{name}</td>
                <td>{email}</td>
                <td>{pass}</td>
                <td>
                  <button onClick={() => deletid(id)}>Delete</button>
                  <button onClick={() => editid(id)}>edit</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <br />

      <Link to="/">
        <button>add</button>
      </Link>
    </div>
  );
};

export default View;
