import { useQuizContext } from "@/features/context/hooks/useQuizContext";
import { Option } from "@/types/Option";

export function useHandleOptionClick(): (option: Option) => void {
  const { displayAnswer, selectedAnswer, setSelectedAnswer } = useQuizContext();

  return (option: Option) => {
    if (displayAnswer) return;
    if (option === selectedAnswer) {
      setSelectedAnswer({});
    } else {
      setSelectedAnswer(option);
    }
  };
}
