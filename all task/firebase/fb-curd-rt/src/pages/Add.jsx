import React from "react";
import { Link } from "react-router";
import { useState } from "react";
import { getDatabase, ref, set } from "firebase/database";
import { app } from '../firebase,';
const Add = () => {
  const [fromdata, setFromdata] = useState();

  const forminput = (e) => {
    const { name, value } = e.target;
    setFromdata({ ...fromdata, [name]: value });
  };
  const db = getDatabase(app);
  const getdata = (e) => {
    e.preventDefault();
    let obj = {
      id: Math.floor(Math.random() * 100),
      ...fromdata,
    };
    set( ref(db,`user/${obj.id}`), {
      name: fromdata.name,
      email: fromdata.email,
    })
      .then((res) => {
        alert("data added")
  
      }).catch((err) => {
        console.log(err);
        return false
      });
  };
  return (
    <>
      <div align="center">
        <h1>Add</h1>
        <form onSubmit={getdata}>
          <table border="1">
            <tr>
              <td>
                <label>name:-</label>{" "}
              </td>
              <td>
                <input type="text" name="name" onChange={forminput} />
              </td>
            </tr>
            <tr>
              <td>
                <label>email:-</label>
              </td>
              <td>
                <input type="text" name="email" onChange={forminput} />
              </td>
            </tr>
            <tr>
              <td></td>
              <td>
                <button>Submit</button>
                <Link>
                  <button>view</button>
                </Link>
              </td>
            </tr>
          </table>
        </form>
      </div>
    </>
  );
};

export default Add;
