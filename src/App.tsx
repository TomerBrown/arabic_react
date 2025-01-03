import { ChakraProvider } from "@chakra-ui/react";
import "./App.css";

import { RouterProvider } from "react-router-dom";
import pageRouter from "./router/pageRouter";

function App() {
  return (
    <ChakraProvider>
      <RouterProvider router={pageRouter} />
    </ChakraProvider>
  );
}

export default App;
