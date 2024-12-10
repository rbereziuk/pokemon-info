import { useEffect, useState } from "react";

function App() {
  const [pokemons, setPokemons] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const [pokemon, setPokemon] = useState(null);

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon/")
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
      <h1>Pokemon Info</h1>
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

      <div>
        {!pokemon ? null : <pre>{JSON.stringify(pokemon, null, 4)}</pre>}
      </div>
    </div>
  );
}

export default App;
