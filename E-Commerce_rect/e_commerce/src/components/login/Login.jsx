import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router";
import { Col, Container } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import { useDispatch, useSelector } from "react-redux";
import Signin from "../allbuttons/button/Signin";
import LoginButton from "../allbuttons/button/LoginButton";
import { LOGIN_USER } from "../../redux/action/AuthAction";
const Login = () => {
  const [formdata, setformdata] = useState({
    email: "",
    password: "",
  });
  const loginuser = useSelector((state) => state?.alldata?.Login);
  console.log(loginuser);

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

    let emailpatten = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}$/;
    let passpattern =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;

    if (!emailpatten.test(formdata.email)) {
      alert("enter valid email");
    } else if (!passpattern.test(formdata.password)) {
      alert("enter valid pass");
    } else {
      dispach(LOGIN_USER(formdata));
    }
  }; 

  useEffect(() => {
     
 
    navigate("/header");
    
   
  }, [ loginuser]);
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
                type="password"
                placeholder="Password"
                className="mb-3"
                name="password"
                onChange={getData}
                value={formdata.password}
              />
            </FloatingLabel>
            <p className="  fs-6">
              Don't have an account?{" "}
              <Link to="/">
                <span className="fw-semibold" style={{ color: "#F99E12" }}>
                  Register Here
                </span>
              </Link>
            </p>

            <LoginButton />
          </Form>
        </Col>
      </Container>
    </section>
  );
};

export default Login;
