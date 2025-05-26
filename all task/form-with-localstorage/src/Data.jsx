import React from "react";

const Data = ({ formdata, deletedata,editdata }) => {
//   console.log(formdata);

  return (
    <section>
      <table className="table border-4">
        <thead>
          <tr>
            <th>id</th>
            <th>name</th>
            <th>email</th>
            <th>gender</th>
            <th>language</th>
            <th>city</th>
            <th>comments</th>
            <th>action</th>
          </tr>
        </thead>
        <tbody>
          {formdata.map((val, index) => {
            const {id, username, useremail, gender, language, city, comments } =
              val;
            return (
              <tr key={index}>
                <td>{id}</td>
                <td>{username}</td>
                <td>{useremail}</td>

                <td>{gender}</td>
                <td>{language.join(" ,")}</td>
                <td>{city}</td>
                <td>{comments}</td>
                <td>
                  <button onClick={() => deletedata(id)}>Delete</button>
                  <button onClick={() => editdata(id,val)}>edit</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </section>
  );
};

export default Data;
