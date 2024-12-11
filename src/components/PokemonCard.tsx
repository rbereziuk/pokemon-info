import { AbilityItem } from './AbilityItem';

interface Props {
  pokemon: any;
}

export const PokemonCard: React.FC<Props> = ({ pokemon }) => {
  return (
    <article className="bg-sky-400 rounded-3xl w-1/4 h-3/5">
      <h2 className="">{pokemon.name}</h2>
      <img src={pokemon.sprites.other.dream_world.front_default} />

      <h2>Abilities</h2>
      <ul>
        {pokemon.abilities.map((ability) => (
          <AbilityItem name={ability.ability.name} />
        ))}
      </ul>

      <h2>Characteristics</h2>
      <ul>
        {pokemon.stats.map((stat) => (
          <li>
            {stat.stat.name} — {stat.base_stat}
          </li>
        ))}
      </ul>
    </article>
  );
};
