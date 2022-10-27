import Draggable from "react-draggable";
import PokeTeamCard from "./PokeTeamCard";

function PokemonTeam({ teams, setTeams, onDelete }) {


  const teamList = teams.map((team) => {
    return (
      <PokeTeamCard
        team={team}
        key={team.id}
        teams={teams}
        setTeams={setTeams}
        onDelete={onDelete}
      />
    );
  });

  return (
    <>
      <div className="header">
        <h1>Poké Team</h1>
      </div>

      <ul>{teamList}</ul>
      
    </>
  );
}

export default PokemonTeam;
