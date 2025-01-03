import { createBrowserRouter} from "react-router-dom";
import MainPage from "./Pages/MainPage";
import NotFoundPage from "./Pages/NotFoundPage";


const pageRouter = createBrowserRouter([
    {
      path: "/arabic_react",
      element: <MainPage />,
      errorElement: <NotFoundPage />,
    },
  ]);

export default pageRouter;