import PokemonList from "./PokemonList";
import PokemonTeam from "./PokemonTeam";
import React, {useState} from "react";

function PokemonPage({ setPokemons, pokemons }) {
  const [teams, setTeams] = useState([]);
  return (
    <div>
      <PokemonList pokemons={pokemons}  teams={teams} setTeams={setTeams} />
      <PokemonTeam teams={teams} setTeams={setTeams}/>
    </div>
  );
}

export default PokemonPage;
