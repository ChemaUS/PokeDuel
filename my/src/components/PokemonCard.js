
function PokemonCard({ pokemon, setTeams, teams }) {
  function handleSubmit(e) {
    e.preventDefault();
    fetch(`http://localhost:4000/PokeTeam`, {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name: pokemon.name,
        image: pokemon.image,
        nature: pokemon.nature,
        hp: pokemon.hp,
        attack: pokemon.attack,
        defense: pokemon.defense,
        spattack: pokemon['sp.attack'],
        spdefense: pokemon['sp.defense'],
        speed: pokemon.speed,
      })
    })
      .then(r => r.json())
      .then(newObj => setTeams([...teams, newObj]))
  }
  return (
    <li className="pokeCard">
      <h3>{pokemon.name}</h3>
      <img src={pokemon.image} alt={pokemon.name} />
      <p>HP:{pokemon.hp}</p>
      <p>Attack: {pokemon.attack}</p>
      <p>Defense: {pokemon.defense}</p>
      <p>Special attack: {pokemon["sp.attack"]}</p>
      <p>Special defense: {pokemon["sp.defense"]}</p>
      <p>Speed: {pokemon.speed}</p>
      <p>Nature: {pokemon.nature}</p>
      <button className="add" onClick={handleSubmit} >➕ Add to PokéTeam</button>
    </li>
  );
}

export default PokemonCard;

