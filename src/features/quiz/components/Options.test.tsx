import React from "react";
import { Options } from "./Options";
import { render } from "@testing-library/react";
import { useQuizContext } from "@/features/context/hooks/useQuizContext";

jest.mock("@/features/context/hooks/useQuizContext");

const mockedUseQuizContext = useQuizContext as jest.Mock;

describe("Options", () => {
  it("should render correctly", () => {
    mockedUseQuizContext.mockReturnValue({
      currentQuestion: 1,
      questions: [
        {
          text: "Question 1",
          imageUrl: "https://example.com/image1.png",
          options: [
            { text: "Option 1", isCorrect: false },
            { text: "Option 2", isCorrect: true },
            { text: "Option 3", isCorrect: false },
            { text: "Option 4", isCorrect: false },
          ],
        },
      ],
      quizInProgress: true,
      selectedAnswer: { text: "Option 1", isCorrect: false },
    });

    const { container } = render(<Options />);
    expect(container).toMatchSnapshot();
  });
});
