import PokemonList from "./PokemonList";
import PokemonTeam from "./PokemonTeam";

function PokemonPage({ setPokemons, pokemons }) {
  return (
    <div>
      <PokemonList pokemons={pokemons} />
      <PokemonTeam />
    </div>
  );
}

export default PokemonPage;
