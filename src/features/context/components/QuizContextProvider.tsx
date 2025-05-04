"use client";

import { useEffect, useState } from "react";

import { Option } from "@/types/Option";
import { Question } from "@/types/Question";
import { questionTypes } from "@/config/questionTypes";
import { PokemonData } from "@/types/PokemonData";
import { QuizContext } from "@/features/context/components/QuizContext";
import { fetchPokemonData } from "@/features/questions/api/fetchPokemonData";
import { generateQuestion } from "@/features/questions/utils/generateQuestion";

export function QuizContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [correctAnswers, setCorrectAnswers] = useState<number>(0);
  const [currentQuestion, setCurrentQuestion] = useState<number>(1);
  const [displayAnswer, setDisplayAnswer] = useState<boolean>(false);
  const [pokemonData, setPokemonData] = useState<PokemonData[]>(
    [] as PokemonData[]
  );
  const [questions, setQuestions] = useState<Question[]>([]);
  const [quizInProgress, setQuizInProgress] = useState<boolean>(false);
  const [quizLength, setQuizLength] = useState<number>(5);
  const [selectedAnswer, setSelectedAnswer] = useState<Option>({
    text: "",
    isCorrect: false,
  });
  const [selectedQuestionTypes, setSelectedQuestionTypes] = useState<string[]>(
    questionTypes.map((q) => q.name)
  );
  const [showResults, setShowResults] = useState<boolean>(false);
  const resetQuiz = () => {
    setCorrectAnswers(0);
    setShowResults(false);
    setQuizInProgress(false);
    setQuestions([]);
    setSelectedAnswer({ text: "", isCorrect: false });
    setCurrentQuestion(1);
    setDisplayAnswer(false);
  };

  // fetch pokemon data from API
  useEffect(() => {
    fetchPokemonData(quizLength).then((response) => {
      setPokemonData(response);
    });
  }, [quizLength, showResults]);

  // generate questions from pokemon data
  useEffect(() => {
    if (selectedQuestionTypes.length > 0) {
      setQuestions(
        pokemonData.map((pokemon) => {
          return generateQuestion(pokemon, selectedQuestionTypes);
        })
      );
    }
  }, [pokemonData, selectedQuestionTypes]);

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
        selectedQuestionTypes,
        setSelectedQuestionTypes,
        showResults,
        setShowResults,
      }}
    >
      {children}
    </QuizContext.Provider>
  );
}
