import { createApi } from '@reduxjs/toolkit/query/react';

export const api = createApi({
  baseQuery: () => {},
  endpoints: (build) => ({
    pokemonList: build.query({
      async queryFn() {
        const result = await fetch('https://pokeapi.co/api/v2/pokemon');
        if (result.ok) {
          const data = await result.json();
          return { data };
        } else {
          return { error: 'Something went wrong...' };
        }
      },
    }),
    pokemonDetail: build.query({
      async queryFn({ name }) {
        if (!name) return;

        const result = await fetch(
          `https://pokeapi.co/api/v2/pokemon/${name}/`,
        );
        if (result.ok) {
          const data = await result.json();
          return { data };
        } else {
          return { error: 'Something went wrong...' };
        }
      },
    }),
  }),
});

export const { usePokemonListQuery, usePokemonDetailQuery } = api;
