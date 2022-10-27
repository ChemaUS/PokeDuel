<<<<<<< HEAD
import React, {useState} from 'react';
=======
import { Link } from "react-router-dom";
>>>>>>> c7b7551a21fda17f4d59d6b20bc18956c3ed3956

function NavBar() {

const [show, setShow] = useState("")

  return (
    <div className="navBar">
<<<<<<< HEAD
      <span>
        <button className="View">View</button>
      </span>
      <span>
        <button className="Poke">Team</button>
      </span>
=======
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
>>>>>>> c7b7551a21fda17f4d59d6b20bc18956c3ed3956
    </div>
  );
}

export default NavBar;
