import { capitalize } from "./capitalize";

describe("capitalize", () => {
  it("should return a capitalized string", () => {
    const input = "hello world";
    const expectedOutput = "Hello world";

    expect(capitalize(input)).toBe(expectedOutput);
  });
});
