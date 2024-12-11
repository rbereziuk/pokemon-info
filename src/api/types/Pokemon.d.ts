export interface Pokemon {
  id: number;
  name: string;
  abilities: {
    ability: {
      name: string;
      url: string;
    };
  }[];
}
