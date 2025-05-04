import { useIncrementQuestion } from "./useIncrementQuestion";
import { useQuizContext } from "@/features/context/hooks/useQuizContext";
import { renderHook } from "@testing-library/react";

jest.mock("@/features/context/hooks/useQuizContext");

const mockedUseQuizContext = useQuizContext as jest.Mock;

describe("useIncrementQuestion", () => {
  it("should increment the question and clear answers if the quiz is not complete", () => {
    mockedUseQuizContext.mockReturnValue({
      currentQuestion: 1,
      questions: [{}, {}, {}],
      setCurrentQuestion: jest.fn(),
      setDisplayAnswer: jest.fn(),
      setSelectedAnswer: jest.fn(),
      setShowResults: jest.fn(),
      setQuizInProgress: jest.fn(),
    });

    const { result } = renderHook(() => useIncrementQuestion());
    const handleSubmit = result.current;
    const {
      setCurrentQuestion,
      setDisplayAnswer,
      setQuizInProgress,
      setSelectedAnswer,
      setShowResults,
    } = mockedUseQuizContext();
    handleSubmit();

    expect(setCurrentQuestion).toHaveBeenCalledWith(2);
    expect(setDisplayAnswer).toHaveBeenCalledWith(false);
    expect(setSelectedAnswer).toHaveBeenCalledWith({
      text: "",
      isCorrect: false,
    });
    expect(setQuizInProgress).toHaveBeenCalledTimes(0);
    expect(setShowResults).toHaveBeenCalledTimes(0);
  });

  it("should end the quiz if the quiz is complete", () => {
    mockedUseQuizContext.mockReturnValue({
      currentQuestion: 3,
      questions: [{}, {}, {}],
      setCurrentQuestion: jest.fn(),
      setDisplayAnswer: jest.fn(),
      setSelectedAnswer: jest.fn(),
      setShowResults: jest.fn(),
      setQuizInProgress: jest.fn(),
    });

    const { result } = renderHook(() => useIncrementQuestion());
    const handleSubmit = result.current;
    const {
      setCurrentQuestion,
      setDisplayAnswer,
      setQuizInProgress,
      setSelectedAnswer,
      setShowResults,
    } = mockedUseQuizContext();
    handleSubmit();

    expect(setQuizInProgress).toHaveBeenCalledWith(false);
    expect(setShowResults).toHaveBeenCalledWith(true);
    expect(setCurrentQuestion).toHaveBeenCalledTimes(0);
    expect(setDisplayAnswer).toHaveBeenCalledTimes(0);
    expect(setSelectedAnswer).toHaveBeenCalledTimes(0);
  });
});
