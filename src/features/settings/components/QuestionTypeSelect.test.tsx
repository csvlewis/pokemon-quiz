import React from "react";
import { render } from "@testing-library/react";
import { useQuizContext } from "@/features/context/hooks/useQuizContext";
import { QuestionTypeSelect } from "./QuestionTypeSelect";

jest.mock("@/features/context/hooks/useQuizContext");

const mockedUseQuizContext = useQuizContext as jest.Mock;

describe("QuestionTypeSelect", () => {
  it("should render correctly", () => {
    mockedUseQuizContext.mockReturnValue({
      selectedQuestionTypes: [],
    });

    const { container } = render(<QuestionTypeSelect />);
    expect(container).toMatchSnapshot();
  });
});
