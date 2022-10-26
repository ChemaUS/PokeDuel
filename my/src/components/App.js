import React, { useState, useEffect } from "react";
import { Switch, Route } from "react-router-dom"
import Header from "./Header";
import NavBar from "./NavBar";
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
      <NavBar />
      <PokemonPage pokemons={pokemons} setPokemons={setPokemons} />
    </>
  );
}

export default App;
