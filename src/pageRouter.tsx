import { createBrowserRouter} from "react-router-dom";
import MainPage from "./Pages/MainPage";
import NotFoundPage from "./Pages/NotFoundPage";
import YoutubeVideoPage from "./Pages/YoutubeVideoPage";


const pageRouter = createBrowserRouter([
    {
      path: "/arabic_react",
      element: <MainPage />,
      errorElement: <NotFoundPage />,
    },
    {
      path: "/arabic_react/youtube",
      element: <YoutubeVideoPage />,
      errorElement: <NotFoundPage />,
    }
  ]);

export default pageRouter;