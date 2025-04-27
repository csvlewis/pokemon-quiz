"use client";

import { createContext, useContext, useState } from "react";

import { Option } from "@/types/Option";
import { Question } from "@/types/Question";

type QuizContextType = {
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
};

const QuizContext = createContext<QuizContextType>({
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
  selectedAnswer: {} as Option,
  setSelectedAnswer: () => {},
  showResults: false,
  setShowResults: () => {},
});

export function QuizContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [correctAnswers, setCorrectAnswers] = useState<number>(0);
  const [currentQuestion, setCurrentQuestion] = useState<number>(1);
  const [displayAnswer, setDisplayAnswer] = useState<boolean>(false);
  const [questions, setQuestions] = useState<Question[]>([]);
  const [quizInProgress, setQuizInProgress] = useState<boolean>(false);
  const [quizLength, setQuizLength] = useState<number>(5);
  const [selectedAnswer, setSelectedAnswer] = useState<Option>({});
  const [showResults, setShowResults] = useState<boolean>(false);

  return (
    <QuizContext.Provider
      value={{
        correctAnswers,
        setCorrectAnswers,
        currentQuestion,
        setCurrentQuestion,
        displayAnswer,
        setDisplayAnswer,
        questions,
        setQuestions,
        quizInProgress,
        setQuizInProgress,
        quizLength,
        setQuizLength,
        selectedAnswer,
        setSelectedAnswer,
        showResults,
        setShowResults,
      }}
    >
      {children}
    </QuizContext.Provider>
  );
}

export function useQuizContext(): QuizContextType {
  return useContext<QuizContextType>(QuizContext);
}
