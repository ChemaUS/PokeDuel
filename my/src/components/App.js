import React, { useState, useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import Header from "./Header";

import PokemonPage from "./PokemonPage";

function App() {
  const [pokemons, setPokemons] = useState([]);
  const [pokiSearch, setPokiSearch] = useState("");
 

  useEffect(() => {
    fetch("http://localhost:4000/pokemon")
      .then((r) => r.json())
      .then((data) => setPokemons(data));
  }, []);
  const searchName = pokemons.filter((pokemonName) => {
    return pokemonName.name.toLowerCase().includes(pokiSearch.toLowerCase());
  });
  return (
    <>
      <Header pokemons={pokemons} setPokemons={setPokemons} />
      <PokemonPage
        pokemons={searchName}
        setPokemons={setPokemons}
        setPokiSearch={setPokiSearch}
        pokiSearch={pokiSearch}
      />
    </>
  );
}

export default App;
