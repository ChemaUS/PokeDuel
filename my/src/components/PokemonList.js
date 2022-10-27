import PokemonCard from "./PokemonCard";
import NameSearch from "./NameSearch";

function PokemonList({ pokemons, setPokiSearch, pokiSearch , setTeams, teams}) {
  const renderPoks = pokemons.map(pokemon => {
    return <PokemonCard key={pokemon.id} pokemon={pokemon} setTeams={setTeams} teams={teams} />

  })

<<<<<<< HEAD
  
   return (
     
        <div className="searchCards">
=======
  return (
    <>
    <h1>Poké</h1>
      < ul >
>>>>>>> c7b7551a21fda17f4d59d6b20bc18956c3ed3956
        <NameSearch pokiSearch={pokiSearch}
          setPokiSearch={setPokiSearch} pokemons={pokemons} />
        {renderPoks}
       </div> 
  );
}

export default PokemonList;
