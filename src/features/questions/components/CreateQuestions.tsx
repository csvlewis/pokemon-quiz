import Pokedex from "pokedex-promise-v2";
import { Question } from "@/types/Question";
import { PokemonData } from "@/features/questions/types/PokemonData";
import { generateResourceUrls } from "@/features/questions/utils/generateResourceUrls";
import { GenerateQuestion } from "@/features/questions/components/GenerateQuestion";

const P = new Pokedex();

export const CreateQuestions = (quizLength: number): Promise<Question[]> => {
  const resourceUrls: string[] = generateResourceUrls(quizLength);
  return P.getResource(resourceUrls)
    .then((pokemonData) => {
      return pokemonData.map((data: PokemonData) => {
        return GenerateQuestion(data);
      });
    })
    .catch((error) => {
      return error;
    });
};
