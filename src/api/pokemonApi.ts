import { createApi } from '@reduxjs/toolkit/query/react';
import { Pokemon } from './types/Pokemon';
import { PokemonList } from './types/PokemonList';

export const api = createApi({
  baseQuery: async (url) => {
    const result = await fetch(url);
    if (result.ok) {
      const data = await result.json();
      return { data };
    } else {
      return { error: 'Something went wrong...' };
    }
  },
  endpoints: (build) => ({
    pokemonList: build.query<PokemonList, void>({
      query() {
        return 'https://pokeapi.co/api/v2/pokemon/?limit=10';
      },
    }),
    pokemonDetail: build.query<Pokemon, { name: string | undefined }>({
      query({ name }) {
        return `https://pokeapi.co/api/v2/pokemon/${name}`;
      },
    }),
    pokemonAbility: build.query<Ability, {name: string}>({
      query({name}) {
        return `https://pokeapi.co/api/v2/ability/${name}`
      }
    })
  }),
});

export const { usePokemonListQuery, usePokemonDetailQuery, usePokemonAbilityQuery } = api;
