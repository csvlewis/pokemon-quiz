import { useQuizContext } from "@/features/context/hooks/useQuizContext";

export function useSetSubmitText(): () => string {
  const { currentQuestion, displayAnswer, questions } = useQuizContext();

  return () => {
    let text: string = "Submit";

    if (displayAnswer) {
      if (currentQuestion >= questions.length) {
        text = "See Results";
      } else text = "Next Question";
    }

    return text;
  };
}
