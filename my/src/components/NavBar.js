import React from "react";

import { Link } from "react-router-dom";

function NavBar() {
  return (
    <div className="navBar">
      <nav>
        <div id="PokémonLink">
          <button>
            <Link className="" to="/">
              Pokémon
            </Link>
          </button>
        </div>
        <div id="PokémonLink">
          <button>
            <Link className="" to="/PokeTeam">
              Poké Team
            </Link>
          </button>
        </div>
        <div id="PokémonLink">
          <button>
            <Link className="" to="/pokeDuel">
              Poké Duel
            </Link>
          </button>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
