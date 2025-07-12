import { BrowserRouter, Route, Routes } from "react-router";

import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/header/Header";
import Register from "./components/register/Register";
import Login from "./components/login/Login"; 
import AddCart from "./components/AddCart/AddCart";
import Banner from "./components/banner/Banner";
 
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/header" element={<Header />} />
          <Route path="/banner" element={<Banner />} />
          <Route path="/cart" element={<AddCart />} />
   
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
