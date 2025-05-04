import { Option } from "@/types/Option";
import { PokemonData } from "@/types/PokemonData";
import { Question } from "@/types/Question";
import { pokemonTypeQuestion } from "./pokemonTypeQuestion";

describe("Pokemon type question", () => {
  it("should return a pokemon type question", () => {
    const pokemonData: PokemonData = {
      id: 1,
      name: "bulbasaur",
      abilities: [],
      moves: [],
      types: [{ type: { name: "grass" } }, { type: { name: "poison" } }],
    };

    const question: Question = pokemonTypeQuestion(pokemonData);

    expect(question.text).toBe("Bulbasaur has which types?");
    expect(question.imageUrl).toBe(
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png"
    );
    expect(question.options.length).toBe(4);
    expect(
      question.options.some(
        (option: Option) =>
          option.isCorrect === true && option.text === "Grass and Poison"
      )
    ).toBe(true);
  });
});
