export type PokemonData = {
  id: number;
  name: string;
  types: Array<{
    type: { name: string };
  }>;
  abilities: Array<{
    ability: { name: string };
  }>;
};
