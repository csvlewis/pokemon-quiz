import { useHandleToggle } from "./useHandleToggle";
import { useQuizContext } from "@/features/context/hooks/useQuizContext";
import { renderHook } from "@testing-library/react";

jest.mock("@/features/context/hooks/useQuizContext");

const mockedUseQuizContext = useQuizContext as jest.Mock;

describe("useHandleToggle", () => {
  it("should toggle an option on if it is not already selected", () => {
    mockedUseQuizContext.mockReturnValue({
      selectedQuestionTypes: ["Question Type 1", "Question Type 2"],
      setSelectedQuestionTypes: jest.fn(),
    });

    const { result } = renderHook(() => useHandleToggle());
    const handleToggle = result.current;
    const { setSelectedQuestionTypes } = mockedUseQuizContext();
    handleToggle("Question Type 3");

    expect(setSelectedQuestionTypes).toHaveBeenCalledTimes(1);
    expect(setSelectedQuestionTypes).toHaveBeenCalledWith([
      "Question Type 1",
      "Question Type 2",
      "Question Type 3",
    ]);
  });

  it("should toggle an option off if it is already selected", () => {
    mockedUseQuizContext.mockReturnValue({
      selectedQuestionTypes: [
        "Question Type 1",
        "Question Type 2",
        "Question Type 3",
      ],
      setSelectedQuestionTypes: jest.fn(),
    });

    const { result } = renderHook(() => useHandleToggle());
    const handleToggle = result.current;
    const { setSelectedQuestionTypes } = mockedUseQuizContext();
    handleToggle("Question Type 3");

    expect(setSelectedQuestionTypes).toHaveBeenCalledTimes(1);
    expect(setSelectedQuestionTypes).toHaveBeenCalledWith([
      "Question Type 1",
      "Question Type 2",
    ]);
  });
});
