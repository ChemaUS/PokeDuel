import PokemonCard from "./PokemonCard";
import NameSearch from "./NameSearch";

function PokemonList({ pokemons, setPokiSearch, pokiSearch , setTeams, teams}) {
  const renderPoks = pokemons.map(pokemon => {
    return <PokemonCard key={pokemon.id} pokemon={pokemon} setTeams={setTeams} teams={teams} />

  })

  return (
    <>
    <h1>Poké</h1>
      < ul >
        <NameSearch pokiSearch={pokiSearch}
          setPokiSearch={setPokiSearch} pokemons={pokemons} />
        {renderPoks}
      </ul >
    </>

  );
}

export default PokemonList;
