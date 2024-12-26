import { VStack, HStack, useBreakpointValue } from "@chakra-ui/react";
import Taatic from "../Taatic/Taatic";
import TranslationBox from "./TranslationBox";

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
  const Stack =
    useBreakpointValue({
      base: VStack, // Use VStack for narrow screens
      md: HStack, // Use HStack for medium and larger screens
    }) || VStack;

  return (
    <Stack gap={4} p={12}>
      <VStack width={"100%"}>
        <TranslationBox
          arabicText={arabicText}
          translateAgain={translateAgain}
          color={"yellow"}
          model="ms"
          key={"ms"}
        />
        <TranslationBox
          arabicText={arabicText}
          translateAgain={translateAgain}
          color={"green"}
          model="gpt"
          key={"gpt"}
        />
      </VStack>
      <Taatic text={taaticText} />;
    </Stack>
  );
};

export default Translate;
