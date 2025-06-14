import React, { use } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router";
import { delete_user, edit_user } from "../redux/action/crud-action";

const view = () => {
  const data = useSelector((state) => state.user_input.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const edituser = (id) => {
    navigate(`/edit/${id}`);
    dispatch(edit_user(id));
  };
  return (
    <div>
      <h1>view</h1>
      <table border={1}>
        <thead>
          <tr>
            <td>id</td>
            <td>name</td>
            <td>email</td>
            <td>pass</td>
            <td>action</td>
          </tr>
        </thead>
        <tbody>
          {data.map((val, index) => {
            const { id, name, email, pass } = val;
            return (
              <tr key={index}>
                <td>{id}</td>
                <td>{name}</td>
                <td>{email}</td>
                <td>{pass}</td>
                <td>
                  <button onClick={() => dispatch(delete_user(id))}>
                    delete
                  </button>
                  <button onClick={() => edituser(id)}>edit</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <Link to="/">
        <button>add</button>
      </Link>
    </div>
  );
};

export default view;
