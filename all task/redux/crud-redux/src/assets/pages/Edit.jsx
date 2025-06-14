import React, { useEffect } from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { add_user, edit_user } from "../redux/action/crud-action";
import { useNavigate, useParams } from "react-router";
import { useSelector } from "react-redux";
const Edit = () => {
  const { id } = useParams();
  console.log(id);

  const single = useSelector((state) => state.user_input.single);

  const navigate = useNavigate();
  const [inputdata, setinputdata] = useState({
    name: "",
    email: "",
    pass: "",
  });
  useEffect(() => {
    setinputdata({
      id: single.id,
      name: single.name,
      email: single.email,
      pass: single.pass,
    });
  }, []);

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

  let obj = {
    ...inputdata,
    id: single.id, // assuming you're editing 'single' user
  };

  let allUsers = JSON.parse(localStorage.getItem("alltask")) || [];

  let updatedUsers = allUsers.map((user) => {
    if (user.id === obj.id) {
      return obj; // replace user
    }
    return user; // keep others same
  });

  localStorage.setItem("alltask", JSON.stringify(updatedUsers));

  setinputdata({ name: "", email: "", pass: "" });
  navigate("/view");
};

  return (
    <div>
      <h1>edit</h1>
      <form onSubmit={(e) => submitform(e)}>
        <table>
          <thead>
            <tr>
              <td>name:-</td>
              <td>
                <input
                  type="text"
                  name="name"
                  onChange={(e) => enterdata(e)}
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
                  onChange={(e) => enterdata(e)}
                  value={inputdata.email}
                />
              </td>
            </tr>
            <tr>
              <td>pass:-</td>
              <td>
                <input
                  type="text"
                  name="pass"
                  onChange={(e) => enterdata(e)}
                  value={inputdata.pass}
                />
              </td>
            </tr>
          </thead>
        </table>

        <button>edit</button>
      </form>
    </div>
  );
};

export default Edit;
