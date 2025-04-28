import { useQuizContext } from "@/features/context/components/QuizContextProvider";

export function useIncrementQuestion(): () => void {
  const {
    currentQuestion,
    questions,
    setCurrentQuestion,
    setDisplayAnswer,
    setSelectedAnswer,
    setShowResults,
    setQuizInProgress,
  } = useQuizContext();

  return () => {
    if (currentQuestion >= questions.length) {
      setQuizInProgress(false);
      setShowResults(true);
      return;
    }
    setCurrentQuestion(currentQuestion + 1);
    setDisplayAnswer(false);
    setSelectedAnswer({});
  };
}
