import { PokemonData } from "@/types/PokemonData";
import { Question } from "@/types/Question";

export type QuestionCategory = {
  name: string;
  description: string;
  generateQuestion: (pokemonData: PokemonData) => Question;
};
