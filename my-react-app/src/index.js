import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./variables.css"; // Primero importamos variables
import "./assets/fonts/fonts.css"; // Luego las fuentes
import "./index.css"; // Finalmente los estilos generales
import { App } from "./App";

createRoot(document.getElementById("app")).render(
  <StrictMode>
    <App />
  </StrictMode>,
);