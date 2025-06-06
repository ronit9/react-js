import { BrowserRouter, Route, Routes } from "react-router";
import Form from "./pages/Form";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Form />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
