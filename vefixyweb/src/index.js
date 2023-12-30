// src/index.js
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import ChakraThemeProvider from "./ChakraProvider";

ReactDOM.render(
  <ChakraThemeProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ChakraThemeProvider>,
  document.getElementById("root")
);
