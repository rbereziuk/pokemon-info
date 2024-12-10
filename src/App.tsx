import { useEffect, useState } from 'react';
import { Pokemon } from './components/Pokemon';

function App() {
  const [pokemons, setPokemons] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const [pokemon, setPokemon] = useState(null);

  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon/')
      .then((response) => response.json())
      .then((res) => {
        setIsLoading(false);
        return setPokemons(res.results);
      });
  }, []);

  const getPokemonInfo = (name) => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
      .then((response) => response.json())
      .then((res) => setPokemon(res));
  };

  return (
    <div>
      <h1 className="text-3xl">Pokemon Info</h1>
      <main style={{ display: 'flex' }}>
        <ul>
          {isLoading
            ? null
            : pokemons.map((pokemon) => {
                return (
                  <li>
                    <button onClick={() => getPokemonInfo(pokemon.name)}>
                      {pokemon.name}
                    </button>
                  </li>
                );
              })}
        </ul>

        <div>{!pokemon ? null : <Pokemon pokemon={pokemon} />}</div>
      </main>
      <div>
        {!pokemon ? null : <pre>{JSON.stringify(pokemon, null, 4)}</pre>}
      </div>
    </div>
  );
}

export default App;
