import { useQuizContext } from "@/features/context/hooks/useQuizContext";

export function useHandleToggle(): (value: string) => void {
  const { selectedQuestionTypes, setSelectedQuestionTypes } = useQuizContext();

  return (value: string) => {
    const currentIndex = selectedQuestionTypes.indexOf(value);
    const newQuestionTypes = [...selectedQuestionTypes];

    if (currentIndex === -1) {
      newQuestionTypes.push(value);
    } else {
      newQuestionTypes.splice(currentIndex, 1);
    }

    setSelectedQuestionTypes(newQuestionTypes);
  };
}
