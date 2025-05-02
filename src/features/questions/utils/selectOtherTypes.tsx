import { pokemonTypes } from "@/features/questions/assets/pokemonTypes";

export const selectOtherTypes = (
  selectedPokemonTypes: string[],
  number: number
): string[] => {
  return pokemonTypes
    .filter((type) => !selectedPokemonTypes.includes(type))
    .sort(() => 0.5 - Math.random())
    .slice(0, number);
};
