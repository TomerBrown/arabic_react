import { createBrowserRouter } from "react-router-dom";
import MainPage from "../Pages/MainPage";
import NotFoundPage from "../Pages/NotFoundPage";
import YoutubeVideoPage from "../Pages/YoutubeVideoPage";
import { HOMEPATH, YOUTUBEPATH } from "./routes";

const CreatePageRouter = (
  arabicText: string,
  setArabicText: (text: string) => void
) => {
  return createBrowserRouter([
    {
      path: HOMEPATH,
      element: (
        <MainPage arabicText={arabicText} setArabicText={setArabicText} />
      ),
      errorElement: <NotFoundPage />,
    },
    {
      path: YOUTUBEPATH,
      element: <YoutubeVideoPage setArabicText={setArabicText} />,
      errorElement: <NotFoundPage />,
    },
  ]);
};

export default CreatePageRouter;
