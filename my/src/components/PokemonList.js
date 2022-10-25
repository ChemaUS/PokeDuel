import PokemonCard from "./PokemonCard";

function PokemonList({pokemons}) {
  const renderPoks = pokemons.map(pokemon => {
    return <PokemonCard key={pokemon.id} pokemon={pokemon}/>
  })

  return (
    <ul>
      {renderPoks}
    </ul>
  );
}

export default PokemonList;
