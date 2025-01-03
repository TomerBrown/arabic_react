import { ChakraProvider } from "@chakra-ui/react";
import "./App.css";

import { RouterProvider } from "react-router-dom";
import { useState } from "react";
import CreatePageRouter from "./router/pageRouter";

function App() {
  const [arabicText, setArabicText] = useState<string>("");
  const [youtubeUrl, setYoutubeUrl] = useState<string>("");

  const pageRouter = CreatePageRouter(
    arabicText,
    setArabicText,
    youtubeUrl,
    setYoutubeUrl
  );
  return (
    <ChakraProvider>
      <RouterProvider router={pageRouter} />
    </ChakraProvider>
  );
}

export default App;
