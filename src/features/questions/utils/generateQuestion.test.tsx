import { generateQuestion } from "./generateQuestion";
import { Question } from "@/types/Question";
import { PokemonData } from "@/features/questions/types/PokemonData";

describe("generateQuestion", () => {
  it("should return a Question when given Pokemon data", () => {
    const pokemonData: PokemonData = {
      id: 1,
      name: "bulbasaur",
      moves: [{ move: { name: "tackle" } }, { move: { name: "vine-whip" } }],
      abilities: [
        { ability: { name: "overgrow" } },
        { ability: { name: "chlorophyll" } },
      ],
      types: [{ type: { name: "grass" } }, { type: { name: "poison" } }],
    };

    const question: Question = generateQuestion(pokemonData);

    expect(question).toHaveProperty("text");
    expect(question).toHaveProperty("imageUrl");
    expect(question).toHaveProperty("options");
    expect(question.options.length).toEqual(4);
  });
});
