import { useHandleSubmit } from "./useHandleSubmit";
import { useQuizContext } from "@/features/context/hooks/useQuizContext";
import { renderHook } from "@testing-library/react";

jest.mock("@/features/context/hooks/useQuizContext");

const mockedUseQuizContext = useQuizContext as jest.Mock;

describe("useHandleSubmit", () => {
  it("should increment correct answers by 1 if correct and display answers if none are shown", () => {
    mockedUseQuizContext.mockReturnValue({
      correctAnswers: 0,
      displayAnswer: false,
      selectedAnswer: { text: "test", isCorrect: true },
      setCorrectAnswers: jest.fn(),
      setDisplayAnswer: jest.fn(),
    });

    const { result } = renderHook(() => useHandleSubmit());
    const handleSubmit = result.current;
    const { setDisplayAnswer, setCorrectAnswers } = mockedUseQuizContext();

    handleSubmit();

    expect(setDisplayAnswer).toHaveBeenCalledWith(true);
    expect(setCorrectAnswers).toHaveBeenCalledWith(1);
  });

  it("should not increment correct answers if incorrect and display answers if none are shown", () => {
    mockedUseQuizContext.mockReturnValue({
      correctAnswers: 0,
      displayAnswer: false,
      selectedAnswer: { text: "test", isCorrect: false },
      setCorrectAnswers: jest.fn(),
      setDisplayAnswer: jest.fn(),
    });

    const { result } = renderHook(() => useHandleSubmit());
    const handleSubmit = result.current;
    const { setDisplayAnswer, setCorrectAnswers } = mockedUseQuizContext();

    handleSubmit();

    expect(setDisplayAnswer).toHaveBeenCalledWith(true);
    expect(setCorrectAnswers).toHaveBeenCalledTimes(0);
  });

  it("should go to next question if answers are already being displayed", () => {
    mockedUseQuizContext.mockReturnValue({
      correctAnswers: 0,
      displayAnswer: true,
      selectedAnswer: { text: "test", isCorrect: false },
      questions: [],
      setCorrectAnswers: jest.fn(),
      setDisplayAnswer: jest.fn(),
      setCurrentQuestion: jest.fn(),
      setSelectedAnswer: jest.fn(),
    });

    const { result } = renderHook(() => useHandleSubmit());
    const handleSubmit = result.current;
    const { setDisplayAnswer, setCorrectAnswers } = mockedUseQuizContext();

    handleSubmit();

    expect(setDisplayAnswer).toHaveBeenCalledWith(false);
    expect(setCorrectAnswers).toHaveBeenCalledTimes(0);
  });
});
