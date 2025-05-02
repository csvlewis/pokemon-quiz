import { Question } from "@/types/Question";
import { Option } from "@/types/Option";
import { capitalize } from "@/utils/capitalize";
import { randomizeArray } from "@/utils/randomizeArray";
import { pokemonNames } from "@/features/questions/assets/pokemonNames";
import { PokemonData } from "@/features/questions/types/PokemonData";
import { filterAndRandomSelect } from "@/features/questions/utils/filterAndRandomSelect";

export const nameThatPokemonQuestion = (pokemonData: PokemonData): Question => {
  const name: string = capitalize(pokemonData.name);
  const imageUrl: string = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemonData.id}.png`;

  const otherNames: string[] = filterAndRandomSelect(pokemonNames, [name], 3);

  const wrongOptions: Option[] = otherNames.map((name) => ({
    text: name,
    isCorrect: false,
  }));

  const options: Option[] = randomizeArray([
    { text: name, isCorrect: true },
    ...wrongOptions,
  ]);

  return {
    imageUrl,
    text: `What is the name of the following Pokémon?`,
    options,
  };
};
