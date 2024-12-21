import useTranslate from "../../../hooks/useTranslate";
import {
  Spinner,
  VStack,
  Text,
  HStack,
  useBreakpointValue,
} from "@chakra-ui/react";
import Taatic from "../Taatic/Taatic";
import OutputBox from "../OutputBox/OutputBox";
interface TranslateProps {
  arabicText: string;
  taaticText: string;
  translateAgain: boolean;
}

const Translate = ({
  arabicText,
  taaticText,
  translateAgain,
}: TranslateProps) => {
  const { data, error, loading } = useTranslate(arabicText, translateAgain);
  const Stack =
    useBreakpointValue({
      base: VStack, // Use VStack for narrow screens
      md: HStack, // Use HStack for medium and larger screens
    }) || VStack;

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
    <Stack gap={4} p={12}>
      <OutputBox
        badgeColor="blue"
        badgeTitle="תרגום"
        text={data.translated_text}
      />
      ;
      <Taatic text={taaticText} />;
    </Stack>
  );
};

export default Translate;
