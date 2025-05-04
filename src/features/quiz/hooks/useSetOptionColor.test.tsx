import { useSetOptionColor } from "./useSetOptionColor";
import { useQuizContext } from "@/features/context/hooks/useQuizContext";
import { renderHook } from "@testing-library/react";
import { Option } from "@/types/Option";

jest.mock("@/features/context/hooks/useQuizContext");

const mockedUseQuizContext = useQuizContext as jest.Mock;

describe("useSetOptionColor", () => {
  it("should set the option color to 'success' if correct", () => {
    mockedUseQuizContext.mockReturnValue({
      displayAnswer: true,
    });

    const option: Option = { text: "Grass", isCorrect: true };
    const { result } = renderHook(() => useSetOptionColor());
    const setOptionColor = result.current;
    const color = setOptionColor(option);

    expect(color).toBe("success");
  });

  it("should set the option color to 'error' if incorrect", () => {
    mockedUseQuizContext.mockReturnValue({
      displayAnswer: true,
    });

    const option: Option = { text: "Grass", isCorrect: false };
    const { result } = renderHook(() => useSetOptionColor());
    const setOptionColor = result.current;
    const color = setOptionColor(option);

    expect(color).toBe("error");
  });

  it("should return 'primary' color as default if answers are not being displayed", () => {
    mockedUseQuizContext.mockReturnValue({
      displayAnswer: false,
    });

    const option: Option = { text: "Grass", isCorrect: false };
    const { result } = renderHook(() => useSetOptionColor());
    const setOptionColor = result.current;
    const color = setOptionColor(option);

    expect(color).toBe("primary");
  });
});
