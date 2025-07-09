import React, { use, useEffect } from "react";
import "./header.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Image from "react-bootstrap/Image";
import { Col } from "react-bootstrap";
import { Link, useLocation, useNavigate } from "react-router";
import Banner from "../banner/Banner";
import { useDispatch, useSelector } from "react-redux";
import { USER_LOGOUT } from "../../redux/action/AuthAction";
const Header = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const username = useSelector((state) =>
    state?.alldata?.Login?.map((item) => item.name)
  );
  console.log(username);

  const logout = (username) => {
    dispatch(USER_LOGOUT(username));
  };

  useEffect(() => {
    if (username==="") {
      navigate("/login");
    }
  }, [username]);
  return (
    <>
      <section>
        <Navbar className="nav ">
          <Container className="d-flex  justify-content-between align-items-center">
            <Col lg={1}>
              <Navbar.Brand className="d-flex justify-content-center m-0 p-0">
                <Image
                  className="img "
                  src="../../public/img/file_000000004cf861fdadd881970e0079ee.png"
                  rounded
                />
              </Navbar.Brand>
            </Col>

            <Col lg={6}>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse
                id="basic-navbar-nav"
                className="d-flex justify-content-end"
              >
                <Nav className="d-flex align-items-center gap-5 ">
                  <Link to="/header">
                    <Nav className="nav-link"> Home</Nav>
                  </Link>
                  <Nav.Link>Products</Nav.Link>
                  <Nav.Link>shop</Nav.Link>
                  <Nav.Link>contact</Nav.Link>
                  <Link to="/cart">
                    <Nav.Item className="nav-link"> cart</Nav.Item>
                  </Link>
                  <NavDropdown
                    title={<Image src="https://i.pravatar.cc/300" />}
                    id="basic-nav-dropdown"
                    className="drop"
                  >
                    <NavDropdown.Item>Hay {username}</NavDropdown.Item>
                    <NavDropdown.Item onClick={() => logout(username)}>
                      {username ? "logout" : "login"}
                    </NavDropdown.Item>
                  </NavDropdown>
                </Nav>
              </Navbar.Collapse>
            </Col>
          </Container>
        </Navbar>
      </section>
      {location.pathname === "/header" && <Banner />}
    </>
  );
};

export default Header;
