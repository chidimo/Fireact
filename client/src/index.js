import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

import { registerServiceWorker } from "./serviceWorker";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

registerServiceWorker();
