import React, { useState, useEffect } from "react";
import Header from "./Header";
import NavBar from "./NavBar";
import Stats from "./Stats";
import PokemonPage from "./PokemonPage";

function App() {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/pokemon")
      .then((r) => r.json())
      .then((data) => setPokemons(data));
  }, []);

  return (
    <>
      <Header />
      <Stats />
      <NavBar />
      <PokemonPage pokemons={pokemons} setPokemons={setPokemons} />
    </>
  );
}

export default App;
