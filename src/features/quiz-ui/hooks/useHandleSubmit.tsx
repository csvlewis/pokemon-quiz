import { useQuizContext } from "@/features/context/hooks/useQuizContext";
import { useIncrementQuestion } from "@/features/quiz-ui/hooks/useIncrementQuestion";

export function useHandleSubmit(): () => void {
  const {
    correctAnswers,
    displayAnswer,
    selectedAnswer,
    setCorrectAnswers,
    setDisplayAnswer,
  } = useQuizContext();
  const incrementQuestion = useIncrementQuestion();

  return () => {
    if (displayAnswer) {
      incrementQuestion();
    } else {
      if (selectedAnswer.isCorrect) setCorrectAnswers(correctAnswers + 1);
      setDisplayAnswer(true);
    }
  };
}
