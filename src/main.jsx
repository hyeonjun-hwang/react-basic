import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

// ======== 기본 ========
// import { App } from "./App.jsx";
// import "./index.css";

// createRoot(document.getElementById("root")).render(
//   // <StrictMode>
//   <App />
//   // </StrictMode>
// );

// ======== 과제 ========
import { App } from "./days/day27/App.jsx";
import "./index.css";

createRoot(document.getElementById("root")).render(
  // <StrictMode>
  <App />
  // </StrictMode>
);

// ======== 스터디 ========
// import { App } from "./study/todoApp/App.jsx";
// import "./index.css";

// createRoot(document.getElementById("root")).render(
//   // <StrictMode>
//   <App />
//   // </StrictMode>
// );
