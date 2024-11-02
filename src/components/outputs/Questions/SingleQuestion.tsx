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
  Text,
  Box,
} from "@chakra-ui/react";

interface SingleQuestionProps {
  question: Question;
  index: number;
  visible?: boolean;
}

const getAccordionItems = (
  title: string,
  content: string,
  secondaryContent?: string
) => {
  if (content === null || content === "") return;
  return (
    <AccordionItem>
      <h2>
        <AccordionButton
          _expanded={{ bg: "teal.600", color: "white", fontWeight: "bold" }}
        >
          <Box as="span" flex="1" textAlign="right">
            {title}
          </Box>
          <AccordionIcon />
        </AccordionButton>
      </h2>
      <AccordionPanel pb={4} bg={"gray.100"}>
        <Text pt="2" fontSize="md">
          {content}
        </Text>
        {secondaryContent && (
          <Text pt="2" fontSize="md">
            {secondaryContent}
          </Text>
        )}
      </AccordionPanel>
    </AccordionItem>
  );
};

const SingleQuestion = ({ question, index, visible }: SingleQuestionProps) => {
  if (!question) return;
  if (!question.question_in_arabic) return;
  if (!visible) return;
  return (
    <Card>
      <CardHeader>
        <Heading size="lg">{question.question_in_arabic}</Heading>
        <Heading size="md">
          {mapArabicToHebrewLetters(question.question_in_arabic)}
        </Heading>
      </CardHeader>

      <CardBody>
        <Accordion
          allowMultiple={true}
          id={"QuestionsAccordion" + index.toString()}
        >
          {getAccordionItems("תרגום השאלה:", question.question_in_hebrew)}
          {getAccordionItems(
            "התשובה בערבית:",
            question.answer_in_arabic,
            mapArabicToHebrewLetters(question.answer_in_arabic)
          )}
          {getAccordionItems("התשובה בעברית:", question.answer_in_hebrew)}
        </Accordion>
      </CardBody>
    </Card>
  );
};

export default SingleQuestion;
