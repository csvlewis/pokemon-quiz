import { Option } from "@/types/Option";
import { Question } from "@/types/Question";

export type QuizContextType = {
  correctAnswers: number;
  setCorrectAnswers: React.Dispatch<React.SetStateAction<number>>;
  currentQuestion: number;
  setCurrentQuestion: React.Dispatch<React.SetStateAction<number>>;
  displayAnswer: boolean;
  setDisplayAnswer: React.Dispatch<React.SetStateAction<boolean>>;
  questions: Question[];
  setQuestions: React.Dispatch<React.SetStateAction<Question[]>>;
  quizInProgress: boolean;
  setQuizInProgress: React.Dispatch<React.SetStateAction<boolean>>;
  quizLength: number;
  setQuizLength: React.Dispatch<React.SetStateAction<number>>;
  selectedAnswer: Option;
  setSelectedAnswer: React.Dispatch<React.SetStateAction<Option>>;
  showResults: boolean;
  setShowResults: React.Dispatch<React.SetStateAction<boolean>>;
  resetQuiz: () => void;
};
