import { Question } from "@/types/Question";
import { Option } from "@/types/Option";
import { capitalize } from "@/features/questions/utils/capitalize";
import { PokemonData } from "@/features/questions/types/PokemonData";
import { selectOtherTypes } from "@/features/questions/utils/selectOtherTypes";
import { generateTypeOptions } from "@/features/questions/utils/generateTypeOptions";

export const pokemonTypeQuestion = (pokemonData: PokemonData): Question => {
  const name: string = capitalize(pokemonData.name);
  const imageUrl: string = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemonData.id}.png`;
  const selectedTypes: string[] = pokemonData.types.map(
    (type: { slot: number; type: { name: string; url: string } }) =>
      capitalize(type.type.name)
  );
  const otherTypes: string[] = selectOtherTypes(selectedTypes, 3);

  const options: Option[] = generateTypeOptions(selectedTypes, otherTypes);

  return {
    imageUrl,
    text: `${name} has which types?`,
    options,
  };
};
