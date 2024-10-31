import useData from "./useData";

interface Question {
  question_in_arabic: string;
  question_in_hebrew: string;
  answer_in_arabic: string;
  answer_in_hebrew: string;
}
interface Questions {
  questions: Question[];
}

const useQuestions = (arabic_text: string, getQuestionsAgain: boolean) => {
  return useData<Questions>(
    "/questions/",
    {
      method: "POST",
      maxBodyLength: Infinity,
      data: {
        arabic_text: arabic_text,
      },
      headers: {
        "Content-Type": "application/json",
      },
    },
    [getQuestionsAgain]
  );
};

export type SingleQuestion = Question;
export default useQuestions;
