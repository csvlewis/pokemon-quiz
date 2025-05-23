import { Option } from "@/types/Option";
import { PokemonData } from "@/types/PokemonData";
import { Question } from "@/types/Question";
import { nameThatPokemonQuestion } from "./nameThatPokemonQuestion";

describe("Name that pokemon question", () => {
  it("should return a name that pokemon question", () => {
    const pokemonData: PokemonData = {
      id: 1,
      name: "bulbasaur",
      abilities: [],
      moves: [],
      types: [],
    };

    const question: Question = nameThatPokemonQuestion(pokemonData);

    expect(question.text).toBe("What is the name of the following Pokémon?");
    expect(question.imageUrl).toBe(
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png"
    );
    expect(question.options.length).toBe(4);
    expect(
      question.options.some(
        (option: Option) =>
          option.isCorrect === true && option.text === "Bulbasaur"
      )
    ).toBe(true);
  });
});
