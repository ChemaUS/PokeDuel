function NavBar() {
  return (
    <div className="navBar">
      <span>
        <button className="View">Viéw</button>
      </span>

      <span>
        <input
          className="searchBar"
          type="text"
          placeholder="Search..."
        ></input>
      </span>

      <span>
        <button className="Poke">Poké</button>
      </span>
    </div>
  );
}

export default NavBar;
