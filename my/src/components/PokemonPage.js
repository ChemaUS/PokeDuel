import PokemonList from "./PokemonList";
import PokemonTeam from "./PokemonTeam";


function PokemonPage({ setPokemons, pokemons, setPokiSearch, pokiSearch }) {
  return (
    <div>
      <PokemonList pokiSearch={pokiSearch} setPokiSearch={setPokiSearch} pokemons={pokemons} />
      <PokemonTeam />

    </div>
  );
}

export default PokemonPage;
