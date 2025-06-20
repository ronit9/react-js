import { BrowserRouter, Routes, Route } from "react-router";
import "./App.css";
import View from "./pages/View";
import Add from "./pages/Add";
import Edit from "./pages/Edit";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Add />} />
          <Route path="/view" element={<View />} />
          <Route path="/edit/:id" element={<Edit />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
