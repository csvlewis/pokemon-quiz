import { Question } from "@/types/Question";
import { PokemonData } from "@/types/PokemonData";
import { questionTypes } from "@/config/questionTypes";
import { randomizeArray } from "@/utils/randomizeArray";

export const generateQuestion = (
  pokemonData: PokemonData,
  selectedQuestionTypes: string[]
): Question => {
  const filteredQuestionTypes: {
    name: string;
    description: string;
    function: (pokemonData: PokemonData) => Question;
  }[] = questionTypes.filter((questionType) =>
    selectedQuestionTypes.includes(questionType.name)
  );

  if (filteredQuestionTypes.length === 0) return {} as Question;

  const question: Question = randomizeArray(filteredQuestionTypes)[0].function(
    pokemonData
  );

  return question;
};
