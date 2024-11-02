import useQuestions from "../../../hooks/useQuestions";
import { Spinner, VStack, Text, Button } from "@chakra-ui/react";

import SingleQuestion from "./SingleQuestion";
import { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

interface QuestionsProps {
  arabicText: string;
  questionsAgain: boolean;
}

const Questions = ({ arabicText, questionsAgain }: QuestionsProps) => {
  const { data, error, loading } = useQuestions(arabicText, questionsAgain);
  const [questionIndex, setQuestionIndex] = useState(0);
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
      {data.questions.map((question, index) => (
        <SingleQuestion
          question={question}
          index={index}
          visible={index === questionIndex}
        />
      ))}
      <Button
        isDisabled={questionIndex === 0}
        leftIcon={<FaArrowRight />}
        variant="outline"
        colorScheme="teal"
        onClick={() => setQuestionIndex(questionIndex - 1)}
      >
        הקודם
      </Button>
      <Button
        isDisabled={questionIndex === data.questions.length - 1}
        rightIcon={<FaArrowLeft />}
        variant="outline"
        colorScheme="teal"
        onClick={() => setQuestionIndex(questionIndex + 1)}
      >
        הבא
      </Button>
    </div>
  );
};

export default Questions;
