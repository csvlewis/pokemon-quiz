import React from "react";
import { Main } from "./Main";
import { render } from "@testing-library/react";
import { useQuizContext } from "@/features/context/hooks/useQuizContext";

jest.mock("@/features/context/hooks/useQuizContext");

const mockedUseQuizContext = useQuizContext as jest.Mock;

describe("Main", () => {
  it("should render correctly", () => {
    mockedUseQuizContext.mockReturnValue({
      quizInProgress: true,
      questions: [],
      selectedAnswer: { text: "", isCorrect: false },
    });

    const { container } = render(<Main />);
    expect(container).toMatchSnapshot();
  });
});
