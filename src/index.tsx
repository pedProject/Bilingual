import { ThemeProvider } from "@emotion/react";
import React from "react";

import { ThemeProvider } from "@mui/material";
import ReactDOM from "react-dom/client";

import "./index.css";
import { App } from "./App";
import { theme } from "./assets/theme/theme";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
