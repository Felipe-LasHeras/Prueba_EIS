import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { App } from "./App";
import "./assets/fonts/fonts.css";
import "./variables.css"

createRoot(document.getElementById("app")).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
