"use client";

import { useState } from "react";
import { Option } from "@/types/Option";
import { Question } from "@/types/Question";
import { QuizContext } from "@/features/context/components/QuizContext";

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
  const resetQuiz = () => {
    setCorrectAnswers(0);
    setShowResults(false);
    setQuizInProgress(false);
    setQuestions([]);
    setSelectedAnswer({});
    setCurrentQuestion(1);
    setDisplayAnswer(false);
  };

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
        resetQuiz,
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
