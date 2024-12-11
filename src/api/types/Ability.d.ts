interface Ability {
  id: number;
  name: string;
  names: {
    language: {
      /**
       * Language code with two letters
       */
      name: string;
      url: string;
    };
    name: string;
  }[];
}
