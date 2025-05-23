import { Question } from "@/types/Question";
import { Option } from "@/types/Option";
import { capitalize } from "@/utils/capitalize";
import { pokemonTypes } from "@/features/questions/assets/pokemonTypes";
import { PokemonData } from "@/types/PokemonData";
import { filterAndRandomSelect } from "@/features/questions/utils/filterAndRandomSelect";
import { generateTypeOptions } from "@/features/questions/utils/generateTypeOptions";

export const pokemonTypeQuestion = (pokemonData: PokemonData): Question => {
  const name: string = capitalize(pokemonData.name);
  const imageUrl: string = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemonData.id}.png`;

  const selectedTypes: string[] = pokemonData.types.map(
    (type: { type: { name: string } }) => capitalize(type.type.name)
  );

  const text: string =
    selectedTypes.length === 1
      ? `${name} has which type?`
      : `${name} has which types?`;

  const otherTypes: string[] = filterAndRandomSelect({
    dataArray: pokemonTypes,
    selectedData: selectedTypes,
    amount: 3,
  });

  const options: Option[] = generateTypeOptions(selectedTypes, otherTypes);

  return {
    imageUrl,
    text,
    options,
  };
};
