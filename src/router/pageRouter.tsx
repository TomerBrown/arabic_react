import { createBrowserRouter } from "react-router-dom";
import MainPage from "../Pages/MainPage";
import NotFoundPage from "../Pages/NotFoundPage";
import YoutubeVideoPage from "../Pages/YoutubeVideoPage";
import { HOMEPATH, YOUTUBEPATH } from "./routes";

const CreatePageRouter = (
  arabicText: string,
  setArabicText: (text: string) => void,
  youtubeUrl: string,
  setYoutubeUrl: (url: string) => void
) => {
  return createBrowserRouter([
    {
      path: HOMEPATH,
      element: (
        <MainPage
          arabicText={arabicText}
          setArabicText={setArabicText}
          url={youtubeUrl}
          setUrl={setYoutubeUrl}
        />
      ),
      errorElement: <NotFoundPage />,
    },
    {
      path: YOUTUBEPATH,
      element: (
        <YoutubeVideoPage
          arabicText={arabicText}
          setArabicText={setArabicText}
          url={youtubeUrl}
          setUrl={setYoutubeUrl}
        />
      ),
      errorElement: <NotFoundPage />,
    },
  ]);
};

export default CreatePageRouter;
