import useTranslate from "../../../hooks/useTranslate";
import { Spinner, VStack, Text } from "@chakra-ui/react";

interface TranslateProps {
  arabicText: string;
  translateAgain: boolean;
}

const Translate = ({ arabicText, translateAgain }: TranslateProps) => {
  const { data, error, loading } = useTranslate(arabicText, translateAgain);
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
  return <div>{data.translated_text}</div>;
};

export default Translate;
