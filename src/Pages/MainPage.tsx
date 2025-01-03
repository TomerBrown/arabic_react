import InputText from "../components/InputText/InputText";
import Outputs from "../components/outputs/Outputs";

import TemplatePage from "./TemplatePage";

interface MainPageProps {
  arabicText: string;
  setArabicText: (text: string) => void;
  url: string, 
  setUrl: (url: string) => void;
}

const MainPage = ({arabicText, setArabicText, url, setUrl}: MainPageProps) => {

  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setArabicText(e.target.value);
  };
  return (
    <TemplatePage>
      <InputText
        arabicText={arabicText}
        setArabicText={setArabicText}
        handleOnChange={handleInputChange}
        url={url}
        setUrl={setUrl}
      />
      <Outputs arabicText={arabicText} />
    </TemplatePage>
  );
};

export default MainPage;
