export type PokemonData = {
  id: number;
  name: string;
  abilities: Array<{
    ability: { name: string };
  }>;
  moves: Array<{
    move: { name: string };
  }>;
  types: Array<{
    type: { name: string };
  }>;
};
