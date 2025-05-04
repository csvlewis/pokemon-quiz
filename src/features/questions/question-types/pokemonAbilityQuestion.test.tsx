import { Option } from "@/types/Option";
import { PokemonData } from "@/features/questions/types/PokemonData";
import { Question } from "@/types/Question";
import { pokemonAbilityQuestion } from "./pokemonAbilityQuestion";

describe("Pokemon ability question", () => {
  it("should return a pokemon ability question", () => {
    const pokemonData: PokemonData = {
      id: 1,
      name: "bulbasaur",
      types: [],
      abilities: [
        { ability: { name: "overgrow" } },
        { ability: { name: "chlorophyll" } },
      ],
    };

    const question: Question = pokemonAbilityQuestion(pokemonData);

    expect(question.text).toBe(
      "Which of the following abilities does Bulbasaur have?"
    );
    expect(question.imageUrl).toBe(
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png"
    );
    expect(question.options.length).toBe(4);
    expect(
      question.options.some(
        (option: Option) =>
          option.isCorrect === true &&
          (option.text === "Overgrow" || option.text === "Chlorophyll")
      )
    ).toBe(true);
  });
});
