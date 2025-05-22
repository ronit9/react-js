import React from "react";

const Form = ({ formchange, submitdata, formdata }) => {
  return (
    <>
      <div className="container">
        <div className="col-7 bg-secondary d-flex flex-column align-items-center">
          <h1>Form</h1>
          <form onSubmit={submitdata}   className="d-flex flex-column">
            <div className=" mb-3 d-flex justify-content-between">
              <label>name:-</label>
              <input
                type="text"
                name="name"
                onChange={formchange}
                value={formdata.name}
                placeholder="enter your name"
              />
            </div>
            <div className=" mb-3 d-flex justify-content-between">
              <label>email:-</label>
              <input
                type="email"
                name="email"
                onChange={formchange}
                value={formdata.email}
                placeholder="enter your email"
              />
            </div>
            <div className=" mb-3 d-flex justify-content-between">
              <label>password:-</label>
              <input
                type="password"
                name="password"
                onChange={formchange}
                value={formdata.password}
                placeholder="enter your password"
              />
            </div>
            <div className=" mb-3 d-flex justify-content-between">
              <label>gender:-</label>
              <div className="d-flex align-items-center ">
                <input
                  className="form-check-input btn-lg mx-1"
                  type="radio"
                  name="gender"
                  onChange={formchange}
                  value="male"
                  checked={formdata.gender === "male"}
                />
                male
              </div>
              <div>
                <input
                  className="form-check-input btn-lg mx-1"
                  type="radio"
                  name="gender"
                  onChange={formchange}
                  value="female"
                  checked={formdata.gender === "female"}
                />
                female
              </div>
            </div>
            <div className="d-flex align-items-center">
              <label>course:-</label>
              <input
                className="form-check-input btn-lg mx-1"
                type="checkbox"
                name="course"
                onChange={formchange}
                value="react"
                checked={formdata.course.includes("react")}
              />
              react
              <input
                className="form-check-input btn-lg mx-1"
                type="checkbox"
                name="course"
                onChange={formchange}
                value="angular"
                checked={formdata.course.includes("angular")}
              />
              angular
              <input
                className="form-check-input btn-lg mx-1"
                type="checkbox"
                name="course"
                onChange={formchange}
                checked={formdata.course.includes("html")}
                value="html"
              />
              html
              <input
                className="form-check-input btn-lg mx-1"
                type="checkbox"
                name="course"
                onChange={formchange}
                checked={formdata.course.includes("Css")}
                value="Css"
              />
              Css
              <input
                className="form-check-input btn-lg mx-1"
                type="checkbox"
                name="course"
                onChange={formchange}
                checked={formdata.course.includes("Bootstrap")}
                value="Bootstrap"
              />
              Bootstrap
            </div>

            <button className="mx-auto px-5 py-2">submit</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Form;
