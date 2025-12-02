import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";
import * as React from "react";

createRoot(getElementById("root") as HTMLElement).render(
  <StrictMode>
    <App />
  </StrictMode>
);

function getElementById(arg0: string): HTMLElement {
  throw new Error("Function not implemented.");
}
