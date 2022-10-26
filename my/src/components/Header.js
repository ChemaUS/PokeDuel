import React from "react";
import NavBar from "./NavBar";
function Header({ setPokiSearch, pokiSearch, pokemons }) {
  //const renderImage = pokemons.map(pokemonImage => {
  //return <Roster key={pokemonImage.id} pokemonImage={pokemonImage} />
  //})
  return (
    <div className="header">
      <h1>Poké Duels</h1>
      <NavBar pokemons={pokemons} setPokiSearch={setPokiSearch}
        pokiSearch={pokiSearch} />
      <div>
        <p>Team</p>
        <a href="https://en.wikipedia.org/wiki/Pok%C3%A9mon" target="_blank">
          <p>Pokémon</p>
        </a>
        <p>Duel</p>
      </div>
    </div>
  );
}

export default Header;
