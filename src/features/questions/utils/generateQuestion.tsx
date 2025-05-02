import { Question } from "@/types/Question";
import { PokemonData } from "@/features/questions/types/PokemonData";

import { nameThatPokemonQuestion } from "@/features/questions/question-types/nameThatPokemonQuestion";
import { pokemonTypeQuestion } from "@/features/questions/question-types/pokemonTypeQuestion";

export const generateQuestion = (pokemonData: PokemonData): Question => {
  const questionTypes: ((pokemonData: PokemonData) => Question)[] = [
    nameThatPokemonQuestion,
    pokemonTypeQuestion,
  ];

  const randomQuestionType: (pokemonData: PokemonData) => Question =
    questionTypes[Math.floor(Math.random() * questionTypes.length)];

  return randomQuestionType(pokemonData);
};
