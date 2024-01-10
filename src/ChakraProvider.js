// src/ChakraProvider.js
import { ChakraProvider, CSSReset } from "@chakra-ui/react";
import React from "react";

const ChakraThemeProvider = ({ children }) => (
  <ChakraProvider>
    <CSSReset />
    {children}
  </ChakraProvider>
);

export default ChakraThemeProvider;
