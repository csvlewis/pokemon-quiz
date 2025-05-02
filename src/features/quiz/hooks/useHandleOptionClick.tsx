import { Option } from "@/types/Option";
import { useQuizContext } from "@/features/context/hooks/useQuizContext";

export function useHandleOptionClick(): (option: Option) => void {
  const { displayAnswer, selectedAnswer, setSelectedAnswer } = useQuizContext();

  return (option: Option) => {
    if (displayAnswer) return;
    if (option === selectedAnswer) {
      setSelectedAnswer({ text: "", isCorrect: false });
    } else {
      setSelectedAnswer(option);
    }
  };
}
