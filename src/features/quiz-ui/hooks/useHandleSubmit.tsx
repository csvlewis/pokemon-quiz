import { useQuizContext } from "@/features/context/components/QuizContextProvider";
import { useIncrementQuestion } from "@/features/quiz-ui/hooks/useIncrementQuestion";
import { Option } from "@/types/Option";

export function useHandleSubmit(): (answer: Option) => void {
  const { correctAnswers, displayAnswer, setCorrectAnswers, setDisplayAnswer } =
    useQuizContext();
  const incrementQuestion = useIncrementQuestion();

  return (answer) => {
    if (displayAnswer) {
      incrementQuestion();
    } else {
      if (answer.isCorrect) setCorrectAnswers(correctAnswers + 1);
      setDisplayAnswer(true);
    }
  };
}
