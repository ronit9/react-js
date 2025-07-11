import { useState } from "react";

import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router";
import Register from "./components/register/Register";
import "bootstrap/dist/css/bootstrap.min.css";
import Login from "./components/login/Login";
import Header from "./components/header/Header";
import Banner from "./components/banner/Banner";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path ="/header" element={<Header />} />
          <Route path="/banner" element={<Banner />} />

        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
