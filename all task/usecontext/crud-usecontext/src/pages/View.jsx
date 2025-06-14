import React from "react";
import { useContext } from "react";
import { crudprovider } from "../context/Crudcontext";
import { Link, useNavigate } from "react-router";
const View = () => {
  const { newuser, deleuser, edituser } = useContext(crudprovider);

  const navigate = useNavigate();
  const edituserid = (id) => {
    navigate(`/edit/:${id}`);
    edituser(id);
  };
  return (
    <>
      <table border="1">
        <thead>
          <tr>
            <th>id</th>
            <th>name</th>
            <th>email</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {newuser.map((val, index) => {
            const { id, name, email } = val;
            return (
              <tr key={index}>
                <td>{id}</td>
                <td>{name}</td>
                <td>{email}</td>
                <td>
                  <button onClick={() => deleuser(id)}>Delete</button>
                  <button onClick={() =>edituserid(id)}>edit</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <Link to="/">
        <button> add</button>
      </Link>
    </>
  );
};

export default View;
