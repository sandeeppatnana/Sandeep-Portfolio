import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";

const savedTheme = window.localStorage.getItem("portfolio-theme");
document.documentElement.dataset.theme =
  savedTheme === "light" || savedTheme === "dark" || savedTheme === "system" ? savedTheme : "light";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
