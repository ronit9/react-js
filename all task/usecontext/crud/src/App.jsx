import { BrowserRouter, Route, Routes } from "react-router";
import "./App.css";
import Crud from "./pages/Crud";
import View from "./pages/view";
import Edit from "./pages/Edit";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Crud />} />
          <Route path="/view" element={<View />} />
          <Route path="/edit/:id" element={<Edit />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
