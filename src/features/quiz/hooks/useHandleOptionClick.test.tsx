import { useHandleOptionClick } from "./useHandleOptionClick";
import { Option } from "@/types/Option";
import { useQuizContext } from "@/features/context/hooks/useQuizContext";
import { renderHook } from "@testing-library/react";

jest.mock("@/features/context/hooks/useQuizContext");

const mockedUseQuizContext = useQuizContext as jest.Mock;

describe("useHandleOptionClick", () => {
  it("should set the selected option when a quiz option is clicked", () => {
    mockedUseQuizContext.mockReturnValue({
      displayAnswer: false,
      selectedAnswer: { text: "", isCorrect: false },
      setSelectedAnswer: jest.fn(),
    });

    const option1: Option = { text: "Grass", isCorrect: true };
    const option2: Option = { text: "Grass", isCorrect: true };
    const { result } = renderHook(() => useHandleOptionClick());
    const handleOptionClick = result.current;
    const { setSelectedAnswer } = mockedUseQuizContext();

    handleOptionClick(option1);
    handleOptionClick(option2);

    expect(setSelectedAnswer).toHaveBeenCalledTimes(2);
    expect(setSelectedAnswer).toHaveBeenCalledWith(option1);
    expect(setSelectedAnswer).toHaveBeenCalledWith(option2);
  });

  it("should clear the selected option when a previously selected quiz option is clicked", () => {
    const option: Option = { text: "Grass", isCorrect: false };

    mockedUseQuizContext.mockReturnValue({
      displayAnswer: false,
      selectedAnswer: option,
      setSelectedAnswer: jest.fn(),
    });

    const { result } = renderHook(() => useHandleOptionClick());
    const handleOptionClick = result.current;
    const { setSelectedAnswer } = mockedUseQuizContext();

    handleOptionClick(option);

    expect(setSelectedAnswer).toHaveBeenCalledWith({
      text: "",
      isCorrect: false,
    });
  });

  it("should do nothing if the answer is being displayed", () => {
    const option1: Option = { text: "Grass", isCorrect: true };
    const option2: Option = { text: "Fire", isCorrect: false };

    mockedUseQuizContext.mockReturnValue({
      displayAnswer: true,
      selectedAnswer: option1,
      setSelectedAnswer: jest.fn(),
    });

    const { result } = renderHook(() => useHandleOptionClick());
    const handleOptionClick = result.current;
    const { setSelectedAnswer } = mockedUseQuizContext();

    handleOptionClick(option1);
    handleOptionClick(option2);

    expect(setSelectedAnswer).toHaveBeenCalledTimes(0);
  });
});
