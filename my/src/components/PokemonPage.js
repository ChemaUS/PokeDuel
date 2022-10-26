import PokemonList from "./PokemonList";
import PokemonTeam from "./PokemonTeam";
import PokeDuel from "./PokeDuel";
import React, { useState, useEffect } from "react";
import { Switch, Route } from "react-router-dom";

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
        <Route exact patch="/pokeDuel">
          <PokeDuel />
        </Route>
      </Switch>
    </div>
  );
}

export default PokemonPage;
