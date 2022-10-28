import React, { useState } from "react";

function PokeDuel({ teams, pokemons }) {
  const [opponent, setOpponent] = useState({
    name: "",
    image: "",
    nature: "",
    hp: "",
    attack: "",
    defense: "",
    "special attack": "",
    "special defence": "",
    speed: "",
  });
  const options = teams.map((team) => {
    return <option key={team.id}>{team.name}</option>;
  });

  function handleClick() {
    const randomOpp = pokemons.filter((opponent) => {
      return opponent.id === Math.floor(Math.random() * 10);
    });
    setOpponent(randomOpp[0]);
  }
  return (
    <div className="header">
      <h1>Poké Duel</h1>
      <div id="choose">
        <h2>Choose form Poké Team </h2>
        <select>{options}</select>
      </div>
      <div>
      <li className="pokeCard">
        <h4>Random Opponent </h4>
        <h2>{opponent.name}</h2>
          <img src={opponent.image} alt="pokemon"/>
          <p>HP:{opponent.hp}</p>
          <p>Attack: {opponent.attack}</p>
          <p>Defense: {opponent.defense}</p>
          <p>Special attack: {opponent["sp.attack"]}</p>
          <p>Special defense: {opponent["sp.defense"]}</p>
          <p>Speed: {opponent.speed}</p>
          <p>Nature: {opponent.nature}</p>
        </li>
        </div>
      <div id="duelButton" >
        <button onClick={handleClick}>Find Opponent</button>
        </div>
    </div>
  );
}

export default PokeDuel;
