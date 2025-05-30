<<<<<<< HEAD
import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { FaHome } from "react-icons/fa";
import { PiNotepadDuotone } from "react-icons/pi";
import { MdOutlinePriceChange } from "react-icons/md";
import { FaClipboardList } from "react-icons/fa";
import { MdAccountBox } from "react-icons/md";
import Image from "react-bootstrap/Image";
import { Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import Banner from "./Banner";
const home = () => {
  let location=useLocation()
console.log(location);

  return (
    <>
      <header>
        <Navbar data-bs-theme="dark">
          <Container className="d-flex align-items-center">
            <Col lg={2}>
              <Navbar.Brand>
                <Image src="../public/logo.png" rounded />
              </Navbar.Brand>
            </Col>
            <Col lg={9}>
              <Nav className="d-flex justify-content-between Lobster">
                <Link
                  to="/"
                  className="d-flex align-items-center    nav-link"
                >
                  <FaHome className="me-1 fs-5" />
                  home
                </Link>
                <Link to="/add" className="d-flex align-items-center nav-link">
                  <PiNotepadDuotone className="me-1 fs-5" />
                  add recipe
                </Link>
                <Link to="/show" className="d-flex align-items-center nav-link">
                  <FaClipboardList className="me-1 fs-5" /> all recipes
                </Link>
                <Link to="/pricing" className="d-flex align-items-center nav-link">
                  <MdOutlinePriceChange className="me-1 fs-5" /> Pricing
                </Link>
                <Link to="/login" className="d-flex align-items-center nav-link">
                  <MdAccountBox className="me-1 fs-5" /> login
                </Link>
              </Nav>
            </Col>
          </Container>
        </Navbar>
      </header>
      {/* <Banner /> */}
    </>
  );
};

export default home;
=======
import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { FaHome } from "react-icons/fa";
import { PiNotepadDuotone } from "react-icons/pi";
import { MdOutlinePriceChange } from "react-icons/md";
import { FaClipboardList } from "react-icons/fa";
import { MdAccountBox } from "react-icons/md";
import Image from "react-bootstrap/Image";
import { Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import Banner from "./Banner";
const home = () => {
  let location=useLocation()
console.log(location);

  return (
    <>
      <header>
        <Navbar data-bs-theme="dark">
          <Container className="d-flex align-items-center">
            <Col lg={2}>
              <Navbar.Brand>
                <Image src="../public/logo.png" rounded />
              </Navbar.Brand>
            </Col>
            <Col lg={9}>
              <Nav className="d-flex justify-content-between Lobster">
                <Link
                  to="/"
                  className="d-flex align-items-center    nav-link"
                >
                  <FaHome className="me-1 fs-5" />
                  home
                </Link>
                <Link to="/add" className="d-flex align-items-center nav-link">
                  <PiNotepadDuotone className="me-1 fs-5" />
                  add recipe
                </Link>
                <Link to="/show" className="d-flex align-items-center nav-link">
                  <FaClipboardList className="me-1 fs-5" /> all recipes
                </Link>
                <Link to="/pricing" className="d-flex align-items-center nav-link">
                  <MdOutlinePriceChange className="me-1 fs-5" /> Pricing
                </Link>
                <Link to="/login" className="d-flex align-items-center nav-link">
                  <MdAccountBox className="me-1 fs-5" /> login
                </Link>
              </Nav>
            </Col>
          </Container>
        </Navbar>
      </header>
      {/* <Banner /> */}
    </>
  );
};

export default home;
>>>>>>> 7671f32 (pr-6)
