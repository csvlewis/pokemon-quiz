import Pokedex from "pokedex-promise-v2";
import { Question } from "@/types/Question";
import { PokemonData } from "@/features/questions/types/PokemonData";
import { generateResourceUrls } from "@/features/questions/utils/generateResourceUrls";
import { generateQuestion } from "@/features/questions/utils/generateQuestion";

const P = new Pokedex();

export const fetchPokemonData = (quizLength: number): Promise<Question[]> => {
  const resourceUrls: string[] = generateResourceUrls(quizLength);
  return P.getResource(resourceUrls)
    .then((pokemonData) => {
      return pokemonData.map((data: PokemonData) => {
        return generateQuestion(data);
      });
    })
    .catch((error) => {
      return error;
    });
};
