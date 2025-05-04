import { generateQuestion } from "./generateQuestion";
import { Option } from "@/types/Option";
import { Question } from "@/types/Question";
import { PokemonData } from "@/types/PokemonData";

describe("generateQuestion", () => {
  it("should return a Question with the given pokemon and question type", () => {
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

    const question1: Question = generateQuestion(pokemonData, [
      "Name That Pokémon",
    ]);

    expect(question1.text).toEqual(
      "What is the name of the following Pokémon?"
    );
    expect(question1.options.length).toEqual(4);
    expect(
      question1.options.some(
        (option: Option) =>
          option.text === "Bulbasaur" && option.isCorrect === true
      )
    ).toBe(true);

    const question2: Question = generateQuestion(pokemonData, ["Pokémon Move"]);

    expect(question2.text).toEqual(
      "Which of the following moves can Bulbasaur learn?"
    );
    expect(question2.options.length).toEqual(4);
    expect(
      question2.options.some(
        (option: Option) =>
          (option.text === "Tackle" || option.text === "Vine Whip") &&
          option.isCorrect === true
      )
    ).toBe(true);

    const question3: Question = generateQuestion(pokemonData, [
      "Pokémon Ability",
    ]);

    expect(question3.text).toEqual(
      "Which of the following abilities does Bulbasaur have?"
    );
    expect(question3.options.length).toEqual(4);
    expect(
      question3.options.some(
        (option: Option) =>
          (option.text === "Overgrow" || option.text === "Chlorophyll") &&
          option.isCorrect === true
      )
    ).toBe(true);

    const question4: Question = generateQuestion(pokemonData, ["Pokémon Type"]);

    expect(question4.text).toEqual("Bulbasaur has which types?");
    expect(question4.options.length).toEqual(4);
    expect(
      question4.options.some(
        (option: Option) =>
          option.text === "Grass and Poison" && option.isCorrect === true
      )
    ).toBe(true);
  });
});
