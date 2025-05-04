import { Question } from "@/types/Question";
import { Option } from "@/types/Option";
import { capitalize } from "@/utils/capitalize";
import { pokemonAbilities } from "@/features/questions/assets/pokemonAbilities";
import { PokemonData } from "@/features/questions/types/PokemonData";
import { filterAndRandomSelect } from "@/features/questions/utils/filterAndRandomSelect";
import { randomizeArray } from "@/utils/randomizeArray";

export const pokemonAbilityQuestion = (pokemonData: PokemonData): Question => {
  const name: string = capitalize(pokemonData.name);
  const imageUrl: string = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemonData.id}.png`;

  const selectedAbilities: string[] = pokemonData.abilities.map(
    (ability: { ability: { name: string } }) => capitalize(ability.ability.name)
  );

  const chosenAbility: string = randomizeArray(selectedAbilities)[0];

  const otherAbilities: string[] = filterAndRandomSelect({
    dataArray: pokemonAbilities,
    selectedData: selectedAbilities,
    amount: 3,
  });

  const wrongOptions: Option[] = otherAbilities.map((ability) => ({
    text: ability,
    isCorrect: false,
  }));

  const options: Option[] = randomizeArray([
    { text: chosenAbility, isCorrect: true },
    ...wrongOptions,
  ]);

  return {
    imageUrl,
    text: `Which of the following abilities does ${name} have?`,
    options,
  };
};
