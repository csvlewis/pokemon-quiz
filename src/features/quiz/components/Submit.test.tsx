import React from "react";
import { render } from "@testing-library/react";
import { useQuizContext } from "@/features/context/hooks/useQuizContext";
import { Submit } from "./Submit";

jest.mock("@/features/context/hooks/useQuizContext");

const mockedUseQuizContext = useQuizContext as jest.Mock;

describe("Submit", () => {
  it("should render correctly", () => {
    mockedUseQuizContext.mockReturnValue({
      quizInProgress: true,
      selectedAnswer: { text: "", isCorrect: false },
    });

    const { container } = render(<Submit />);
    expect(container).toMatchSnapshot();
  });
});
