import React from "react";
import { QuizContext } from "./QuizContext";
import { render } from "@testing-library/react";

describe("QuizContext", () => {
  it("should render children correctly", () => {
    const mockValue = {
      correctAnswers: 0,
      setCorrectAnswers: jest.fn(),
      currentQuestion: 1,
      setCurrentQuestion: jest.fn(),
      displayAnswer: false,
      setDisplayAnswer: jest.fn(),
      questions: [],
      setQuestions: jest.fn(),
      quizInProgress: false,
      setQuizInProgress: jest.fn(),
      quizLength: 5,
      setQuizLength: jest.fn(),
      resetQuiz: jest.fn(),
      selectedAnswer: { text: "", isCorrect: false },
      setSelectedAnswer: jest.fn(),
      showResults: false,
      setShowResults: jest.fn(),
    };

    const { container } = render(
      <QuizContext.Provider value={mockValue}>
        <div>Test</div>
      </QuizContext.Provider>
    );

    expect(container).toMatchSnapshot();
  });
});
