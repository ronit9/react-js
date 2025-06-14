import { createRoot } from "react-dom/client";

import App from "./App.jsx";
import Counterprovider from "./context/Counterprovider.jsx";

createRoot(document.getElementById("root")).render(
  <Counterprovider>
    <App />
  </Counterprovider>
);
