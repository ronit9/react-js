import React from "react";
import { useContext } from "react";
import { Crudprovider } from "../context/Crudcontext";
import { useNavigate } from "react-router";
const view = () => {
  const { alldata, deletedata, editdata } = useContext(Crudprovider);
  const navigate = useNavigate();
const editid=(id)=>{
  navigate(`/edit/${id}`);
  editdata(id);
}
  return (
    <>
      <table border={1}>
        <thead>
          <tr>
            <th>id</th>
            <th>Name</th>
            <th>gender</th>
            <th>Email</th>
            <th>city</th>
            <th>hobies</th>
            <th>action</th>
          </tr>
        </thead>
        <tbody>
          {alldata.map((val, index) => {
            const { id, name, email, gender, city, hobies } = val;
            return (
              <tr>
                <td>{id}</td>
                <td>{name}</td>
                <td>{gender}</td>
                <td>{email}</td>
                <td>{city}</td>
                <td>{hobies.join(",")}</td>
                <td>
                  <button onClick={() => deletedata(id)}>Delete</button>
                  <button onClick={() => editid(id)}>Edit</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default view;