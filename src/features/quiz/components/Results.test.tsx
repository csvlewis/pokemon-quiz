import React from "react";
import { render } from "@testing-library/react";
import { useQuizContext } from "@/features/context/hooks/useQuizContext";
import { Results } from "./Results";

jest.mock("@/features/context/hooks/useQuizContext");

const mockedUseQuizContext = useQuizContext as jest.Mock;

describe("Results", () => {
  it("should render correctly", () => {
    mockedUseQuizContext.mockReturnValue({
      correctAnswers: 0,
      questions: [{}, {}],
      quizInProgress: false,
      resetQuiz: jest.fn(),
      showResults: true,
    });

    const { container } = render(<Results />);
    expect(container).toMatchSnapshot();
  });
});
