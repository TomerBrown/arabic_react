import { SingleQuestion as Question } from "../../../hooks/useQuestions";
import { mapArabicToHebrewLetters } from "../../../mapper/Mapper";
import {
  Accordion,
  AccordionButton,
  AccordionItem,
  AccordionPanel,
  AccordionIcon,
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
        <Heading size="md">
          {mapArabicToHebrewLetters(question.question_in_arabic)}
        </Heading>
      </CardHeader>

      <CardBody>
        <Accordion allowMultiple={true}>
          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box as="span" flex="1" textAlign="right">
                  תרגום השאלה:
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              <Text pt="2" fontSize="sm">
                {question.question_in_hebrew !== null
                  ? question.question_in_hebrew
                  : ""}
              </Text>
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box as="span" flex="1" textAlign="right">
                  התשובה בערבית:
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              <Text pt="2" fontSize="sm">
                {question.answer_in_arabic !== null
                  ? question.answer_in_arabic
                  : ""}
              </Text>
              <Text pt="2" fontSize="sm">
                {question.answer_in_arabic !== null
                  ? mapArabicToHebrewLetters(question.answer_in_arabic)
                  : ""}
              </Text>
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box as="span" flex="1" textAlign="right">
                  תרגום התשובה לעברית:
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              <Text pt="2" fontSize="sm">
                {question.answer_in_hebrew !== null
                  ? question.answer_in_hebrew
                  : ""}
              </Text>
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
      </CardBody>
    </Card>
  );
};

export default SingleQuestion;
