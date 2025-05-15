import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import Form from "./Form";
function App() {
  const [formdata, setformdata] = useState({
    // name: "",
    // email: "",
    // password: "",
    // gender: "",

     course: [],
  });
  const formchange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type == "checkbox") {
      if (checked) {
        setformdata({ ...formdata, course: [...formdata.course, value] });
      } else {
        setformdata({
          ...formdata,
          course: [formdata.course].filter((c) => c !== value),
        });
      }
    } else {
      setformdata({ ...formdata, [name]: value });
    }
  };
  const submitdata = (e) => {
    e.preventDefault();
    console.log(formdata);
    setformdata({
      name: "",
      email: "",
      password: "",
      gender: "",
      course: [],
    });
  };
  // const submitdata = (e) => {
  //   const { name, value, type, checked } = e.target;
  //   if (type == "checkbox") {
  //     if (checked) {
  //       setformdata({ ...formdata, course: [...formdata.course, value] });
  //     } else {
  //       setformdata({
  //         ...formdata,
  //         course: [...formdata.course].filter((el) => el != value),
  //       });
  //     }
  //   } else {
  //     setformdata({ ...formdata, [name]: value });
  //   }
  // };

  // const validate = () => {
  //   let checked=true
  //   const { name, email, password, gender, course } = formdata;
  //   if (name === "") {
  //     alert("name is required");
  //     checked=false
  //   }
  //   if (email === "") {
  //     alert("email is required");
  //     checked=false
  //   }
  //   if (password === "") {
  //     alert("password is required");
  //     checked=false
  //   }
  //   if (gender === "") {
  //     alert("gender is required");
  //     checked=false
  //   }
  //   if (course.length === 0) {
  //     alert("course is required");
  //     checked=false
  //   }

  //   return checked
  // };
  // const sobmitdone = (e) => {
  //   e.dataentDefault();
  //   console.log(formdata);
  //   setformdata({
  //     name: "",
  //     email: "",
  //     password: "",
  //     gender: "",
  //     course: [],
  //   });
  // };
  return (
    <>
      <Form
        formchange={formchange}
        submitdata={submitdata}
        formdata={formdata}
      />
      {/* <div className="container">
        <div className="row">
          <h1>from</h1>
          <form onSubmit={sobmitdone}>
            <label>name:-</label>
            <input
              type="text"
              name="name"
              value={formdata.name}
              onChange={submitdata}
              placeholder="name"
            />
            {
             formdata.name==="" && <span style={{color:"red"}}>name is required</span>
            }
            <label>email:-</label>
            <input
              type="email"
              name="email"
              value={formdata.email}
              onChange={submitdata}
              placeholder="email"
            />
            <label>password:-</label>
            <input
              type="password"
              name="password"
              value={formdata.password}
              onChange={submitdata}
              placeholder="password"
              pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
            />
            <label>gender:-</label>
            <input
              type="radio"
              name="gender"
              value="male"
              onChange={submitdata}
              checked={formdata.gender === "male"}
            />
            male
            <input
              type="radio"
              name="gender"
              value="female"
              onChange={submitdata}
              checked={formdata.gender === "female"}
            />
            female
            <label>course:-</label>
            <input
              type="checkbox"
              name="course"
              value="c"
              onChange={submitdata}
              checked={formdata.course.includes("c")}
            />
            c
            <input
              type="checkbox"
              name="course"
              value="c++"
              onChange={submitdata}
              checked={formdata.course.includes("c++")}
            />
            c++
            <input
              type="checkbox"
              name="course"
              value="java"
              onChange={submitdata}
              checked={formdata.course.includes("java")}
            />
            java
            <button>submit</button>
          </form>
        </div>
      </div> */}
    </>
  );
}

export default App;
