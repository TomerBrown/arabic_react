import { ChakraProvider } from "@chakra-ui/react";
import "./App.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainPage from "./components/Pages/mainPage";
import NotFoundPage from "./components/Pages/NotFoundPage";
function App() {
  const router = createBrowserRouter([
    {
      path: "/arabic_react",
      element: <MainPage />,
      // TODO(Tomerbrown): Add a 404 page that looks better!
      errorElement: <NotFoundPage />,
    },
  ]);
  return (
    <ChakraProvider>
      <RouterProvider router={router} />
    </ChakraProvider>
  );
}

export default App;
