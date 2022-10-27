
import React from 'react';

import { Link } from "react-router-dom";


function NavBar() {


  return (
    <div className="navBar">
      <nav>
        <Link className="searchBar" to="/">
          Poké
        </Link>
        <Link className="searchBar" to="/PokeTeam">
          Poké Team
        </Link>
        <Link className="searchBar" exact to="/pokeDuel">
          Poké Duel
        </Link>
      </nav>
    </div>
  );
}

export default NavBar;
