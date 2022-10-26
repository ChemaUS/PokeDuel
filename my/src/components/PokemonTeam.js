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
