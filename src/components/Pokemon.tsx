interface Props {
  pokemon: any;
}

export const Pokemon: React.FC<Props> = ({ pokemon }) => {
  console.log('🔮', pokemon);
  return (
    <>
      <div>{pokemon.name}</div>
      <img src={pokemon.sprites.other.dream_world.front_default} />

      <h2>Abilities</h2>
      <ul>
        {pokemon.abilities.map((ability) => (
          <li>{ability.ability.name}</li>
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
    </>
  );
};
