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
  const [myPoke, setMyPoke] = useState({
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
    return (
      <option key={team.id} team={team}>
        {team.name}
      </option>
    );
  });

  function handleChange(e) {
    const newObj = {
      name: myPoke.name,
      image: myPoke.image,
      nature: myPoke.nature,
      hp: myPoke.hp,
      attack: myPoke.attack,
      defense: myPoke.defense,
      "special attack": myPoke["spattack"],
      "special defence": myPoke["spdefense"],
      speed: myPoke.speed,
    };
    setMyPoke(newObj);
  }

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
        <select onChange={handleChange}>{options}</select>
        <div></div>
      </div>
      <div>
        <li className="pokeCard">
          <h4>Random Opponent </h4>
          <img src={opponent.image} alt={opponent.name} />
          <p>HP:{opponent.hp}</p>
          <p>Attack: {opponent.attack}</p>
          <p>Defense: {opponent.defense}</p>
          <p>Special attack: {opponent["sp.attack"]}</p>
          <p>Special defense: {opponent["sp.defense"]}</p>
          <p>Speed: {opponent.speed}</p>
          <p>Nature: {opponent.nature}</p>
        </li>
        <div id="duelButton">
          <button onClick={handleClick}>Find Opponent</button>
        </div>
      </div>
    </div>
  );
}

export default PokeDuel;
