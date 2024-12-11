import { useState } from 'react';
import { PokemonCard } from './components/PokemonCard';
import { ListItem } from './components/ListItem';
import { usePokemonListQuery } from './api/pokemonApi';

function App() {
  const { data, isLoading, isError, isUninitialized } = usePokemonListQuery();
  const [selectedPokemon, setSelectedPokemon] = useState<string | undefined>(
    undefined
  );

  if (isUninitialized || isLoading) return 'Loading...';
  if (isError) return 'Something went wrong...';

  return (
    <div>
      <h1 className="text-3xl text-center my-5">Pokemon Info</h1>
      <main className="flex">
        <nav className="w-1/6 p-4">
          <ul>
            {data.results.map((pokemon) => {
              return (
                <ListItem
                  title={pokemon.name}
                  onClick={() => setSelectedPokemon(pokemon.name)}
                  key={pokemon.id}
                />
              );
            })}
          </ul>
        </nav>

        <section className="flex flex-1 justify-center items-center">
          <PokemonCard pokemonName={selectedPokemon} />
        </section>
      </main>
    </div>
  );
}

export default App;
