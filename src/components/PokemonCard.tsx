import { usePokemonDetailQuery } from '../api/pokemonApi';
import { shuffle } from '../utils/shuffle';
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

  const stats = shuffle(pokemon.stats).slice(1, 5);

  return (
    <article className="bg-sky-400 rounded-3xl w-[400px] h-[600px] p-3 shadow-2xl absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
      <h2 className="text-center text-2xl capitalize font-bold mb-5">
        {pokemon.name}
      </h2>
      <img
        className="w-full h-[200px]"
        src={pokemon.sprites.other.dream_world.front_default}
      />

      <h3 className="text-center my-4 font-bold">Abilities</h3>
      <ul>
        {pokemon.abilities.map(({ ability }) => (
          <AbilityItem name={ability.name} key={ability.name} />
        ))}
      </ul>

      <h3 className="text-center my-4 font-bold">Characteristics</h3>
      <ul>
        {stats.map((stat) => (
          <li key={stat.stat.name}>
            <span className="capitalize">{stat.stat.name}</span> —{' '}
            {stat.base_stat}
          </li>
        ))}
      </ul>
    </article>
  );
};
