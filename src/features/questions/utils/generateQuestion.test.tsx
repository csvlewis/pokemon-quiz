import { generateQuestion } from "./generateQuestion";
import { Question } from "@/types/Question";

describe("generateQuestion", () => {
  it("should return a Question when given Pokemon data", () => {
    const pokemonData = {
      id: 1,
      name: "bulbasaur",
      types: [{ type: { name: "grass" } }, { type: { name: "poison" } }],
      abilities: [
        { ability: { name: "overgrow" } },
        { ability: { name: "chlorophyll" } },
      ],
    };

    const question: Question = generateQuestion(pokemonData);

    expect(question).toHaveProperty("text");
    expect(question).toHaveProperty("imageUrl");
    expect(question).toHaveProperty("options");
    expect(question.options.length).toEqual(4);
  });
});
