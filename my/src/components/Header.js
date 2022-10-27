import React from "react";
import NavBar from "./NavBar";
function Header({ setPokiSearch, pokiSearch, pokemons, setPage }) {
  //const renderImage = pokemons.map(pokemonImage => {
  //return <Roster key={pokemonImage.id} pokemonImage={pokemonImage} />
  //})
  return (
    <div className="header">
      <h1>Poké Duels</h1>
      <div id="scroll-container">
        <div id="scroll-text">
          <span>
          <img id="gotta" src="https://i.pinimg.com/originals/32/eb/23/32eb230b326ee3c76e64f619a06f6ebb.png" />
          </span>
          <img id="gotta" src="https://i.pinimg.com/originals/32/eb/23/32eb230b326ee3c76e64f619a06f6ebb.png" />
          <span>
          </span>
          <span>
          <img id="gotta" src="https://i.pinimg.com/originals/32/eb/23/32eb230b326ee3c76e64f619a06f6ebb.png" />
          </span>
          <img id="gotta" src="https://i.pinimg.com/originals/32/eb/23/32eb230b326ee3c76e64f619a06f6ebb.png" />
          <span>
          </span>
        </div>
      </div>
      <div>
        <p>Team</p>
        <a href="https://en.wikipedia.org/wiki/Pok%C3%A9mon" target="_blank">
          <p>Pokémon</p>
        </a>
        <p>Duel</p>
      </div>
      <NavBar pokemons={pokemons} setPokiSearch={setPokiSearch}
        pokiSearch={pokiSearch} onChangePage={setPage}/>
    </div>
  );
}

export default Header;
