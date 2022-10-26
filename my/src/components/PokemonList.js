import PokemonCard from "./PokemonCard";
import NameSearch from "./NameSearch";

function PokemonList({ pokemons, setPokiSearch, pokiSearch }) {
  const renderPoks = pokemons.map(pokemon => {
    return <PokemonCard key={pokemon.id} pokemon={pokemon} />

  })

  return (
    <>
      < ul >
        <NameSearch pokiSearch={pokiSearch}
          setPokiSearch={setPokiSearch} pokemons={pokemons} />
        {renderPoks}
      </ul >
    </>

  );
}

export default PokemonList;
