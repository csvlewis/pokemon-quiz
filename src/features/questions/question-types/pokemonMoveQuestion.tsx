import { Question } from "@/types/Question";
import { Option } from "@/types/Option";
import { capitalize } from "@/utils/capitalize";
import { pokemonMoves } from "@/features/questions/assets/pokemonMoves";
import { PokemonData } from "@/features/questions/types/PokemonData";
import { filterAndRandomSelect } from "@/features/questions/utils/filterAndRandomSelect";
import { randomizeArray } from "@/utils/randomizeArray";

export const pokemonMoveQuestion = (pokemonData: PokemonData): Question => {
  const name: string = capitalize(pokemonData.name);
  const imageUrl: string = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemonData.id}.png`;

  const selectedMoves: string[] = pokemonData.moves.map(
    (move: { move: { name: string } }) =>
      capitalize(move.move.name.replace(/-/g, " "))
  );

  const chosenMove: string = randomizeArray(selectedMoves)[0];

  const otherMoves: string[] = filterAndRandomSelect({
    dataArray: pokemonMoves,
    selectedData: selectedMoves,
    amount: 3,
  });

  const wrongOptions: Option[] = otherMoves.map((move) => ({
    text: move,
    isCorrect: false,
  }));

  const options: Option[] = randomizeArray([
    { text: chosenMove, isCorrect: true },
    ...wrongOptions,
  ]);

  return {
    imageUrl,
    text: `Which of the following moves can ${name} learn?`,
    options,
  };
};
