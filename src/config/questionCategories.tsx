import { QuestionCategory } from "@/types/QuestionCategory";
import { nameThatPokemonQuestion } from "@/features/questions/question-types/nameThatPokemonQuestion";
import { pokemonAbilityQuestion } from "@/features/questions/question-types/pokemonAbilityQuestion";
import { pokemonMoveQuestion } from "@/features/questions/question-types/pokemonMoveQuestion";
import { pokemonTypeQuestion } from "@/features/questions/question-types/pokemonTypeQuestion";

export const questionCategories: QuestionCategory[] = [
  {
    name: "Name That Pokémon",
    description: "Identify the Pokémon from its image",
    generateQuestion: nameThatPokemonQuestion,
  },
  {
    name: "Pokémon Ability",
    description: "Choose the correct ability for the Pokémon",
    generateQuestion: pokemonAbilityQuestion,
  },
  {
    name: "Pokémon Move",
    description: "Identify the move that the Pokémon can learn",
    generateQuestion: pokemonMoveQuestion,
  },
  {
    name: "Pokémon Type",
    description: "Choose the correct type for the Pokémon",
    generateQuestion: pokemonTypeQuestion,
  },
];
