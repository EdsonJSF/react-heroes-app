import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import "./main.css";
import { HeoresApp } from "./HeoresApp";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <HeoresApp></HeoresApp>
    </BrowserRouter>
  </React.StrictMode>
);
