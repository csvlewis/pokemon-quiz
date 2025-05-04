import { Question } from "@/types/Question";
import { PokemonData } from "@/types/PokemonData";
import { nameThatPokemonQuestion } from "@/features/questions/question-types/nameThatPokemonQuestion";
import { pokemonAbilityQuestion } from "@/features/questions/question-types/pokemonAbilityQuestion";
import { pokemonMoveQuestion } from "@/features/questions/question-types/pokemonMoveQuestion";
import { pokemonTypeQuestion } from "@/features/questions/question-types/pokemonTypeQuestion";

export const questionTypes: {
  name: string;
  description: string;
  function: (pokemonData: PokemonData) => Question;
}[] = [
  {
    name: "Name That Pokémon",
    description: "Identify the Pokémon from its image",
    function: nameThatPokemonQuestion,
  },
  {
    name: "Pokémon Ability",
    description: "Choose the correct ability for the Pokémon",
    function: pokemonAbilityQuestion,
  },
  {
    name: "Pokémon Move",
    description: "Identify the move that the Pokémon can learn",
    function: pokemonMoveQuestion,
  },
  {
    name: "Pokémon Type",
    description: "Choose the correct type for the Pokémon",
    function: pokemonTypeQuestion,
  },
];
