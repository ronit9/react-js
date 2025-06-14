import { BrowserRouter, Route, Routes } from "react-router";
import Add from "./assets/pages/add";
import View from "./assets/pages/view";
import Edit from "./assets/pages/Edit";

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
