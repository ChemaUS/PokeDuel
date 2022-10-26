import PokemonCard from "./PokemonCard";

function PokemonList({pokemons, setTeams, teams}) {
  const renderPoks = pokemons.map(pokemon => {
    return <PokemonCard key={pokemon.id} pokemon={pokemon} setTeams={setTeams} teams={teams}/>
  })

  return (
    <ul>
      {renderPoks}
    </ul>
  );
}

export default PokemonList;
