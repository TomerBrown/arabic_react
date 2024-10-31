import { SingleQuestion as Question } from "../../../hooks/useQuestions";
import {
  Card,
  CardBody,
  CardHeader,
  Heading,
  Stack,
  StackDivider,
  Text,
  Box,
} from "@chakra-ui/react";

interface SingleQuestionProps {
  question: Question;
}

const SingleQuestion = ({ question }: SingleQuestionProps) => {
  if (!question) return;
  if (!question.question_in_arabic) return;
  return (
    <Card>
      <CardHeader>
        <Heading size="lg">{question.question_in_arabic}</Heading>
      </CardHeader>

      <CardBody>
        <Stack divider={<StackDivider />} spacing="4">
          <Box>
            <Heading size="xs" textTransform="uppercase">
              תרגום השאלה:
            </Heading>
            <Text pt="2" fontSize="sm">
              {question.question_in_hebrew !== null
                ? question.question_in_hebrew
                : ""}
            </Text>
          </Box>
          <Box>
            <Heading size="xs" textTransform="uppercase">
              תשובה בערבית:
            </Heading>
            <Text pt="2" fontSize="sm">
              {question.answer_in_arabic !== null
                ? question.answer_in_arabic
                : ""}
            </Text>
          </Box>
          <Box>
            <Heading size="xs" textTransform="uppercase">
              תרגום התשובה לעברית:
            </Heading>
            <Text pt="2" fontSize="sm">
              {question.answer_in_hebrew !== null
                ? question.answer_in_hebrew
                : ""}
            </Text>
          </Box>
        </Stack>
      </CardBody>
    </Card>
  );
};

export default SingleQuestion;
