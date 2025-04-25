import { useRef } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
function App() {
  const name = useRef();
  const age = useRef();
  const submit = (e) => {
    e.preventDefault();
    if (name.current.value == "" || age.current.value == "") {
      alert("please enter name and age");
    }
    console.log(name.current.value);
    console.log(age.current.value);
  };

  return (
    <>
      <h1>form</h1>

      <form className="d-flex flex-column w-25" onSubmit={submit}>
        <div>
          {" "}
          <label>name:-</label>
          <input type="text" ref={name} />
        </div>

        <div>
          <label>age:-</label>
          <input type="age" ref={age} />
        </div>

        <div>
          <label>gender</label>
          <select name="gender">
            <option value="">--select gender--</option>
            <option value="male">male</option>
            <option value="female">female</option>
          </select>
        </div>

        <button>submit</button>
      </form>
    </>
  );
}

export default App;
