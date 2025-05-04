import { useSetSubmitText } from "./useSetSubmitText";
import { useQuizContext } from "@/features/context/hooks/useQuizContext";
import { renderHook } from "@testing-library/react";

jest.mock("@/features/context/hooks/useQuizContext");

const mockedUseQuizContext = useQuizContext as jest.Mock;

describe("useSetSubmitText", () => {
  it("should return 'Submit' if answers are not being displayed", () => {
    mockedUseQuizContext.mockReturnValue({
      currentQuestion: 1,
      displayAnswer: false,
      questions: [{}, {}, {}],
    });

    const { result } = renderHook(() => useSetSubmitText());
    const setSubmitText = result.current;
    const submitText = setSubmitText();

    expect(submitText).toBe("Submit");
  });

  it("should return 'Next Question' if answers are being displayed and the quiz is not complete", () => {
    mockedUseQuizContext.mockReturnValue({
      currentQuestion: 1,
      displayAnswer: true,
      questions: [{}, {}, {}],
    });

    const { result } = renderHook(() => useSetSubmitText());
    const setSubmitText = result.current;
    const submitText = setSubmitText();

    expect(submitText).toBe("Next Question");
  });

  it("should return 'See Results' if the quiz is complete", () => {
    mockedUseQuizContext.mockReturnValue({
      currentQuestion: 3,
      displayAnswer: true,
      questions: [{}, {}, {}],
    });

    const { result } = renderHook(() => useSetSubmitText());
    const setSubmitText = result.current;
    const submitText = setSubmitText();

    expect(submitText).toBe("See Results");
  });
});
