import { usePokemonDetailQuery } from '../api/pokemonApi';
import { AbilityItem } from './AbilityItem';

interface Props {
  pokemonName: string | undefined;
}

export const PokemonCard: React.FC<Props> = ({ pokemonName }) => {
  const {
    data: pokemon,
    isLoading,
    isUninitialized,
    isError,
  } = usePokemonDetailQuery({
    name: pokemonName,
  });

  if (!pokemonName) return 'Pick a pokemon';
  if (isUninitialized || isLoading) return 'Loading...';
  if (isError) {
    return 'Something went wrong...';
  }

  return (
    <article className="bg-sky-400 rounded-3xl w-[400px] h-[650px] p-3">
      <h2 className="text-center text-2xl capitalize font-bold mb-5">
        {pokemon.name}
      </h2>
      <img
        className="w-full h-[200px]"
        src={pokemon.sprites.other.dream_world.front_default}
      />

      <h3 className="text-center my-4 font-bold">Abilities</h3>
      <ul>
        {pokemon.abilities.map((ability) => (
          <AbilityItem name={ability.ability.name} />
        ))}
      </ul>

      <h3 className="text-center my-4 font-bold">Characteristics</h3>
      <ul>
        {pokemon.stats.map((stat) => (
          <li>
            <span className="capitalize">{stat.stat.name}</span> —{' '}
            {stat.base_stat}
          </li>
        ))}
      </ul>
    </article>
  );
};
