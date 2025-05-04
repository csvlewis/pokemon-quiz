import React from "react";
import { render } from "@testing-library/react";
import { useQuizContext } from "@/features/context/hooks/useQuizContext";
import { Question } from "./Question";

jest.mock("@/features/context/hooks/useQuizContext");

const mockedUseQuizContext = useQuizContext as jest.Mock;

describe("Question", () => {
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
        {
          text: "Question 2",
          imageUrl: "https://example.com/image2.png",
          options: [
            { text: "Option 1", isCorrect: true },
            { text: "Option 2", isCorrect: false },
            { text: "Option 3", isCorrect: false },
            { text: "Option 4", isCorrect: false },
          ],
        },
      ],
      selectedAnswer: { text: "Option 1", isCorrect: false },
      quizInProgress: true,
    });

    const { container } = render(<Question />);
    expect(container).toMatchSnapshot();
  });
});
