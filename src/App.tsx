import { useState } from 'react';
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

  const onDragEnd = () => {
    // Persist draggable to state
  };

  return (
    <div>
      <h1 className="text-3xl text-center mt-10 mb-14">Pokemon Info</h1>
      <main>
        <nav className="w-1/6 p-4">
          <DragDropContext onDragEnd={onDragEnd}>
            <Droppable droppableId="pokemon-list">
              {(provided) => (
                <ul ref={provided.innerRef} {...provided.droppableProps}>
                  {data.results.map((pokemon, index) => {
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
          </DragDropContext>
        </nav>
        <section>
          <PokemonCard pokemonName={selectedPokemon} />
        </section>
      </main>
    </div>
  );
}

export default App;
