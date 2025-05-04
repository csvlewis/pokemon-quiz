import Pokedex from "pokedex-promise-v2";

import { PokemonData } from "@/types/PokemonData";
import { generateResourceUrls } from "@/features/questions/utils/generateResourceUrls";

const P = new Pokedex();

export const fetchPokemonData = (
  quizLength: number
): Promise<PokemonData[]> => {
  const resourceUrls: string[] = generateResourceUrls(quizLength);
  return P.getResource(resourceUrls)
    .then((pokemonData) => {
      return pokemonData;
    })
    .catch((error) => {
      return error;
    });
};
