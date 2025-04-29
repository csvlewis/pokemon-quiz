import { useContext } from "react";
import { QuizContextType } from "@/features/context/types/QuizContextType";
import { QuizContext } from "@/features/context/components/QuizContext";

export function useQuizContext(): QuizContextType {
  return useContext<QuizContextType>(QuizContext);
}
