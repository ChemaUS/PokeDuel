import React, {useState} from 'react';

function NavBar() {

const [show, setShow] = useState("")

  return (
    <div className="navBar">
      <span>
        <button className="View">View</button>
      </span>
      <span>
        <button className="Poke">Team</button>
      </span>
    </div>
  );
}

export default NavBar;
