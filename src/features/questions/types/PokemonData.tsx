export type PokemonData = {
  id: number;
  name: string;
  types: Array<{
    slot: number;
    type: { name: string; url: string };
  }>;
};
