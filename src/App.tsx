import React from "react";
import { ChakraProvider } from '@chakra-ui/react';
import { TopMenu } from "./components/TopMenu/TopMenu";

import './styles/style.css'

function App() {
  return (
    <ChakraProvider>
      <TopMenu />
    </ChakraProvider>
  );
}

export default App;
