import { useEffect, useRef, useState } from "react";

function App() {
  const [counrty, setcountry] = useState([]);
  const countryInput = useRef();
  const allcountry = () => {
    fetch("http://localhost:5000/cities", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => {
        setcountry(data);
        console.log(data);
      });
  };

  useEffect(() => {
    allcountry();
  }, []);
  const getcountry = (e) => {
    e.preventDefault();
    console.log(countryInput.current.value);
  };

  return (
    <>
      {/* <label>country:-</label>
      <input type="text" placeholder="country" ref={countryInput} />
      <button onClick={(e) => getcountry(e)}>find</button>

      <table>
        <thead>
          <tr>
            <th>id</th>
          </tr>
        </thead>
        <tbody>
          {counrty.map((c, index) => {
            console.log(cname);

            return (
              <tr key={index}>
                <td>{c.countries.id}</td>
              </tr>
            );
          })}
        </tbody>
      </table> */}
    </>
  );
}

export default App;
