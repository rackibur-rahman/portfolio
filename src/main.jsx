import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import AOS from "aos";
import "aos/dist/aos.css";

import { BrowserRouter } from "react-router-dom";

import "./index.css";
import App from "./App.jsx";

AOS.init({
  duration: 450,
  easing: "ease-out-cubic",
  once: true,
  offset: 40,
  delay: 0,
  mirror: false,
});

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);