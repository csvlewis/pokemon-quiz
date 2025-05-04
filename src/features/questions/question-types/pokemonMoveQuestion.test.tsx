import { Option } from "@/types/Option";
import { PokemonData } from "@/types/PokemonData";
import { Question } from "@/types/Question";
import { pokemonMoveQuestion } from "./pokemonMoveQuestion";

describe("Pokemon move question", () => {
  it("should return a pokemon move question", () => {
    const pokemonData: PokemonData = {
      id: 1,
      name: "bulbasaur",
      abilities: [],
      moves: [{ move: { name: "tackle" } }, { move: { name: "vine-whip" } }],
      types: [],
    };

    const question: Question = pokemonMoveQuestion(pokemonData);

    expect(question.text).toBe(
      "Which of the following moves can Bulbasaur learn?"
    );
    expect(question.imageUrl).toBe(
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png"
    );
    expect(question.options.length).toBe(4);
    expect(
      question.options.some(
        (option: Option) =>
          option.isCorrect === true &&
          (option.text === "Tackle" || option.text === "Vine Whip")
      )
    ).toBe(true);
  });
});
