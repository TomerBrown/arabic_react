import useQuestions from "../../../hooks/useQuestions";
import { Spinner, VStack, Text, HStack, Stack } from "@chakra-ui/react";

import SingleQuestion from "./SingleQuestion";

interface QuestionsProps {
  arabicText: string;
  questionsAgain: boolean;
}

const Questions = ({ arabicText, questionsAgain }: QuestionsProps) => {
  const { data, error, loading } = useQuestions(arabicText, questionsAgain);
  if (error) {
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
    <div>
      {false &&
        data.questions.map((q, index) => {
          return <SingleQuestion question={q} key={index} />;
        })}
      <SingleQuestion question={data.questions[0]} />
    </div>
  );
};

export default Questions;
