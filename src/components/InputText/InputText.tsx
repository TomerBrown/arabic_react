import { Tag, Textarea } from "@chakra-ui/react";
import Youtube from "../Youtube/Youtube";
import "./InputText.css";

interface InputTextProps {
  arabicText: string;
  setArabicText: (text: string) => void;
  handleOnChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

const InputText = ({
  arabicText,
  setArabicText,
  handleOnChange,
}: InputTextProps) => {
  return (
    <div className="components-container">
      <Tag key="label" variant="subtle" colorScheme="teal" size="md" mb="15px;">
        {" "}
        ערבית (العربية)
      </Tag>
      <Textarea
        dir="rtl"
        resize="none"
        rows={6}
        value={arabicText}
        onChange={handleOnChange}
        placeholder="أدخل النص بالعربية..."
      ></Textarea>
      <Youtube setArabicText={setArabicText} />
    </div>
  );
};

export default InputText;
