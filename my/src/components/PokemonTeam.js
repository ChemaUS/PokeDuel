import Draggable from "react-draggable";

function PokemonTeam() {
  return (
    <>
      <h2></h2>
      <form>
        <label>Pokemon name</label>
      </form>
      <Draggable>
        <div className="box">
          <div>Move me around!</div>
        </div>
      </Draggable>
    </>
  );
}

export default PokemonTeam;
