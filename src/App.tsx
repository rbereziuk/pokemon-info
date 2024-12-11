import { useEffect, useState } from 'react';
import { PokemonCard } from './components/PokemonCard';
import { ListItem } from './components/ListItem';
import { Pokemon } from './api/types/Pokemon';

function App() {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);
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

  const getPokemonInfo = (name: string) => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
      .then((response) => response.json())
      .then((res) => setPokemon(res));
  };

  return (
    <div>
      <h1 className="text-3xl">Pokemon Info</h1>
      <main style={{ display: 'flex' }}>
        <nav className="w-1/6 p-4">
          <ul>
            {isLoading
              ? null
              : pokemons.map((pokemon) => {
                  return (
                    <ListItem
                      title={pokemon.name}
                      onClick={() => getPokemonInfo(pokemon.name)}
                    />
                  );
                })}
          </ul>
        </nav>

        <section className="flex flex-1 justify-center items-center">
          {!pokemon ? null : <PokemonCard pokemon={pokemon} />}
        </section>
      </main>
      <div>
        {!pokemon ? null : <pre>{JSON.stringify(pokemon, null, 4)}</pre>}
      </div>
    </div>
  );
}

export default App;
