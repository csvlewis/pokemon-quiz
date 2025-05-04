import React from "react";
import { render } from "@testing-library/react";
import { useQuizContext } from "@/features/context/hooks/useQuizContext";
import { QuizLengthSelect } from "./QuizLengthSelect";

jest.mock("@/features/context/hooks/useQuizContext");

const mockedUseQuizContext = useQuizContext as jest.Mock;

describe("QuizLengthSelect", () => {
  it("should render correctly", () => {
    mockedUseQuizContext.mockReturnValue({
      setQuizLength: jest.fn(),
    });

    const { container } = render(<QuizLengthSelect />);
    expect(container).toMatchSnapshot();
  });
});
