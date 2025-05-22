import { useState } from "react";

const Toto = () => {
  let [mname, setmname] = useState("");
  let [data, setdata] = useState([]);
  localStorage.setItem("data", JSON.stringify(data));

  const add = () => {
    let data = localStorage.getItem("data")
      ? JSON.parse(localStorage.getItem("data"))
      : [];
    data = [...data, mname];
    console.log(data);
    localStorage.setItem("data", JSON.stringify(data));
  };

  return (
    <>
      <h1>todo</h1>
      <label>name</label>
      <input
        type="text"
        value={mname}
        onChange={(n) => setmname(n.target.value)}
      />
      <button onClick={() => add()}>submit</button>
    </>
  );
};
export default Toto;
