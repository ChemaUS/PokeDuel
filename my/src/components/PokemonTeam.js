import React, { useState, useEffect } from "react";
import Draggable from "react-draggable";
import PokeTeamCard from "./PokeTeamCard";

function PokemonTeam({teams, setTeams}) {
  

  useEffect(() => {
    fetch("http://localhost:4000/PokeTeam")
      .then((res) => res.json())
      .then((data) => setTeams(data));
  }, []);

  const teamList = teams.map((team) => {
    return <PokeTeamCard team={team} key={team.id} setTeams={setTeams}/>;
  });

  return (
    <>
      <div className="header">
        <h1>Poké Team</h1>
      </div>

      <ul>{teamList}</ul>
      <Draggable>
        <div className="box">
          <div>
            <img
              className="pokeball"
              src="https://i.pinimg.com/originals/32/eb/23/32eb230b326ee3c76e64f619a06f6ebb.png"
            />
          </div>
        </div>
      </Draggable>
      <div className="toTheTop">
        <a href="Header">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYwb1zSxXjhhXFc5Wii5bb6NdEo4-rzfMshQ&usqp=CAU" />
        </a>
      </div>
    </>
  );
}

export default PokemonTeam;
