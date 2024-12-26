import { Spinner, Text, VStack } from "@chakra-ui/react";
import useTranslate from "../../../hooks/useTranslate";
import OutputBox from "../OutputBox/OutputBox";

interface TranslationBoxProps {
  arabicText: string;
  translateAgain: boolean;
  color: string;
  model: "ms" | "gpt";
}

const MODEL_TO_DISPLAY_NAME = {
  ms: "Microsoft",
  gpt: "GPT-4o",
};

const TranslationBox = ({
  arabicText,
  translateAgain,
  color,
  model,
}: TranslationBoxProps) => {
  const { data, error, loading } = useTranslate(
    arabicText,
    translateAgain,
    "ms"
  );

  if (error) {
    console.error(error);
    return <div>{error}</div>;
  }
  if (loading) {
    return (
      <VStack>
        <Spinner color="colorPalette.600" />
        <Text color="colorPalette.600">Loading...</Text>
      </VStack>
    );
  }
  return (
    <OutputBox
      badgeColor={color}
      badgeTitle={`תרגום - ${MODEL_TO_DISPLAY_NAME[model]}`}
      text={data.translated_text}
    />
  );
};

export default TranslationBox;
