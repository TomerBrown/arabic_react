import TemplatePage from "./TemplatePage";
import Youtube from "../components/Youtube/Youtube";

interface YoutubeVideoPageProps {
    setArabicText: (text: string) => void;
}

const YoutubeVideoPage = ( {setArabicText}: YoutubeVideoPageProps) => {
  return (
    <div>
      <TemplatePage>
        <Youtube setArabicText={setArabicText} />
      </TemplatePage>
    </div>
  );
};

export default YoutubeVideoPage;
