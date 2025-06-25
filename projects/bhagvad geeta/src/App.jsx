import { BrowserRouter, Route, Routes } from "react-router";
import "./App.css";
import Header from "./pages/Header";

import "bootstrap/dist/css/bootstrap.min.css";
import GeetaBanner from "./pages/GeetaBanner";
import ReadGeeta from "./pages/ReadGeeta";
import RandomRead from "./pages/RandomRead";
import Selectedchapter from "./pages/Selectedchapter";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Header />} />
          <Route path="/GeetaBanner" element={<GeetaBanner />} />
          <Route path="/read" element={<ReadGeeta />} />
          <Route path="/RandomRead" element={<RandomRead />} />
          <Route path="/chapter/:id" element={<Selectedchapter /> } />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
