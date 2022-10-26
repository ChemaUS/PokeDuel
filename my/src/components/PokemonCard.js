// import Draggable from "react-draggable";

function PokemonCard({ pokemon }) {
  return (
    <div>
      <ul>
        <h3>{pokemon.name}</h3>
        <img src={pokemon.image} alt={pokemon.name} />
        <li>HP:{pokemon.hp}</li>
        <li>Attack: {pokemon.attack} </li>
        <li>Defense: {pokemon.defense}</li>
        <li>Special attack: {pokemon["sp.attack"]} </li>
        <li>Special defense: {pokemon["sp.defense"]}</li>
        <li>Speed: {pokemon.speed}</li>
        <li>Nature: {pokemon.nature}</li>
        <button>Add to MyPokeTeam</button>
      </ul>
    </div>
  );
}

export default PokemonCard;
