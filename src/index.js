// src/index.js
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import ChakraThemeProvider from "./ChakraProvider";
import { LoadingProvider } from './componentes/loading';

ReactDOM.render(
  <ChakraThemeProvider>
    <React.StrictMode>
    <LoadingProvider>
      <App />
    </LoadingProvider>
    </React.StrictMode>
  </ChakraThemeProvider>,
  document.getElementById("root")
);
