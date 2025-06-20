import React, { useContext } from "react";
import { Crudprovider } from "../context/Crudcontext";
import { useNavigate } from "react-router";
const Crud = () => {
  const { data, setData, adduser } = useContext(Crudprovider);
  const navigate = useNavigate();
  const getdata = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === "checkbox") {
      if (checked) {
        setData({
          ...data,
          hobies: [...data.hobies, value],
        });
      } else {
        setData({
          ...data,
          hobies: data.hobies.filter((item) => item !== value),
        });
      }
    } else {
      setData({
        ...data,
        [name]: value,
      });
    }
  };
  const formsubmit = (e) => {
    e.preventDefault();
    let obj = {
      id: Math.floor(Math.random() * 100),
      ...data,
    };

    adduser(obj);
    navigate("/view");

  };
  return (
    <>
      <div align="center">
        <h1>Add Form</h1>
        <form onSubmit={(e) => formsubmit(e)}>
          <table border="1">
            <tr>
              <td>name:-</td>
              <td>
                <input
                  type="text"
                  name="name"
                  value={data.name}
                  onChange={(e) => getdata(e)}
                />
              </td>
            </tr>
            <tr>
              <td>email:-</td>
              <td>
                <input
                  type="text"
                  name="email"
                  value={data.email}
                  onChange={(e) => getdata(e)}
                />
              </td>
            </tr>
            <tr>
              <td>gender:-</td>
              <td>
                <input
                  type="radio"
                  name="gender"
                  value="male"
                  onChange={(e) => getdata(e)}
                  checked={data.gender === "male"}
                />
                male
                <input
                  type="radio"
                  name="gender"
                  value="female"
                  onChange={(e) => getdata(e)}
                  checked={data.gender === "female"}
                />
                female
              </td>
            </tr>
            <tr>
              <td>city:-</td>
              <td>
                <select
                  name="city"
                  value={data.city}
                  onChange={(e) => getdata(e)}
                >
                  <option value="delhi">delhi</option>
                  <option value="mumbai">mumbai</option>
                  <option value="banglore">banglore</option>
                </select>
              </td>
            </tr>
            <tr>
              <td>hobies:-</td>
              <td>
                <input
                  type="checkbox"
                  name="hobies"
                  value="play"
                  onChange={(e) => getdata(e)}
                  checked={data.hobies.includes("play")}
                />
                play
                <input
                  type="checkbox"
                  name="hobies"
                  value="read"
                  onChange={(e) => getdata(e)}
                  checked={data.hobies.includes("read")}
                />
                read
                <input
                  type="checkbox"
                  name="hobies"
                  value="write"
                  onChange={(e) => getdata(e)}
                  checked={data.hobies.includes("write")}
                />
                write
                <input
                  type="checkbox"
                  name="hobies"
                  value="sing"
                  onChange={(e) => getdata(e)}
                  checked={data.hobies.includes("sing")}
                />
                sing
              </td>
            </tr>
            <tr>
              <td></td>
              <td>
                <button>submit</button>
              </td>
            </tr>
          </table>
        </form>
      </div>
    </>
  );
};

export default Crud;
