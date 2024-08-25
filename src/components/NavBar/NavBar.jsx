import logo from "../../assets/deathstar.png"

const NavBar = () => {
  return ( 
    <header>
      <img className="logo" src={ logo } alt="star wars" />
      <nav>
        <h2>Star Wars Starships</h2>
      </nav>
      <img className="logo" src={ logo } alt="star wars" />
    </header>
  );
}

export default NavBar;