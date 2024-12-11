import { useEffect, useState } from 'react';
import { PokemonCard } from './components/PokemonCard';
import { ListItem } from './components/ListItem';
import { usePokemonListQuery } from './api/pokemonApi';
import { DragDropContext, Droppable } from '@hello-pangea/dnd';

function App() {
  const { data, isLoading, isError, isUninitialized } = usePokemonListQuery();
  const [selectedPokemon, setSelectedPokemon] = useState<string | undefined>(
    undefined
  );

  if (isUninitialized || isLoading) return 'Loading...';
  if (isError) return 'Something went wrong...';

  const onDragEnd = () => {};

  return (
    <div>
      <h1 className="text-3xl text-center my-5">Pokemon Info</h1>
      <main className="flex">
        <DragDropContext onDragEnd={onDragEnd}>
          <nav className="w-1/6 p-4">
            <Droppable droppableId="pokemon-list">
              {(provided) => (
                <ul ref={provided.innerRef} {...provided.droppableProps}>
                  {data.results.map((pokemon, index) => {
                    console.log(pokemon);
                    return (
                      <ListItem
                        title={pokemon.name}
                        onClick={() => setSelectedPokemon(pokemon.name)}
                        key={pokemon.name}
                        id={pokemon.name}
                        index={index}
                      />
                    );
                  })}
                  {provided.placeholder}
                </ul>
              )}
            </Droppable>
          </nav>
        </DragDropContext>

        <section className="flex flex-1 justify-center items-center">
          <PokemonCard pokemonName={selectedPokemon} />
        </section>
      </main>
    </div>
  );
}

export default App;
