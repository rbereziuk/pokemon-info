export interface PokemonList {
  count: number;
  results: Array<{
    id: number;
    name: string;
    url: string;
  }>;
}
