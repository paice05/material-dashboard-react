import { BrowserRouter } from "react-router-dom";
import ReactDOM from "react-dom/client";
import App from "./app";

import "regenerator-runtime";

// Material Dashboard 2 React Context Provider
import { MaterialUIControllerProvider } from "./context";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <MaterialUIControllerProvider>
      <App />
    </MaterialUIControllerProvider>
  </BrowserRouter>
);
