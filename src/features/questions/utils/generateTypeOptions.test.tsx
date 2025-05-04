import { generateTypeOptions } from "./generateTypeOptions";
import { Option } from "@/types/Option";

describe("generateTypeOptions", () => {
  it("should generate type options with correct and incorrect values", () => {
    const correctType = ["Flying"];
    const incorrectTypes = ["Grass", "Steel", "Psychic"];
    const types: Option[] = generateTypeOptions(correctType, incorrectTypes);

    expect(types.length).toBe(4);
    expect(types.some((t) => t.text === "Flying" && t.isCorrect === true)).toBe(
      true
    );
    incorrectTypes.forEach((type) => {
      expect(types.some((t) => t.text === type && t.isCorrect === false)).toBe(
        true
      );
    });
  });
});
