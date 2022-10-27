function PokeTeamCard({ team, onDelete }) {
  function handleDelete() {
    fetch(`http://localhost:4000/PokeTeam/${team.id}`, {
      method: "DELETE",
    })
      .then((r) => r.json())
      .then(() => onDelete(team));
  }
  return (
    <div>
      <div className="statsDiv">
        <div className="pokeImage">
          <img src={team.image} alt={team.name} />
          <h3>{team.name}</h3>
        </div>
        <div className="statsBar">
          Pokémon Stats
          <p>HP:{team.hp}</p>
          <p>Attack: {team.attack}</p>
          <p>Defense: {team.defense}</p>
          <p>Special attack: {team["spattack"]}</p>
          <p>Special defense: {team["spdefense"]}</p>
          <p>Speed: {team.speed}</p>
          <p>Nature: {team.nature}</p>
        </div>
      </div>
      <button className="add"> Edit</button>
      <button className="add" onClick={handleDelete}>
        {" "}
        Delete
      </button>
    </div>
  );
}

export default PokeTeamCard;
