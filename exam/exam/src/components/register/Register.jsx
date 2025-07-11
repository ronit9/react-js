import React, { useState } from "react";
import { Col, Container } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Image from "react-bootstrap/Image";
import "./reg.css";
import Signin from "../allbuttons/button/Signin";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { REGISTER_USER } from "../../redux/action/AuthAction";
import { Link, useNavigate } from "react-router";
const Register = () => {
  const [formdata, setformdata] = useState({
    name: "",
    email: "",
    password: "",
    Conpassword: "",
  });
  const navigate = useNavigate();
  const dispach = useDispatch();
  const getData = (e) => {
    const { name, value } = e.target;
    setformdata({
      ...formdata,
      [name]: value,
    });
  };

  const submitData = (e) => {
    e.preventDefault();
    let namepattern = /^[A-Z][a-z]*$/;
    let emailpatten = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}$/;
    let passpattern =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
    if (formdata.password === formdata.Conpassword) {
      if (!namepattern.test(formdata.name)) {
        alert("Name Is Not Valid");
      } else if (formdata.name == null) {
        alert("Please Enter Name");
      } else if (!emailpatten.test(formdata.email)) {
        alert("enter valid email");
      } else if (!passpattern.test(formdata.password)) {
        alert("enter valid pass");
      } else {
        alert("all done");
        let obj = {
          id: Math.floor(Math.random() * 1000),
          ...formdata,
        };
      
        dispach(REGISTER_USER(obj));
        navigate("/login");
      }
    } else {
      alert("password dosn't match");
      setformdata({
        name: "",
        email: "",
        password: "",
        Conpassword: "",
      });
    }
  };
  // const loginuser = useSelector((state) => state?.alldata?.Login);
  // console.log(loginuser);

  // useEffect(() => {
  //   if (loginuser) {
  //     navigate("/header");
  //   }
  // }, [loginuser]);
  return (
    <section className="reg p-5">
      <Container
        className="d-flex  align-items-center"
        style={{ height: "100%" }}
      >
        <Col lg={4}>
          <h1 className="mb-3" style={{ color: "#4F4C8F" }}>
            Welcome to Shopeas
          </h1>
          <Form onSubmit={submitData}>
            <FloatingLabel label="Name" className="mb-3">
              <Form.Control
                type="text"
                placeholder="Name"
                name="name"
                onChange={getData}
                value={formdata.name}
              />
            </FloatingLabel>
            <FloatingLabel label="Email address" className="mb-3">
              <Form.Control
                type="email"
                placeholder="name@example.com"
                name="email"
                onChange={getData}
                value={formdata.email}
              />
            </FloatingLabel>
            <FloatingLabel label="Password">
              <Form.Control
                type="text"
                placeholder="Password"
                className="mb-3"
                name="password"
                onChange={getData}
                value={formdata.password}
              />
            </FloatingLabel>
            <FloatingLabel label="ConPassword">
              <Form.Control
                type="text"
                placeholder="Confirm Password"
                className="mb-3"
                name="Conpassword"
                onChange={getData}
                value={formdata.Conpassword}
              />
            </FloatingLabel>
            <p className="  fs-6 ">
              Already have an account?{" "}
              <Link to="/login">
                <span className="fw-semibold" style={{ color: "#F99E12" }}>
                  Login Here
                </span>
              </Link>
            </p>

            <Signin className="my-3" />
          </Form>
        </Col>
      </Container>
    </section>
  );
};

export default Register;
