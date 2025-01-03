import { createBrowserRouter } from "react-router-dom";
import MainPage from "../Pages/MainPage";
import NotFoundPage from "../Pages/NotFoundPage";
import YoutubeVideoPage from "../Pages/YoutubeVideoPage";
import { HOMEPATH, YOUTUBEPATH } from "./routes";


const pageRouter = createBrowserRouter([
  {
    path: HOMEPATH,
    element: <MainPage />,
    errorElement: <NotFoundPage />,
  },
  {
    path: YOUTUBEPATH,
    element: <YoutubeVideoPage />,
    errorElement: <NotFoundPage />,
  },
]);


export default pageRouter;
