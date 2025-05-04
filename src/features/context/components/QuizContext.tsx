import { createContext } from "react";

import { Option } from "@/types/Option";
import { QuizContextType } from "@/features/context/types/QuizContextType";

export const QuizContext = createContext<QuizContextType>({
  correctAnswers: 0,
  setCorrectAnswers: () => {},
  currentQuestion: 1,
  setCurrentQuestion: () => {},
  displayAnswer: false,
  setDisplayAnswer: () => {},
  questions: [],
  setQuestions: () => {},
  quizInProgress: false,
  setQuizInProgress: () => {},
  quizLength: 5,
  setQuizLength: () => {},
  resetQuiz: () => {},
  selectedAnswer: {} as Option,
  setSelectedAnswer: () => {},
  selectedQuestionTypes: [],
  setSelectedQuestionTypes: () => {},
  showResults: false,
  setShowResults: () => {},
});
