import InputText from "../components/InputText/InputText";
import Outputs from "../components/outputs/Outputs";

import { useState } from "react";
import TemplatePage from "./TemplatePage";

const MainPage = () => {
  const [arabicText, setArabicText] = useState<string>("");

  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setArabicText(e.target.value);
  };
  return (
    <TemplatePage>
      <InputText
        arabicText={arabicText}
        setArabicText={setArabicText}
        handleOnChange={handleInputChange}
      />
      <Outputs arabicText={arabicText} />
    </TemplatePage>
  );
};

export default MainPage;
