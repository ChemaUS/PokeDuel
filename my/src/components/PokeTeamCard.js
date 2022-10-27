import React, { useState } from "react"
function PokeTeamCard({ team, onDelete }) {
  const [hpEvs, setHpEvs] = useState('')
  const [atkEvs, setAtkEvs] = useState('')
  const [defenseEvs, setDefenseEvs] = useState('')
  const [spAtkEvs, setSpAtkEvs] = useState('')
  const [spDefenseEvs, setSpDefenseEvs] = useState('')
  const [speedEvs, setSpeedEvs] = useState('')
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
          <p>HP:{team.hp}
            <input type="number" id="ev-hp-number" min="0" max="252" step="4"
              value={hpEvs} onChange={e => setHpEvs(e.target.value)}>
            </input>
            <input type="range" id="ev-hp-range" min="0" max="252" step="4" value={hpEvs} onChange={e => setHpEvs(e.target.value)}>
            </input>

          </p>
          <p>Attack: {team.attack}
            <input type="number" id="ev-hp-number" min="0" max="252" step="4"
              value={atkEvs} onChange={e => setAtkEvs(e.target.value)}>
            </input>
            <input type="range" id="ev-hp-range" min="0" max="252" step="4" value={atkEvs} onChange={e => setAtkEvs(e.target.value)}>
            </input>
          </p>
          <p>Defense: {team.defense}
            <input type="number" id="ev-hp-number" min="0" max="252" step="4"
              value={defenseEvs} onChange={e => setDefenseEvs(e.target.value)}>
            </input>
            <input type="range" id="ev-hp-range" min="0" max="252" step="4" value={defenseEvs} onChange={e => setDefenseEvs(e.target.value)}>
            </input>
          </p>
          <p>Special attack: {team["spattack"]}
            <input type="number" id="ev-hp-number" min="0" max="252" step="4"
              value={spAtkEvs} onChange={e => setSpAtkEvs(e.target.value)}>
            </input>
            <input type="range" id="ev-hp-range" min="0" max="252" step="4" value={spAtkEvs} onChange={e => setSpAtkEvs(e.target.value)}>
            </input>
          </p>
          <p>Special defense: {team["spdefense"]}
            <input type="number" id="ev-hp-number" min="0" max="252" step="4"
              value={spDefenseEvs} onChange={e => setSpDefenseEvs(e.target.value)}>
            </input>
            <input type="range" id="ev-hp-range" min="0" max="252" step="4" value={spDefenseEvs} onChange={e => setSpDefenseEvs(e.target.value)}>
            </input>
          </p>
          <p>Speed: {team.speed}
            <input type="number" id="ev-hp-number" min="0" max="252" step="4"
              value={speedEvs} onChange={e => setSpeedEvs(e.target.value)}>
            </input>
            <input type="range" id="ev-hp-range" min="0" max="252" step="4" value={speedEvs} onChange={e => setSpeedEvs(e.target.value)}>
            </input>
          </p>

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
