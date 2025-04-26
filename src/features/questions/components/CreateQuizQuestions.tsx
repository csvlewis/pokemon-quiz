import Pokedex from "pokedex-promise-v2";
const P = new Pokedex();

const pokemonTypes: string[] = [
  "normal",
  "fighting",
  "flying",
  "poison",
  "ground",
  "rock",
  "bug",
  "ghost",
  "steel",
  "fire",
  "water",
  "grass",
  "electric",
  "psychic",
  "ice",
  "dragon",
  "dark",
  "fairy",
];

type PokemonData = {
  id: number;
  name: string;
  types: Array<{
    slot: number;
    type: { name: string; url: string };
  }>;
};

const Capitalize = (str: string) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};

const CreateQuizQuestions = (pokemon: string | number) => {
  const resourceUrl = "/api/v2/pokemon/" + pokemon;

  return P.getResource(resourceUrl)
    .then((pokemonData) => {
      console.log("pokemonData", pokemonData);
      return GenerateQuestion(pokemonData);
    })
    .catch((error) => {
      console.log("There was an ERROR: ", error);
      return error;
    });
};

const GenerateQuestion = (pokemonData: PokemonData) => {
  const selectedPokemonTypes: string[] = pokemonData.types.map(
    (type: { slot: number; type: { name: string; url: string } }) =>
      Capitalize(type.type.name)
  );

  // unit test this
  const randomTypes: string[] = pokemonTypes
    .filter((type) => !selectedPokemonTypes.includes(type))
    .sort(() => 0.5 - Math.random())
    .slice(0, 3);

  const name: string = Capitalize(pokemonData.name);
  const imageUrl: string = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemonData.id}.png`;

  if (selectedPokemonTypes.length === 1) {
    // if the pokemon has only one type
    return {
      name,
      imageUrl,
      question: `${name} has which type?`,
      options: [...randomTypes, ...selectedPokemonTypes].sort(
        () => 0.5 - Math.random()
      ),
      answer: selectedPokemonTypes,
    };
  } else {
    // if the pokemon has two types
    const answer: string = selectedPokemonTypes.join(" and ");
    const options: string[] = randomTypes.map((type: string) => {
      // make options more difficult by randomly mixing types and order
      if (Math.random() < 0.5) {
        return (
          Capitalize(type) +
          " and " +
          Capitalize(selectedPokemonTypes[Math.round(Math.random())])
        );
      } else {
        return (
          Capitalize(selectedPokemonTypes[Math.round(Math.random())]) +
          " and " +
          Capitalize(type)
        );
      }
    });
    return {
      name,
      imageUrl,
      question: `${name} has which types?`,
      options: [answer, ...options].sort(() => 0.5 - Math.random()),
      answer,
    };
  }
};

export default CreateQuizQuestions;
