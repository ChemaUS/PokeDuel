import Draggable from "react-draggable";

function PokemonCard({ pokemon }) {
  return (
    <Draggable>
      <li className="pokeCard">
        <h3>{pokemon.name}</h3>
        <img src={pokemon.image} alt={pokemon.name} />
        <p>HP:{pokemon.hp}</p>
        <p>Attack: {pokemon.attack} </p>
        <p>Defense: {pokemon.defense}</p>
        <p>Speed: {pokemon.speed}</p>
        <p>Nature: {pokemon.nature}</p>
        <button className="add">➕ Add to PokéTeam</button>
      </li>
    </Draggable>
  );
}

export default PokemonCard;
