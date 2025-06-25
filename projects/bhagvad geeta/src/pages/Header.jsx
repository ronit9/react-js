import React, { use, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import GeetaBanner from "./GeetaBanner";
import Form from "react-bootstrap/Form";
import { Link, useLocation, useNavigate } from "react-router";
import { Col } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { actiongeeta, getverse, selectlang } from "../redux/action/geetaaction";
import { useSelector } from "react-redux";
import { FaCaretDown } from "react-icons/fa";
const Header = () => {
  const dispach = useDispatch();
  const navigate = useNavigate();
  const verse = useSelector((state) => state.getgeeta.verse);
  const lang = useSelector((state) => state.getgeeta.lang);
  const firsthalf = verse?.slice(0, 9);
  const secondhalf = verse?.slice(9);
  const location = useLocation();

  useEffect(() => {
    dispach(actiongeeta());
  }, []);
  const handleSelect = (language) => {
    dispach(selectlang(language));
  };
  window.addEventListener("scroll", () => {
    const navbar = document.querySelector(".navbar");
    const scrolled = window.scrollY > 50; 
    navbar.classList.toggle("scrolled", scrolled);
  });
 const gotochapter = (id) => {
    navigate(`/Chapter/${id}`);
  };
  return (
    <>
      <Navbar collapseOnSelect expand="lg" className=" py-0">
        <Container>
          <Col
            sm={12}
            md={12}
            lg={2}
            className="d-flex align-items-center flex-sm-column "
          >
            <Navbar.Brand as={Link} to="/">
              <img src="../public/logo.png" alt="" width={100} height={100} />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          </Col>
          <Col
            sm={12}
            md={9}
            className="d-flex align-items-center justify-content-center"
          >
            <Navbar.Collapse
              id="responsive-navbar-nav"
              className="collapse-end "
            >
              <Nav className=" align-items-center flex-column flex-md-row justify-content-md-between gap-3 w-100">
                <Nav.Item className="position-relative first">
                  {lang === "hindi" ? (
                    <span>अध्याय</span>
                  ) : (
                    <span>Chapter</span>
                  )}
                  <FaCaretDown />
                  <ul className="position-absolute first-drop d-flex ">
                    <div className="me-4">
                      {lang === "hindi"
                        ? firsthalf?.map((val) => {
                            const { id } = val;
                            return (
                              <div key={id}>
                                <li className="d-flex m-1">
                                  <span onClick={() => gotochapter(id)}>
                                    अध्याय:-{id}
                                  </span>
                                </li>
                              </div>
                            );
                          })
                        : firsthalf?.map((val) => {
                            const { id } = val;
                            return (
                              <div key={id}>
                                <li className="d-flex m-1">
                                  <span onClick={() => gotochapter(id)}>
                                    Chapter:-{id}
                                  </span>
                                </li>
                              </div>
                            );
                          })}
                    </div>
                    <div>
                      {lang === "hindi"
                        ? secondhalf?.map((val) => {
                            const { id } = val;
                            return (
                              <div key={id}>
                                <li className="d-flex m-1">
                                  <span onClick={() => gotochapter(id)}>
                                    अध्याय:-{id}
                                  </span>
                                </li>
                              </div>
                            );
                          })
                        : secondhalf?.map((val) => {
                            const { id } = val;
                            return (
                              <div key={id}>
                                <li className="d-flex m-1">
                                  <span onClick={() => gotochapter(id)}>
                                    Chapter:-{id}
                                  </span>
                                </li>
                              </div>
                            );
                          })}
                    </div>
                  </ul>
                </Nav.Item>

                <Nav.Item as={Link} to="/quotes">
                  {lang === "hindi" ? <span>उद्धरण</span> : <span>Quotes</span>}
                </Nav.Item>
                <Nav.Item as={Link} to="/about">
                  {lang === "hindi" ? <span>माहिती</span> : <span>About</span>}
                </Nav.Item>
                <Nav.Item as={Link} to="/ai">
                  {lang === "hindi" ? <span>आईआई</span> : <span>AI</span>}
                </Nav.Item>
                <Form className="d-flex">
                  <Form.Control
                    type="search"
                    placeholder={lang === "hindi" ? "खोज..." : "Search..."}
                    aria-label="Search"
                  />
                </Form>
                <Nav.Item className="position-relative second">
                  {lang === "hindi" ? <span>भाषा</span> : <span>Language</span>}{" "}
                  <FaCaretDown />
                  <ul className="position-absolute second-drop ">
                    <li
                      className="d-flex mb-2"
                      onClick={() => handleSelect("hindi")}
                    >
                      <img src="../public/hi.svg" alt="" width={30} />
                      <span className="ms-2 fs-6">Hindi</span>
                    </li>
                    <li
                      className="d-flex"
                      onClick={() => handleSelect("english")}
                    >
                      <img src="../public/en.svg" alt="" width={30} />
                      <span className="ms-2 fs-6">English</span>
                    </li>
                  </ul>
                </Nav.Item>
              </Nav>
            </Navbar.Collapse>
          </Col>
        </Container>
      </Navbar>

      {location.pathname === "/" && <GeetaBanner />}
    </>
  );
};

export default Header;
