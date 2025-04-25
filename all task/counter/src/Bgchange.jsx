import { useState } from "react";

const colour = () => {
  let [bg, setbg] = useState("");
  return (
    <>
      <div className="border col-10 p-5 m-5 " style={{ backgroundColor: bg }}>
        <label htmlFor="bg">enter color</label>
        <input type="text" value={bg} onChange={(c) => setbg(c.target.value)} />
      </div>
      <hr />
    </>
  );
};
export default colour;
