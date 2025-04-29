import { useQuizContext } from "@/features/context/hooks/useQuizContext";

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
    } else {
      setCurrentQuestion(currentQuestion + 1);
      setDisplayAnswer(false);
      setSelectedAnswer({});
    }
  };
}
