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
  const loginuser = useSelector((state) => state?.alldata?.Login);

  const username = loginuser?.map((item) => item.name);

  useEffect(() => {
    if (!loginuser) {
      navigate("/login");
    }
  }, [loginuser]);

  return (
    <>
      <section>
        <Navbar className="nav ">
          <Container
            fluid
            className="d-flex justify-content-between align-items-center px-5"
          >
            <Col lg={1}>
              <Navbar.Brand className="d-flex justify-content-center m-0 p-0">
                <Image
                  className="img "
                  src="../../public/img/vecteezy_film-roll-transparent_13532369.png"
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
                    <Nav.Item className="nav-link"> watchlist</Nav.Item>
                  </Link>
                  <NavDropdown
                    title={<Image src="https://i.pravatar.cc/300" />}
                    id="basic-nav-dropdown"
                    className="drop"
                  >
                    <NavDropdown.Item>Hay {username}</NavDropdown.Item>
                    <NavDropdown.Item
                      onClick={() => dispatch(USER_LOGOUT(username))}
                    >
                      {username ? "logout" : "login"}
                    </NavDropdown.Item>
                  </NavDropdown>
                </Nav>
              </Navbar.Collapse>
            </Col>
          </Container>
        </Navbar>
      </section>
      {location.pathname === "/header" && (
        <>
          <Banner />
        </>
      )}
    </>
  );
};

export default Header;
