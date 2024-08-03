import { Tag, Textarea } from "@chakra-ui/react";
import "./InputText.css"

interface InputTextProps {
    arabicText: string;
    handleOnChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

const InputText = ({arabicText, handleOnChange}: InputTextProps) => {

  return (
    <div className="components-container">
      <Tag key="label" variant="subtle" colorScheme="teal" size="md" mb="15px;"> ערבית (العربية)</Tag>
      <Textarea
        dir="rtl"
        resize="none"
        rows={6}
        value={arabicText}
        onChange={handleOnChange}
        placeholder="أدخل النص بالعربية..."
      ></Textarea>
    </div>
  );
};

export default InputText;
