export interface Pokemon {
  id: number;
  name: string;
  abilities: {
    ability: {
      name: string;
      url: string;
    };
  }[];
  sprites: {
    other: {
      dream_world: {
        front_default: string;
      }
    }
  };
  stats: Array<{
    base_stat: number;
    stat: {
      name: string
    }
  }>
}
