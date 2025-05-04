import { capitalize } from "./capitalize";

describe("capitalize", () => {
  it("should return a string with each word capitalized", () => {
    const input = "hello world";
    const expectedOutput = "Hello World";

    expect(capitalize(input)).toBe(expectedOutput);
  });
});
