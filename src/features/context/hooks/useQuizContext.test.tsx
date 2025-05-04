import { useQuizContext } from "./useQuizContext";
import { renderHook } from "@testing-library/react";

jest.mock("@/features/context/hooks/useQuizContext");

describe("useQuizContext", () => {
  it("should return quiz state variables and setters", () => {
    const mockSetSelectedAnswer = jest.fn();
    const mockSetCurrentQuestion = jest.fn();
    const mockSetDisplayAnswer = jest.fn();
    const mockSetQuestions = jest.fn();
    const mockSetQuizInProgress = jest.fn();
    const mockSetQuizLength = jest.fn();
    const mockSetShowResults = jest.fn();
    const mockResetQuiz = jest.fn();

    const mockContextValue = {
      correctAnswers: 0,
      setCorrectAnswers: mockSetSelectedAnswer,
      currentQuestion: 1,
      setCurrentQuestion: mockSetCurrentQuestion,
      displayAnswer: false,
      setDisplayAnswer: mockSetDisplayAnswer,
      questions: [],
      setQuestions: mockSetQuestions,
      quizInProgress: true,
      setQuizInProgress: mockSetQuizInProgress,
      quizLength: 10,
      setQuizLength: mockSetQuizLength,
      selectedAnswer: Option,
      setSelectedAnswer: mockSetSelectedAnswer,
      showResults: false,
      setShowResults: mockSetShowResults,
      resetQuiz: mockResetQuiz,
    };

    (useQuizContext as jest.Mock).mockReturnValue(mockContextValue);

    const { result } = renderHook(() => useQuizContext());

    const {
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
      resetQuiz,
    } = result.current;

    expect(result.current).toEqual(mockContextValue);
    expect(correctAnswers).toBe(0);
    expect(setCorrectAnswers).toBe(mockSetSelectedAnswer);
    expect(currentQuestion).toBe(1);
    expect(setCurrentQuestion).toBe(mockSetCurrentQuestion);
    expect(displayAnswer).toBe(false);
    expect(setDisplayAnswer).toBe(mockSetDisplayAnswer);
    expect(questions).toEqual([]);
    expect(setQuestions).toBe(mockSetQuestions);
    expect(quizInProgress).toBe(true);
    expect(setQuizInProgress).toBe(mockSetQuizInProgress);
    expect(quizLength).toBe(10);
    expect(setQuizLength).toBe(mockSetQuizLength);
    expect(selectedAnswer).toBe(Option);
    expect(setSelectedAnswer).toBe(mockSetSelectedAnswer);
    expect(showResults).toBe(false);
    expect(setShowResults).toBe(mockSetShowResults);
    expect(resetQuiz).toBe(mockResetQuiz);
  });
});
