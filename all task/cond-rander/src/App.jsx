import React, { useRef, useState } from "react";
import { countries, state, cities } from "./data";
import "./App.css";

function App() {
  const countryInput = useRef();
  const [filterstate, setfilterstate] = useState([]);
  const stateinput = useRef();
  const [filtercity, setfiltercity] = useState([]);

  const getstate = () => {
    const country = countryInput.current.value;
    const states = state.filter((s) => s.country == country);
    setfilterstate(states);
  };
  const getcity = () => {
    const country = countryInput.current.value;
    const state = stateinput.current.value;
    const city = cities.filter((c) => c.state == state && c.country == country);
    setfiltercity(city);
  };
  return (
    <>
      <h1>wrold</h1>
      <label>country:-</label>
      <select
        ref={countryInput}
        onChange={(e) => {
          e.target.value;
        }}
      >
        <option value="">--select country--</option>
        {countries.map((c) => (
          <option key={c.id} value={c.country}>
            {c.country}
          </option>
        ))}
      </select>
      <button onClick={() => getstate()}>find</button>

      <label>state:-</label>
      <select
        ref={stateinput}
        onChange={(e) => {
          e.target.value;
        }}
      >
        <option value="">--select state--</option>
        {filterstate.map((s) => {
          return (
            <option key={s.id} value={s.state}>
              {s.state}
            </option>
          );
        })}
      </select>
      <button onClick={() => getcity()}>get city</button>
      <table border="1" cellspacing="0" cellpadding="0" width="70%" >
        <thead>
          <tr>
            <th>id</th>
            <th>country</th>
            <th>state</th>
            <th>city</th>
          </tr>
        </thead>
        <tbody>
          {filterstate.map((s, index) => (
            <tr key={index}>
              <td>{++index}</td>
              <td>{s.country}</td>
              <td>{s.state}</td>
              {
                filtercity.map((c,index) => {
                  if (c.state == s.state && c.country == s.country) {
                    return (
                      <>
                        <td key={++index}>{c.city}</td>
                      </>
                    );
                  }
                })
              }
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default App;
