import InputText from "../InputText/InputText";
import Outputs from "../outputs/Outputs";
import Header from "../Header/Header";

import { useState } from "react";

const MainPage = () => {
  const [arabicText, setArabicText] = useState<string>("");

  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setArabicText(e.target.value);
  };
  return (
    <>
      <Header />
      <InputText
        arabicText={arabicText}
        setArabicText={setArabicText}
        handleOnChange={handleInputChange}
      />
      <Outputs arabicText={arabicText} />
    </>
  );
};

export default MainPage;
