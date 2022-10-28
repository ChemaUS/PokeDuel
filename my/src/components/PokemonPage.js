import PokemonList from "./PokemonList";
import PokemonTeam from "./PokemonTeam";
import PokeDuel from "./PokeDuel";
import React, { useState, useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import Draggable from "react-draggable";

function PokemonPage({ pokemons, setPokiSearch, pokiSearch }) {
  const [teams, setTeams] = useState([]);
  useEffect(() => {
    fetch("http://localhost:4000/PokeTeam")
      .then((res) => res.json())
      .then((data) => setTeams(data));
  }, []);

  function updatedArray(deletedTeam) {
    const updatedTeams = teams.filter((team) => {
      return team.id !== deletedTeam.id;
    });
    setTeams(updatedTeams);
  }
  return (
    <div>
      <Switch>
        <Route exact path="/">
          <PokemonList
            pokiSearch={pokiSearch}
            setPokiSearch={setPokiSearch}
            pokemons={pokemons}
            teams={teams}
            setTeams={setTeams}
          />
        </Route>
        <Route path="/PokeTeam">
          <PokemonTeam
            teams={teams}
            setTeams={setTeams}
            onDelete={updatedArray}
          />
        </Route>
        <Route patch="/pokeDuel">
          <PokeDuel teams={teams} pokemons={pokemons} />
        </Route>
      </Switch>
      <Draggable>
        <div className="box">
          <img
            className="pokeball"
            src="https://i.pinimg.com/originals/32/eb/23/32eb230b326ee3c76e64f619a06f6ebb.png"
            alt=""
          />
        </div>
      </Draggable>
      <div className="toTheTop">
        <a href="Header">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYwb1zSxXjhhXFc5Wii5bb6NdEo4-rzfMshQ&usqp=CAU"
            alt=""
          />
        </a>
      </div>
    </div>
  );
}

export default PokemonPage;
