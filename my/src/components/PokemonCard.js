import Draggable from "react-draggable";

function PokemonCard({pokemon}) {
  return (
    <Draggable>
    <div>
      <h3>{pokemon.name}</h3>
      <img
        src={pokemon.image}
        alt={pokemon.name}
        />
      <ul>
        <li>HP:{pokemon.hp}</li>
        <li>Attack: {pokemon.attack} </li>
        <li>Defense: {pokemon.defense}</li>
        <li>Speed: {pokemon.speed}</li>
        <li>Nature: {pokemon.nature}</li>
      </ul>
        <button>Add to MyPokeTeam</button>
    </div>
      </Draggable>
  );
}

export default PokemonCard;
