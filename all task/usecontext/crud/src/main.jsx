import { createRoot } from "react-dom/client";

import App from "./App.jsx";
import Crudcontext from "./context/Crudcontext.jsx";

createRoot(document.getElementById("root")).render(
  <Crudcontext>
    <App />
  </Crudcontext>
);
