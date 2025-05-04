import React from "react";
import { QuizContextProvider } from "./QuizContextProvider";
import { render } from "@testing-library/react";

describe("QuizContextProvider", () => {
  it("should render children correctly", () => {
    const { container } = render(
      <QuizContextProvider>
        <div>Test</div>
      </QuizContextProvider>
    );

    expect(container).toMatchSnapshot();
  });
});
