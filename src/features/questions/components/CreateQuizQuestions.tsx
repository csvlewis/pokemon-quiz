import Pokedex from "pokedex-promise-v2";
const P = new Pokedex();

const pokemonTypes: string[] = [
  "Normal",
  "Fighting",
  "Flying",
  "Poison",
  "Ground",
  "Rock",
  "Bug",
  "Ghost",
  "Steel",
  "Fire",
  "Water",
  "Grass",
  "Electric",
  "Psychic",
  "Ice",
  "Dragon",
  "Dark",
  "Fairy",
];

type PokemonData = {
  id: number;
  name: string;
  types: Array<{
    slot: number;
    type: { name: string; url: string };
  }>;
};

export type Option = {
  text?: string;
  isCorrect?: boolean;
};

const Capitalize = (str: string) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};

const GenerateResourceUrls = (number: number) => {
  const urls: string[] = [];
  for (let i = 1; i <= number; i++) {
    const id: number = Math.floor(Math.random() * 1025 + 1);
    urls.push(`/api/v2/pokemon/${id}`);
  }
  return urls;
};

const CreateQuizQuestions = (quizLength: number) => {
  const resourceUrls: string[] = GenerateResourceUrls(quizLength);
  return P.getResource(resourceUrls)
    .then((pokemonData) => {
      return pokemonData.map((data: PokemonData) => {
        return GenerateQuestion(data);
      });
    })
    .catch((error) => {
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
    const wrongOptions = randomTypes.map((type: string) => {
      return { text: type, isCorrect: false };
    });
    // if the pokemon has only one type
    return {
      imageUrl,
      question: `${name} has which type?`,
      options: [
        ...wrongOptions,
        { text: selectedPokemonTypes, isCorrect: true },
      ].sort(() => 0.5 - Math.random()),
      answer: selectedPokemonTypes,
    };
  } else {
    // if the pokemon has two types
    const answer: string = selectedPokemonTypes.join(" and ");
    const options: Option[] = randomTypes.map((type: string) => {
      // make options more difficult by randomly mixing types and order
      if (Math.random() < 0.5) {
        return {
          text:
            Capitalize(type) +
            " and " +
            Capitalize(selectedPokemonTypes[Math.round(Math.random())]),
          isCorrect: false,
        };
      } else {
        return {
          text:
            Capitalize(selectedPokemonTypes[Math.round(Math.random())]) +
            " and " +
            Capitalize(type),
          isCorrect: false,
        };
      }
    });
    return {
      imageUrl,
      question: `${name} has which types?`,
      options: [{ text: answer, isCorrect: true }, ...options].sort(
        () => 0.5 - Math.random()
      ),
    };
  }
};

export default CreateQuizQuestions;
