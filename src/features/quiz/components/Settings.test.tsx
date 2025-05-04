import React from "react";
import { render } from "@testing-library/react";
import { useQuizContext } from "@/features/context/hooks/useQuizContext";
import { Settings } from "./Settings";

jest.mock("@/features/context/hooks/useQuizContext");

const mockedUseQuizContext = useQuizContext as jest.Mock;

describe("Settings", () => {
  it("should render correctly", () => {
    mockedUseQuizContext.mockReturnValue({
      showResults: false,
      quizInProgress: false,
      setQuizInProgress: jest.fn(),
      setQuizLength: jest.fn(),
    });

    const { container } = render(<Settings />);
    expect(container).toMatchSnapshot();
  });
});
